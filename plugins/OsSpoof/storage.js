import { WebpackModules, PluginUtilities } from "@zlibrary";
import { getPlatform } from "./Platforms.js";
const Platform = WebpackModules.getModule((m) => m.PlatformTypes?.WINDOWS);

const storage = PluginUtilities.loadData("OsSpoof", "settings", {
	platform: getPlatform(Platform.getPlatform()),
	websocket: "default",
});

export function set(path, value) {
	_.set(storage, path, value);
	PluginUtilities.saveData("OsSpoof", "settings", storage);
	return storage;
}

export function get(path, defaultValue) {
	return _.get(
		PluginUtilities.loadData("OsSpoof", "settings", storage),
		path,
		defaultValue
	);
}
