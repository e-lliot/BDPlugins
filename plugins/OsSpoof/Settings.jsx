import { WebpackModules } from "@zlibrary";
import { storage, set, get } from "./storage.js";
import forceUpdateApp from "./forceUpdateApp.js";
import { discordWebSocket, webSocketValid } from "./WebSocket.js";

const { useState } = React;

const Header = WebpackModules.getByDisplayName("HeaderBar");
const FormDivider = WebpackModules.getByDisplayName("FormDivider");
const RadioGroup = WebpackModules.getByDisplayName("RadioGroup");

export default function Settings() {
	const [platform, setPlatform] = useState(get("platform"));
	const [websocket, setWebsocket] = useState(get("websocket"));
	return (
		<>
			<Header>UI Spoof</Header>
			<FormDivider style={{ marginTop: "8px", marginBottom: "8px" }} />
			<RadioGroup
				options={[
					{ name: "Windows", value: "win32" },
					{ name: "OSX", value: "darwin" },
					{ name: "Linux", value: "linux" },
				]}
				value={platform}
				onChange={(e) => {
					if (e.value !== platform) {
						setPlatform(e.value);
						set("platform", e.value);
						forceUpdateApp();
					}
				}}
			/>
			<Header>WebSocket Spoof</Header>
			<FormDivider style={{ marginTop: "8px", marginBottom: "8px" }} />
			<RadioGroup
				options={[
					{ name: "Default", value: "default" },
					{ name: "Windows", value: "win32" },
					{ name: "OSX", value: "darwin" },
					{ name: "Linux", value: "linux" },
					{ name: "TempleOS", value: "temple" },
					{ name: "HaikuOS", value: "haiku" },
					{ name: "Web", value: "web" },
					{ name: "Android", value: "android" },
					{ name: "iOS", value: "ios" },
					{ name: "Windows 10 Mobile", value: "wp" },
				]}
				value={websocket}
				onChange={(e) => {
					if (e.value !== websocket) {
						setWebsocket(e.value);
						set("websocket", e.value);
						webSocketValid = false;
						if (discordWebSocket) {
							console.log("[OsSpoof] Killing invalid WebSocket...");
							discordWebSocket.close(1000);
						}
					}
				}}
			/>
		</>
	);
}
