import { Utilities } from "@zlibrary";

const storage = Utilities.loadData("OsSpoof", "settings", {
	platform: "win32",
	websocket: "default",
});

export function set(path, value) {
	_.set(storage, path, value);
	Utilities.saveData("OsSpoof", "settings", storage);
	return storage;
}

export function get(path, defaultValue) {
	return _.get(
		Utilities.loadData("OsSpoof", "settings", storage),
		path,
		defaultValue
	);
}
