import { Patcher, WebpackModules } from "@zlibrary";
import BasePlugin from "@zlibrary/plugin";
import Settings from "./Settings.jsx";
import forceUpdateApp from "./forceUpdateApp.js";
import { get } from "./storage.js";
import { Platforms } from "./Platforms.js";
import { discordWebSocket, webSocketValid } from "./WebSocket.js";

const Platform = WebpackModules.getModule((m) => m.PlatformTypes?.WINDOWS);

const Packer = WebpackModules.getModule((m) =>
	m.prototype?.hasOwnProperty("unpack")
).prototype;

let websocketInited = false;

const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

export default class OsSpoof extends BasePlugin {
	onStart() {
		console.log("[OsSpoof] Initializing...");

		for (const [functionName, platformName] of Object.entries(Platforms)) {
			Patcher.instead(
				Platform,
				`is${functionName}`,
				(that, args, t) => {
					return get("platform").toLowerCase() === platformName.toLowerCase();
				}
			);
		}
		
		Patcher.before(WebSocket.prototype, "send", (that, args) => {
			if (!(args[0] instanceof ArrayBuffer)) return;
			const data = Packer.unpack(args[0]);

			if (that.url.startsWith("wss://gateway.discord.gg"))
			{
				// We're assuming that there's _only_ **one** WebSocket to Discord's server.
				if (!webSocketValid)
				{
					console.log("[OsSpoof]: Killing invalid WebSocket...");
					that.close(1000);
					webSocketValid = true;
					websocketInited = false;
					return args;
				}
			}
			
			if (data.op === 6 && !websocketInited) {
				console.log("[OsSpoof] Blocking resume with dumb session ID...");
				data.d.session_id = genRanHex(32);
			}

			if (data.op === 2) {
				console.log("[OsSpoof] Identifying as the desired platform...");
				switch (get("websocket")) {
					case "win32":
						data.d.properties = { browser: "Discord Client", os: "Windows" };
						break;
					case "darwin":
						data.d.properties = { browser: "Discord Client", os: "Mac OS X" };
						break;
					case "linux":
						data.d.properties = { browser: "Discord Client", os: "Linux" };
						break;
					case "temple":
						data.d.properties = { browser: "Discord Client", os: "TempleOS" };
						break;
					case "haiku":
						data.d.properties = { browser: "Discord Client", os: "HaikuOS" };
						break;
					case "web":
						data.d.properties = { browser: "Discord Web", os: "Other" };
						break;
					case "android":
						data.d.properties = { browser: "Discord Android", os: "Android" };
						break;
					case "ios":
						data.d.properties = { browser: "Discord iOS", os: "iOS" };
						break;
					case "wp":
						// There weren't any official Discord clients for Windows Phones...
						data.d.properties = { browser: "Discord Android", os: "Windows Phone" };
						break;
				}
				websocketInited = true;
				discordWebSocket = that;
			}

			args[0] = Packer.pack(data);

			return args;
		});

		forceUpdateApp();
	}
	onStop() {
		Patcher.unpatchAll();
		forceUpdateApp();
	}

	getSettingsPanel() {
		return <Settings />;
	}
}
