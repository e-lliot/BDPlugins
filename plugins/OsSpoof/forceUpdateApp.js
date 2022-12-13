export default function forceUpdateApp() {
	// I don't know what this function does, but right now, "app-mount"
	// exists but _reactRootContainer does not.
	//
	// Anyway, the main reason I maintain this plugin is for the WebSocket
	// spoof, not the UI spoof.
	let root =
		document.getElementById("app-mount")
			?._reactRootContainer?._internalRoot?.current;
	while ((root != null) && (root?.type?.displayName !== "App")) {
		root?.stateNode?.forceUpdate?.();
		root = root.child;
	}
}
