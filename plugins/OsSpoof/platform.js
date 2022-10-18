import { WebpackModules } from "@zlibrary";
import forceUpdateApp from "./forceUpdateApp";

const Platform = WebpackModules.getModule((m) => m.platformName && m.platformVersion);

export function updateSpoofPlatform(spoofPlatform) {
    console.log("[OsSpoof] Setting UI spoof platform to " + spoofPlatform + "...");
    Platform.platformName = translatePlatform(spoofPlatform);
    Platform.platformVersion = versionForPlatform(spoofPlatform);
    Platform.platformFullVersion = fullVersionForPlatform(spoofPlatform);
    forceUpdateApp();
}

export function getRealPlatform() {
    return codeFromPlatform(Platform.platformName);
}

export function translatePlatform(platform) {
    switch (platform) {
        case "win32":
            return "Windows";
        case "darwin":
            return "Mac OS X";
        case "linux":
            return "Linux";
    }
}

export function codeFromPlatform(platform) {
    switch (platform) {
        case "Windows":
            return "win32";
        case "Mac OS X":
        case "Mac OS":
            return "darwin";
        case "Linux":
            return "linux";
    }
}

export function versionForPlatform(platform) {
    switch (platform) {
        case "win32":
            return "10";
        case "darwin":
            return "12";
        case "linux":
            return "6";
    }
}

export function fullVersionForPlatform(platform) {
    switch (platform) {
        case "win32":
            return "10";
        case "darwin":
            return "12.0";
        case "linux":
            return "6.0";
    }
}