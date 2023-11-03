import { Utilities } from "@zlibrary";

var storage = Utilities.loadData("OsSpoof", "settings", {
	platform: "win32",
	websocket: "default",
});

export function set(path, value) {
	storage[path] = value;
	Utilities.saveData("OsSpoof", "settings", storage);
	return storage;
}

export function get(path, defaultValue) {
	storage = Utilities.loadData("OsSpoof", "settings");
	if (storage[path] === undefined) {
		return defaultValue;
	}
	return storage[path];
}
