/**
 * @name Fuses
 * @author A user
 * @version 0.4.1
 * @description Shows the time from somebody's timezone
 * @source https://github.com/abUwUser/BDPlugins/tree/main/plugins/Fuses
 * @updateUrl https://raw.githubusercontent.com/abUwUser/BDPlugins/compiled/Fuses/Fuses.plugin.js
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else@*/
/* Generated Code */
const config = {
	"info": {
		"name": "Fuses",
		"authors": [{
			"name": "A user",
			"discord_id": "264062457448759296",
			"github_username": "abUwUser",
			"twitter_username": "auwuser"
		}],
		"version": "0.4.1",
		"description": "Shows the time from somebody's timezone",
		"github": "https://github.com/abUwUser/BDPlugins/tree/main/plugins/Fuses",
		"github_raw": "https://raw.githubusercontent.com/abUwUser/BDPlugins/compiled/Fuses/Fuses.plugin.js"
	},
	"build": {
		"copy": true,
		"zlibrary": true,
		"watch": true,
		"release": {
			"source": true,
			"public": true
		}
	},
	"changelog": [{
		"type": "fixed",
		"title": "Coccinellidae",
		"items": [
			"Fixes some things that I forgot to style",
			"Hides the autocomplete when a country was selected"
		]
	}]
};
function buildPlugin([BasePlugin, PluginApi]) {
	const module = {
		exports: {}
	};
	(() => {
		"use strict";
		class StyleLoader {
			static styles = "";
			static element = null;
			static append(module, css) {
				this.styles += `/* ${module} */\n${css}`;
			}
			static inject(name = config.info.name) {
				if (this.element) this.element.remove();
				this.element = document.head.appendChild(Object.assign(document.createElement("style"), {
					id: name,
					textContent: this.styles
				}));
			}
			static remove() {
				if (this.element) {
					this.element.remove();
					this.element = null;
				}
			}
		}
		function ___createMemoize___(instance, name, value) {
			value = value();
			Object.defineProperty(instance, name, {
				value,
				configurable: true
			});
			return value;
		};
		const Modules = {
			get 'react-spring'() {
				return ___createMemoize___(this, 'react-spring', () => BdApi.findModuleByProps('useSpring'))
			},
			'@discord/utils': {
				get 'joinClassNames'() {
					return ___createMemoize___(this, 'joinClassNames', () => BdApi.findModule(e => e.toString().indexOf('return e.join(" ")') > 200))
				},
				get 'useForceUpdate'() {
					return ___createMemoize___(this, 'useForceUpdate', () => BdApi.findModuleByProps('useForceUpdate')?.useForceUpdate)
				},
				get 'Logger'() {
					return ___createMemoize___(this, 'Logger', () => BdApi.findModuleByProps('setLogFn')?.default)
				},
				get 'Navigation'() {
					return ___createMemoize___(this, 'Navigation', () => BdApi.findModuleByProps('replaceWith', 'currentRouteIsPeekView'))
				}
			},
			'@discord/components': {
				get 'Tooltip'() {
					return ___createMemoize___(this, 'Tooltip', () => BdApi.findModuleByDisplayName('Tooltip'))
				},
				get 'TooltipContainer'() {
					return ___createMemoize___(this, 'TooltipContainer', () => BdApi.findModuleByProps('TooltipContainer')?.TooltipContainer)
				},
				get 'TextInput'() {
					return ___createMemoize___(this, 'TextInput', () => BdApi.findModuleByDisplayName('TextInput'))
				},
				get 'SlideIn'() {
					return ___createMemoize___(this, 'SlideIn', () => BdApi.findModuleByDisplayName('SlideIn'))
				},
				get 'SettingsNotice'() {
					return ___createMemoize___(this, 'SettingsNotice', () => BdApi.findModuleByDisplayName('SettingsNotice'))
				},
				get 'TransitionGroup'() {
					return ___createMemoize___(this, 'TransitionGroup', () => BdApi.findModuleByDisplayName('TransitionGroup'))
				},
				get 'Button'() {
					return ___createMemoize___(this, 'Button', () => BdApi.findModule(m => 'DropdownSizes' in m && typeof(m) === 'function'))
				},
				get 'Popout'() {
					return ___createMemoize___(this, 'Popout', () => BdApi.findModuleByDisplayName('Popout'))
				},
				get 'Flex'() {
					return ___createMemoize___(this, 'Flex', () => BdApi.findModuleByDisplayName('Flex'))
				},
				get 'Text'() {
					return ___createMemoize___(this, 'Text', () => BdApi.findModuleByDisplayName('Text'))
				},
				get 'Card'() {
					return ___createMemoize___(this, 'Card', () => BdApi.findModuleByDisplayName('Card'))
				}
			},
			'@discord/modules': {
				get 'Dispatcher'() {
					return ___createMemoize___(this, 'Dispatcher', () => BdApi.findModuleByProps('dirtyDispatch', 'subscribe'))
				},
				get 'ComponentDispatcher'() {
					return ___createMemoize___(this, 'ComponentDispatcher', () => BdApi.findModuleByProps('ComponentDispatch')?.ComponentDispatch)
				},
				get 'EmojiUtils'() {
					return ___createMemoize___(this, 'EmojiUtils', () => BdApi.findModuleByProps('uploadEmoji'))
				},
				get 'PermissionUtils'() {
					return ___createMemoize___(this, 'PermissionUtils', () => BdApi.findModuleByProps('computePermissions', 'canManageUser'))
				},
				get 'DMUtils'() {
					return ___createMemoize___(this, 'DMUtils', () => BdApi.findModuleByProps('openPrivateChannel'))
				}
			},
			'@discord/stores': {
				get 'Messages'() {
					return ___createMemoize___(this, 'Messages', () => BdApi.findModuleByProps('getMessage', 'getMessages'))
				},
				get 'Channels'() {
					return ___createMemoize___(this, 'Channels', () => BdApi.findModuleByProps('getChannel', 'getDMFromUserId'))
				},
				get 'Guilds'() {
					return ___createMemoize___(this, 'Guilds', () => BdApi.findModuleByProps('getGuild'))
				},
				get 'SelectedGuilds'() {
					return ___createMemoize___(this, 'SelectedGuilds', () => BdApi.findModuleByProps('getGuildId', 'getLastSelectedGuildId'))
				},
				get 'SelectedChannels'() {
					return ___createMemoize___(this, 'SelectedChannels', () => BdApi.findModuleByProps('getChannelId', 'getLastSelectedChannelId'))
				},
				get 'Info'() {
					return ___createMemoize___(this, 'Info', () => BdApi.findModuleByProps('getSessionId'))
				},
				get 'Status'() {
					return ___createMemoize___(this, 'Status', () => BdApi.findModuleByProps('getStatus', 'getActivities', 'getState'))
				},
				get 'Users'() {
					return ___createMemoize___(this, 'Users', () => BdApi.findModuleByProps('getUser', 'getCurrentUser'))
				},
				get 'SettingsStore'() {
					return ___createMemoize___(this, 'SettingsStore', () => BdApi.findModuleByProps('afkTimeout', 'status'))
				},
				get 'UserProfile'() {
					return ___createMemoize___(this, 'UserProfile', () => BdApi.findModuleByProps('getUserProfile'))
				},
				get 'Members'() {
					return ___createMemoize___(this, 'Members', () => BdApi.findModuleByProps('getMember'))
				},
				get 'Activities'() {
					return ___createMemoize___(this, 'Activities', () => BdApi.findModuleByProps('getActivities'))
				},
				get 'Games'() {
					return ___createMemoize___(this, 'Games', () => BdApi.findModuleByProps('getGame', 'games'))
				},
				get 'Auth'() {
					return ___createMemoize___(this, 'Auth', () => BdApi.findModuleByProps('getId', 'isGuest'))
				},
				get 'TypingUsers'() {
					return ___createMemoize___(this, 'TypingUsers', () => BdApi.findModuleByProps('isTyping'))
				}
			},
			'@discord/actions': {
				get 'ProfileActions'() {
					return ___createMemoize___(this, 'ProfileActions', () => BdApi.findModuleByProps('fetchProfile'))
				},
				get 'GuildActions'() {
					return ___createMemoize___(this, 'GuildActions', () => BdApi.findModuleByProps('requestMembersById'))
				}
			},
			get '@discord/i18n'() {
				return ___createMemoize___(this, '@discord/i18n', () => BdApi.findModule(m => m.Messages?.CLOSE && typeof(m.getLocale) === 'function'))
			},
			get '@discord/constants'() {
				return ___createMemoize___(this, '@discord/constants', () => BdApi.findModuleByProps('API_HOST'))
			},
			get '@discord/contextmenu'() {
				return ___createMemoize___(this, '@discord/contextmenu', () => {
					const ctx = Object.assign({}, BdApi.findModuleByProps('openContextMenu'), BdApi.findModuleByProps('MenuItem'));
					ctx.Menu = ctx.default;
					return ctx;
				})
			},
			get '@discord/forms'() {
				return ___createMemoize___(this, '@discord/forms', () => BdApi.findModuleByProps('FormItem'))
			},
			get '@discord/scrollbars'() {
				return ___createMemoize___(this, '@discord/scrollbars', () => BdApi.findModuleByProps('ScrollerAuto'))
			},
			get '@discord/native'() {
				return ___createMemoize___(this, '@discord/native', () => BdApi.findModuleByProps('requireModule'))
			},
			get '@discord/flux'() {
				return ___createMemoize___(this, '@discord/flux', () => Object.assign({}, BdApi.findModuleByProps('useStateFromStores').default, BdApi.findModuleByProps('useStateFromStores')))
			},
			get '@discord/modal'() {
				return ___createMemoize___(this, '@discord/modal', () => Object.assign({}, BdApi.findModuleByProps('ModalRoot'), BdApi.findModuleByProps('openModal', 'closeAllModals')))
			},
			get '@discord/connections'() {
				return ___createMemoize___(this, '@discord/connections', () => BdApi.findModuleByProps('get', 'isSupported', 'map'))
			},
			get '@discord/sanitize'() {
				return ___createMemoize___(this, '@discord/sanitize', () => BdApi.findModuleByProps('stringify', 'parse', 'encode'))
			},
			get '@discord/icons'() {
				return ___createMemoize___(this, '@discord/icons', () => BdApi.findAllModules(m => m.displayName && ~m.toString().indexOf('currentColor')).reduce((icons, icon) => (icons[icon.displayName] = icon, icons), {}))
			},
			'@discord/classes': {
				get 'Timestamp'() {
					return ___createMemoize___(this, 'Timestamp', () => BdApi.findModuleByPrototypes('toDate', 'month'))
				},
				get 'Message'() {
					return ___createMemoize___(this, 'Message', () => BdApi.findModuleByPrototypes('getReaction', 'isSystemDM'))
				},
				get 'User'() {
					return ___createMemoize___(this, 'User', () => BdApi.findModuleByPrototypes('tag'))
				},
				get 'Channel'() {
					return ___createMemoize___(this, 'Channel', () => BdApi.findModuleByPrototypes('isOwner', 'isCategory'))
				}
			}
		};
		var __webpack_modules__ = {
			911: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
				var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, ".Fuses-category-category.Fuses-category-compact{position:inherit}.Fuses-category-category.Fuses-category-compact .Fuses-category-header{display:flex;align-items:center;justify-content:space-between;padding:2px;padding-left:10px;text-transform:uppercase;font-weight:600;font-size:.9rem}.Fuses-category-category.Fuses-category-compact .Fuses-category-header .Fuses-category-caret{float:right;display:inline-flex;color:var(--interactive-normal)}.Fuses-category-category.Fuses-category-compact .Fuses-category-header .Fuses-category-stroke{background-color:var(--background-modifier-accent);height:2px;flex:1;margin:0 5px 0 10px}.Fuses-category-category.Fuses-category-compact .Fuses-category-header .Fuses-category-label{color:var(--interactive-normal)}.Fuses-category-category.Fuses-category-compact .Fuses-category-content{padding-left:20px;width:calc(100% - 40px)}.Fuses-category-category.Fuses-category-default{background:rgba(32,34,37,.3);border:1px solid #202225;margin:5px;cursor:pointer;border-radius:3px;--color: var(--interactive-normal)}.Fuses-category-category.Fuses-category-default:hover{--color: var(--interactive-hover)}.Fuses-category-category.Fuses-category-default .Fuses-category-header{padding-right:5px;padding:10px 15px;padding-bottom:0;display:flex;align-items:center;justify-content:space-between}.Fuses-category-category.Fuses-category-default .Fuses-category-header .Fuses-category-stroke{display:none}.Fuses-category-category.Fuses-category-default .Fuses-category-header .Fuses-category-divider{position:relative}.Fuses-category-category.Fuses-category-default .Fuses-category-header .Fuses-category-label{font-size:1rem;font-weight:600;color:#fff;text-transform:uppercase}.Fuses-category-category.Fuses-category-default .Fuses-category-header .Fuses-category-caret{color:var(--color);transition:color .3s}.Fuses-category-category.Fuses-category-default.Fuses-category-opened .Fuses-category-content{padding:8px}.Fuses-category-category.Fuses-category-default.Fuses-category-opened .Fuses-category-header{background:rgba(32,34,37,.6)}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					category: "Fuses-category-category",
					compact: "Fuses-category-compact",
					header: "Fuses-category-header",
					caret: "Fuses-category-caret",
					stroke: "Fuses-category-stroke",
					label: "Fuses-category-label",
					content: "Fuses-category-content",
					default: "Fuses-category-default",
					divider: "Fuses-category-divider",
					opened: "Fuses-category-opened"
				};
				StyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString());
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals);
			},
			74: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
				var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, ".Fuses-style-section-look{font-weight:600;text-transform:uppercase}.Fuses-style-timer-positioning{position:absolute;bottom:5px;right:5px}.Fuses-style-timer-wrapper{display:flex;flex-direction:row;align-items:center;justify-content:center;background:rgba(32,34,37,.7);color:var(--interactive-active);padding:2px 4px;border-radius:20px}.Fuses-style-timer-wrapper .Fuses-style-timer{margin:0 4px;font-size:14px}.Fuses-style-timer-wrapper .Fuses-style-img-wrapper{height:20px}.Fuses-style-timer-wrapper .Fuses-style-img-wrapper>svg{transform:rotate(180deg)}.Fuses-style-timer-wrapper .Fuses-style-img-wrapper .Fuses-style-rotate-wrapper{margin:1px 1px}.Fuses-style-timer-wrapper .Fuses-style-img-wrapper .Fuses-style-rotate-wrapper path{fill:#fff}.Fuses-style-rotate-wrapper{height:18px;width:auto}.Fuses-style-rotate-wrapper .Fuses-style-rotate-clock{width:18px;height:18px}.Fuses-style-rotate-wrapper .Fuses-style-rotate-clock path{fill:currentColor}.Fuses-style-rotate-wrapper .Fuses-style-rotate-pointer{position:absolute;left:8px;top:6px;width:2px;height:4px;background:#fff;transform-origin:bottom center}.Fuses-style-timestamp-timer-wrapper{display:inline-flex;flex-direction:row;align-items:center}.Fuses-style-timestamp-timer-wrapper .Fuses-style-timestamp-tooltip{height:16px;margin-right:2px}.Fuses-style-timestamp-timer-wrapper .Fuses-style-timestamp-timer{display:inline-block}.Fuses-style-dot{margin:0 4px}.Fuses-style-header-prev{margin-bottom:12px}.Fuses-style-header-prev .Fuses-style-header-timer{margin-left:4px}.Fuses-style-header-prev .Fuses-style-timer-icon{height:18px}.Fuses-style-header-prev .Fuses-style-timer-icon .Fuses-style-close-icon{margin:0 2px}.Fuses-style-calc-time-wrapper{position:relative;margin-bottom:16px;color:var(--header-secondary)}.Fuses-style-calc-time-wrapper .Fuses-style-input-wrapper{margin-bottom:8px}.Fuses-style-calc-time-wrapper .Fuses-style-input-wrapper .Fuses-style-input{max-width:50px}.Fuses-style-calc-time-wrapper span{margin:0 4px}.Fuses-style-user-selector{margin-bottom:24px;width:100%}.Fuses-style-user-selector .Fuses-style-user-picker{display:flex;flex-direction:row;align-items:center;color:var(--interactive-normal)}.Fuses-style-user-selector .Fuses-style-user-picker .Fuses-style-avatar{margin:0 4px}.Fuses-style-user-selector .Fuses-style-user-picker .Fuses-style-opts{display:flex;flex-direction:row;margin-left:4px}.Fuses-style-user-selector .Fuses-style-user-picker-big-preview{display:flex;width:100%;flex-direction:column;align-items:center;color:var(--interactive-active)}.Fuses-style-user-selector .Fuses-style-user-picker-big-preview>span{margin-top:10px;font-size:20px;font-weight:600}.Fuses-style-autocomplete{position:relative}.Fuses-style-autocomplete .Fuses-style-autocomplete-popout{position:absolute;bottom:10px;background:var(--background-secondary);border-radius:5px;overflow:auto;max-height:200px;width:100%;box-shadow:var(--elevation-stroke),var(--elevation-high);padding:10px;z-index:10}.Fuses-style-autocomplete .Fuses-style-autocomplete-popout .Fuses-style-row .Fuses-style-item{border-radius:5px;color:var(--interactive-normal);padding:10px;cursor:pointer}.Fuses-style-autocomplete .Fuses-style-autocomplete-popout .Fuses-style-row .Fuses-style-item.Fuses-style-selected{background:var(--background-primary)}.Fuses-style-autocomplete .Fuses-style-autocomplete-popout::-webkit-scrollbar{width:0}:root .Fuses-style-add-user-modal{min-height:unset}.Fuses-style-user-add-wrapper{padding:20px;padding-top:0}.Fuses-style-preview-wrapper{display:flex;justify-content:center;margin-bottom:10px}.Fuses-style-user-list-wrapper{position:relative;margin-bottom:30px}.Fuses-style-user-list-wrapper .Fuses-style-header{position:absolute;width:100%;background:linear-gradient(180deg, var(--background-secondary-alt), var(--background-secondary-alt), transparent);z-index:1;margin-right:20px;border-radius:10px 10px 0 0;display:flex;flex-direction:row}.Fuses-style-user-list-wrapper .Fuses-style-header-search{margin:16px;background:transparent;flex-grow:1}.Fuses-style-user-list-wrapper .Fuses-style-header .Fuses-style-settings{margin:12px;margin-left:-4px;width:32px;color:var(--interactive-normal)}.Fuses-style-user-list-wrapper .Fuses-style-header .Fuses-style-settings:hover,.Fuses-style-user-list-wrapper .Fuses-style-header .Fuses-style-settings.Fuses-style-active{background-color:var(--background-modifier-selected);color:var(--interactive-hover)}.Fuses-style-user-list-wrapper .Fuses-style-user-list{position:relative;background:var(--background-secondary-alt);border-radius:10px;max-height:280px;overflow:auto;padding:20px 10px;padding-top:60px}.Fuses-style-user-list-wrapper .Fuses-style-user-list::-webkit-scrollbar{width:0}.Fuses-style-user-list-wrapper .Fuses-style-user-list-item{display:flex;align-items:center;padding:8px 10px;color:#fff;border-radius:5px}.Fuses-style-user-list-wrapper .Fuses-style-user-list-item .Fuses-style-name{font-weight:600;margin-right:4px;font-size:16px}.Fuses-style-user-list-wrapper .Fuses-style-user-list-item .Fuses-style-timezone{color:#bfbfbf;font-size:12px;display:flex;flex-direction:row}.Fuses-style-user-list-wrapper .Fuses-style-user-list-item .Fuses-style-actions-wrapper{margin-left:auto;opacity:0;display:flex}.Fuses-style-user-list-wrapper .Fuses-style-user-list-item .Fuses-style-actions-wrapper .Fuses-style-delete-icon{color:#ccc;cursor:pointer;height:24px;width:24px;margin-left:4px}.Fuses-style-user-list-wrapper .Fuses-style-user-list-item .Fuses-style-actions-wrapper .Fuses-style-delete-icon:hover{color:hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)}.Fuses-style-user-list-wrapper .Fuses-style-user-list-item .Fuses-style-actions-wrapper .Fuses-style-edit-icon{color:#ccc;cursor:pointer;height:24px;width:24px}.Fuses-style-user-list-wrapper .Fuses-style-user-list-item .Fuses-style-actions-wrapper .Fuses-style-edit-icon:hover{color:#fff}.Fuses-style-user-list-wrapper .Fuses-style-user-list-item:hover{background-color:var(--background-modifier-hover)}.Fuses-style-user-list-wrapper .Fuses-style-user-list-item:hover .Fuses-style-actions-wrapper{opacity:1}.Fuses-style-user-list-wrapper .Fuses-style-user-list .Fuses-style-avatar{margin-right:8px}.Fuses-style-user-add-timezone-panel{margin:8px 0}.Fuses-style-user-add-timezone-panel .Fuses-style-timezone-search-textbox,.Fuses-style-user-add-timezone-panel .Fuses-style-city-search-textbox{flex-grow:1}.Fuses-style-user-add-timezone-panel .Fuses-style-search-city-btn{width:40px;height:40px}.Fuses-style-user-add-timezone-panel .Fuses-style-actions-wrapper{margin-left:8px;display:flex;flex-direction:row}.Fuses-style-user-add-timezone-panel .Fuses-style-actions-wrapper .Fuses-style-return-btn{margin-left:4px}.Fuses-style-user-add-timezone-panel .Fuses-style-actions-wrapper .Fuses-style-find-city-btn,.Fuses-style-user-add-timezone-panel .Fuses-style-actions-wrapper .Fuses-style-find-city-btn-anim,.Fuses-style-user-add-timezone-panel .Fuses-style-actions-wrapper .Fuses-style-return-btn{width:40px;height:40px}.Fuses-style-user-add-timezone-panel .Fuses-style-preset-selector{height:40px}.Fuses-style-user-find .Fuses-style-search{width:calc(100% - 50px);margin:0 8px}.Fuses-style-user-find .Fuses-style-list-wrapper{display:grid;grid-template-columns:1fr 1fr;margin-bottom:16px;grid-gap:0 4px}.Fuses-style-user-find .Fuses-style-list-wrapper .Fuses-style-list-user{display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer;border-radius:4px;color:var(--interactive-hover)}.Fuses-style-user-find .Fuses-style-list-wrapper .Fuses-style-list-user:hover{background:var(--background-modifier-hover)}.Fuses-style-user-find .Fuses-style-list-wrapper .Fuses-style-list-user-selected{background:var(--background-modifier-selected)}.Fuses-style-user-find .Fuses-style-user-pfp{margin-right:8px}.Fuses-style-import-flex .Fuses-style-import-wrapper{margin:auto 0}.Fuses-style-import-flex .Fuses-style-file-info-icon{margin:20px 0;margin-left:auto;margin-right:16px}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					"section-look": "Fuses-style-section-look",
					"timer-positioning": "Fuses-style-timer-positioning",
					"timer-wrapper": "Fuses-style-timer-wrapper",
					timer: "Fuses-style-timer",
					"img-wrapper": "Fuses-style-img-wrapper",
					"rotate-wrapper": "Fuses-style-rotate-wrapper",
					"rotate-clock": "Fuses-style-rotate-clock",
					"rotate-pointer": "Fuses-style-rotate-pointer",
					"timestamp-timer-wrapper": "Fuses-style-timestamp-timer-wrapper",
					"timestamp-tooltip": "Fuses-style-timestamp-tooltip",
					"timestamp-timer": "Fuses-style-timestamp-timer",
					dot: "Fuses-style-dot",
					"header-prev": "Fuses-style-header-prev",
					"header-timer": "Fuses-style-header-timer",
					"timer-icon": "Fuses-style-timer-icon",
					"close-icon": "Fuses-style-close-icon",
					"calc-time-wrapper": "Fuses-style-calc-time-wrapper",
					"input-wrapper": "Fuses-style-input-wrapper",
					input: "Fuses-style-input",
					"user-selector": "Fuses-style-user-selector",
					"user-picker": "Fuses-style-user-picker",
					avatar: "Fuses-style-avatar",
					opts: "Fuses-style-opts",
					"user-picker-big-preview": "Fuses-style-user-picker-big-preview",
					autocomplete: "Fuses-style-autocomplete",
					"autocomplete-popout": "Fuses-style-autocomplete-popout",
					row: "Fuses-style-row",
					item: "Fuses-style-item",
					selected: "Fuses-style-selected",
					"add-user-modal": "Fuses-style-add-user-modal",
					"user-add-wrapper": "Fuses-style-user-add-wrapper",
					"preview-wrapper": "Fuses-style-preview-wrapper",
					"user-list-wrapper": "Fuses-style-user-list-wrapper",
					header: "Fuses-style-header",
					"header-search": "Fuses-style-header-search",
					settings: "Fuses-style-settings",
					active: "Fuses-style-active",
					"user-list": "Fuses-style-user-list",
					"user-list-item": "Fuses-style-user-list-item",
					name: "Fuses-style-name",
					timezone: "Fuses-style-timezone",
					"actions-wrapper": "Fuses-style-actions-wrapper",
					"delete-icon": "Fuses-style-delete-icon",
					"edit-icon": "Fuses-style-edit-icon",
					"user-add-timezone-panel": "Fuses-style-user-add-timezone-panel",
					"timezone-search-textbox": "Fuses-style-timezone-search-textbox",
					"city-search-textbox": "Fuses-style-city-search-textbox",
					"search-city-btn": "Fuses-style-search-city-btn",
					"return-btn": "Fuses-style-return-btn",
					"find-city-btn": "Fuses-style-find-city-btn",
					"find-city-btn-anim": "Fuses-style-find-city-btn-anim",
					"preset-selector": "Fuses-style-preset-selector",
					"user-find": "Fuses-style-user-find",
					search: "Fuses-style-search",
					"list-wrapper": "Fuses-style-list-wrapper",
					"list-user": "Fuses-style-list-user",
					"list-user-selected": "Fuses-style-list-user-selected",
					"user-pfp": "Fuses-style-user-pfp",
					"import-flex": "Fuses-style-import-flex",
					"import-wrapper": "Fuses-style-import-wrapper",
					"file-info-icon": "Fuses-style-file-info-icon"
				};
				StyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString());
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals);
			},
			642: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.r(__webpack_exports__);
				__webpack_require__.d(__webpack_exports__, {
					default: () => Fuses
				});
				var external_BdApi_React_ = __webpack_require__(113);
				var external_BdApi_React_default = __webpack_require__.n(external_BdApi_React_);
				const external_BasePlugin_namespaceObject = BasePlugin;
				var external_BasePlugin_default = __webpack_require__.n(external_BasePlugin_namespaceObject);
				const external_PluginApi_namespaceObject = PluginApi;
				const components_namespaceObject = Modules["@discord/components"];
				const icons_namespaceObject = Modules["@discord/icons"];
				const contextmenu_namespaceObject = Modules["@discord/contextmenu"];
				const modal_namespaceObject = Modules["@discord/modal"];
				const external_StyleLoader_namespaceObject = StyleLoader;
				var external_StyleLoader_default = __webpack_require__.n(external_StyleLoader_namespaceObject);
				var Fuses_style = __webpack_require__(74);
				const flux_namespaceObject = Modules["@discord/flux"];
				const modules_namespaceObject = Modules["@discord/modules"];
				function _defineProperty(obj, key, value) {
					if (key in obj) Object.defineProperty(obj, key, {
						value,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value;
					return obj;
				}
				class SettingsManager extends flux_namespaceObject.Store {
					constructor(pluginName, defaultSettings = {}) {
						super(modules_namespaceObject.Dispatcher, {});
						_defineProperty(this, "settings", void 0);
						_defineProperty(this, "pluginName", void 0);
						_defineProperty(this, "get", ((key, defaultValue) => this.settings[key] ?? defaultValue));
						_defineProperty(this, "set", ((key, value) => {
							this.settings[key] = value;
							external_PluginApi_namespaceObject.PluginUtilities.saveSettings(this.pluginName, this.settings);
							this.emitChange();
							return value;
						}));
						this.pluginName = pluginName;
						this.settings = external_PluginApi_namespaceObject.PluginUtilities.loadSettings(pluginName, defaultSettings);
					}
				}
				const package_namespaceObject = JSON.parse('{"um":{"u2":"Fuses"}}');
				const settings = new SettingsManager(package_namespaceObject.um.u2);
				const settingsManager = settings;
				const stores_namespaceObject = Modules["@discord/stores"];
				const constants = {
					ExceptionCodes: {
						Timezones: {
							INVALID_CITY: "INVALID_CITY",
							NOT_HMTZ_FORMAT: "NOT_HMTZ_FORMAT",
							NOT_HTZ_FORMAT: "NOT_HTZ_FORMAT",
							INVALID_FORMAT: "INVALID_FORMAT",
							InvalidFormatReasons: {
								NO_SIGN: "NO_SIGN",
								NOT_A_NUMBER: "NOT_A_NUMBER",
								NOT_HTZ_FORMAT: "NOT_HTZ_FORMAT",
								OVERFLOW: "OVERFLOW",
								UNDEFINED: "UNDEFINED"
							}
						},
						Date: {
							INVALID_DATE: "INVALID_DATE"
						},
						ImportFile: {
							INVALID_FILE: "INVALID_FILE"
						},
						UserList: {
							INVALID_USER: "INVALID_USER",
							INVALID_LIST_TYPE: "INVALID_LIST_TYPE"
						}
					},
					Settings: {
						TimezonePages: {
							CITY_SELECTOR: "city",
							MANUAL: "manual"
						},
						TimerDisplay: {
							USER_BANNER: "userBanner",
							USER_HEADER: "userHeader"
						}
					},
					TimePreferrence: {
						"12HFOMRAT": (location = navigator.language) => Intl.DateTimeFormat(location, {
							hour: "numeric"
						}).resolvedOptions()["hour12"]
					}
				};
				function exceptions_defineProperty(obj, key, value) {
					if (key in obj) Object.defineProperty(obj, key, {
						value,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value;
					return obj;
				}
				function makeErrorCLass(name) {
					class TemplateException extends Error {
						constructor(message, code) {
							super(message);
							exceptions_defineProperty(this, "code", void 0);
							this.name = name;
							this.code = code;
							this.message = `${message}. Error code: ${code}`;
						}
					}
					return TemplateException;
				}
				const TimezoneException = makeErrorCLass("TimezoneException"),
					DateException = makeErrorCLass("DateException"),
					ImportFileException = makeErrorCLass("FileException"),
					UserListException = makeErrorCLass("UserListException");
				const classes_namespaceObject = Modules["@discord/classes"];
				function getOffset(date = (0, classes_namespaceObject.Timestamp)()) {
					let timezoneOffset;
					if (classes_namespaceObject.Timestamp.isMoment(date)) timezoneOffset = date.utcOffset();
					else if (_.isDate(date)) timezoneOffset = (0,
						classes_namespaceObject.Timestamp)(date).utcOffset();
					else throw new DateException("Invalid date was insert in getOffset(). Please insert a Moment or a Date", constants.ExceptionCodes.Date.INVALID_DATE);
					return (timezoneOffset <= 0 ? "" : "+") + timezoneOffset / 60;
				}
				function getTimeFromTimezone(utcOffset, currentDate = new Date) {
					if (!_.isDate(currentDate)) throw new DateException("Invalid date was insert in getTimeFromTimezone(). Please insert a Date", constants.ExceptionCodes.Date.INVALID_DATE);
					let localTime = currentDate.getTime();
					let localOffset = 6e4 * currentDate.getTimezoneOffset();
					let utc = new Date(localTime + localOffset);
					utc.setTime(utc.getTime() + 60 * Number(utcOffset) * 60 * 1e3);
					return utc;
				}
				const isHMtimezone = hmtimezone => /(\:)/g.test(hmtimezone);
				function convertHMTzToHTz(hmtimezone) {
					if (!isHMtimezone(hmtimezone)) throw new TimezoneException("This isn't a HH:MM timezone format", constants.ExceptionCodes.Timezones.NOT_HMTZ_FORMAT);
					const [hours, minutes] = hmtimezone.match(/[^:]*/g).filter((s => Boolean(s)));
					const minsConvertedToHours = Number(minutes) / 60;
					if (Number(hours) < 0) return addIndicatorsToTimezone(Number(hours) - minsConvertedToHours);
					return addIndicatorsToTimezone(Number(hours) + minsConvertedToHours);
				}
				function formatDate(date, timezone, isAMPMFormat = settingsManager.get("ampm", constants.TimePreferrence["12HFOMRAT"]())) {
					if (!_.isDate(date)) throw new DateException("Invalid date was insert in formatDate(). Please insert a Date", constants.ExceptionCodes.Date.INVALID_DATE);
					const fullHour = date.getHours().toLocaleString(navigator.language, {
						minimumIntegerDigits: 2,
						useGrouping: false
					});
					const AMPMHour = ((Number(fullHour) + 11) % 12 + 1).toLocaleString(navigator.language, {
						minimumIntegerDigits: 2,
						useGrouping: false
					});
					const suffix = Number(fullHour) >= 12 ? "PM" : "AM";
					const minutes = date.getMinutes().toLocaleString(navigator.language, {
						minimumIntegerDigits: 2,
						useGrouping: false
					});
					const seconds = date.getSeconds().toLocaleString(navigator.language, {
						minimumIntegerDigits: 2,
						useGrouping: false
					});
					const timeString = ({
						includeSecs
					} = {
						includeSecs: true
					}) => `${isAMPMFormat ? AMPMHour : fullHour}:${minutes}${includeSecs ? ":" + seconds : ""}${isAMPMFormat ? " " + suffix : ""}`;
					return {
						hours: isAMPMFormat ? AMPMHour : fullHour,
						"12hour": AMPMHour,
						"24hour": fullHour,
						minutes,
						seconds,
						suffix,
						timeString,
						dateString: () => date.toDateString(),
						toString: ({
							includeTimezone
						} = {
							includeTimezone: Boolean(timezone)
						}) => `${date.toDateString()} ${timeString()} ${includeTimezone ? `(UTC${timezone})` : ""}`
					};
				}
				function ensureTimezone(timezone) {
					timezone = String(timezone);
					timezone.replace(/[^\d.+-]/g, "");
					timezone = timezone.replace(",", ".");
					timezone = addIndicatorsToTimezone(timezone);
					if (isHMtimezone(timezone)) timezone = convertHMTzToHTz(timezone);
					let checkEnsured = isNotTimezone(timezone, {
						checkCharacters: false
					});
					if (checkEnsured) throw new TimezoneException("Unable to ensure", checkEnsured);
					return timezone;
				}
				function addIndicatorsToTimezone(timezone) {
					timezone = String(timezone);
					if ("+" !== timezone.charAt(0) && "-" !== timezone.charAt(0) && 0 !== timezone) timezone = "+" + timezone;
					return timezone;
				}
				function isNotTimezone(timezone, opts = {
					filterUndefined: true,
					checkNumber: true,
					checkCharacters: true,
					checkOverflow: true,
					checkHM: true
				}) {
					const {
						filterUndefined,
						checkNumber,
						checkCharacters,
						checkOverflow,
						checkHM
					} = opts;
					if (null == timezone && filterUndefined) return constants.ExceptionCodes.Timezones.InvalidFormatReasons.UNDEFINED;
					if (checkNumber) try {
						new Number(timezone);
					} catch (e) {
						return constants.ExceptionCodes.Timezones.InvalidFormatReasons.NOT_A_NUMBER;
					}
					if (isHMtimezone(timezone) && checkHM) return constants.ExceptionCodes.Timezones.InvalidFormatReasons.NOT_HTZ_FORMAT;
					if (checkCharacters) {
						const firstChar = timezone.charAt(0);
						if (!("+" === firstChar || "-" === firstChar || 0 === timezone)) return constants.ExceptionCodes.Timezones.InvalidFormatReasons.NO_SIGN;
					}
					console.log(Math.abs(Number(69)) > 24);
					if (Math.abs(Number(timezone)) > 24 && checkOverflow) return constants.ExceptionCodes.Timezones.InvalidFormatReasons.OVERFLOW;
					return false;
				}
				const getList = () => settingsManager.get("userList", {});
				const setList = list => settingsManager.set("userList", list);
				const addUser = (id, timezone, shouldCleanList = false) => {
					let list = getList();
					timezone = ensureTimezone(timezone);
					if (!stores_namespaceObject.Users.getUser(id)) throw new UserListException("Invalid User", constants.ExceptionCodes.UserList.INVALID_USER);
					list[id] = timezone;
					setList(list);
					if (shouldCleanList) cleanList();
				};
				const removeUser = id => {
					let list = getList();
					delete list[id];
					setList(list);
				};
				const getTimezone = id => {
					let list = getList();
					return list?.[id];
				};
				const cleanList = (list = getList()) => {
					let finishedList = {};
					const filteredArray = Object.entries(list).filter((([userId]) => "string" === typeof userId && Boolean(userId) && Boolean(stores_namespaceObject.Users.getUser(userId))));
					filteredArray.map((([key, val]) => {
						finishedList[key] = val;
					}));
					return finishedList;
				};
				const isListNotValid = list => {
					if (!(_.isObject(list) && !_.isArray(list))) return [constants.ExceptionCodes.UserList.INVALID_LIST_TYPE];
					for (const id in list) {
						if (!stores_namespaceObject.Users.getUser(id)) return [constants.ExceptionCodes.UserList.INVALID_USER, id];
						const timezone = list[id];
						const checkIfNotTimezone = isNotTimezone(timezone);
						if (checkIfNotTimezone) return [checkIfNotTimezone, id];
					}
					return false;
				};
				const isExistingUser = id => Boolean(getTimezone(id));
				var React = __webpack_require__(113);
				function _extends() {
					_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return _extends.apply(this, arguments);
				}
				const createQuestion = (title, description, buttons = [{
					text: "Okay",
					color: components_namespaceObject.Button.Colors.BRAND,
					look: components_namespaceObject.Button.Looks.FILLED
				}], options = {
					size: modal_namespaceObject.ModalSize.SMALL,
					autoClose: true
				}) => new Promise((result => {
					(0, modal_namespaceObject.openModal)((h => React.createElement(modal_namespaceObject.ModalRoot, _extends({}, h, {
						size: options.size
					}), React.createElement(modal_namespaceObject.ModalHeader, {
						separator: false
					}, React.createElement(components_namespaceObject.Text, {
						size: components_namespaceObject.Text.Sizes.SIZE_14,
						className: "h4-AQvcAz title-3sZWYQ defaultColor-1_ajX0 defaultMarginh4-2vWMG5"
					}, title)), React.createElement(modal_namespaceObject.ModalContent, null, React.createElement(components_namespaceObject.Text, {
						size: components_namespaceObject.Text.Sizes.SIZE_16
					}, description)), React.createElement(modal_namespaceObject.ModalFooter, null, buttons.map((params => React.createElement(components_namespaceObject.Button, {
						color: params.color,
						look: params.look,
						onClick: () => {
							result({
								button: params.text,
								close: h.onClose
							});
							if (options.autoClose) h.onClose();
						}
					}, params.text)))))));
				}));
				var createUpdateWrapper_React = __webpack_require__(113);
				function createUpdateWrapper_extends() {
					createUpdateWrapper_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return createUpdateWrapper_extends.apply(this, arguments);
				}
				const createUpdateWrapper = (Component, valueProp = "value", changeProp = "onChange", valueIndex = 0) => props => {
					const [value, setValue] = createUpdateWrapper_React.useState(props[valueProp]);
					return createUpdateWrapper_React.createElement(Component, createUpdateWrapper_extends({}, props, {
						[valueProp]: value,
						[changeProp]: (...args) => {
							const value = args[valueIndex];
							if ("function" === typeof props[changeProp]) props[changeProp](value);
							setValue(value);
						}
					}));
				};
				const hooks_createUpdateWrapper = createUpdateWrapper;
				const utils_namespaceObject = Modules["@discord/utils"];
				var category = __webpack_require__(911);
				function Category({
					label,
					children,
					className,
					look = Category.Looks.DEFAULT
				}) {
					const [opened, toggle] = (0, external_BdApi_React_.useState)(false);
					const isCompact = look === category.Z.compact;
					return external_BdApi_React_default().createElement("div", {
						className: (0, utils_namespaceObject.joinClassNames)(className, look, category.Z.category, {
							[category.Z.opened]: opened
						})
					}, external_BdApi_React_default().createElement("div", {
						className: category.Z.header,
						onClick: () => toggle(!opened)
					}, external_BdApi_React_default().createElement("div", {
						className: category.Z.label
					}, label), isCompact ? external_BdApi_React_default().createElement("div", {
						className: category.Z.stroke
					}) : null, external_BdApi_React_default().createElement(icons_namespaceObject.Caret, {
						direction: opened ? icons_namespaceObject.Caret.Directions.DOWN : isCompact ? icons_namespaceObject.Caret.Directions.LEFT : icons_namespaceObject.Caret.Directions.RIGHT,
						className: category.Z.caret
					})), !isCompact ? external_BdApi_React_default().createElement("div", {
						className: category.Z.divider
					}) : null, external_BdApi_React_default().createElement("div", {
						className: category.Z.content
					}, opened ? children : null));
				}
				Category.Looks = {
					COMPACT: category.Z.compact,
					DEFAULT: category.Z["default"]
				};
				const forms_namespaceObject = Modules["@discord/forms"];
				const RotateClock = external_BdApi_React_default().memo((({
					rotateAngle
				}) => external_BdApi_React_default().createElement("div", {
					style: {
						position: "relative"
					},
					className: Fuses_style.Z["rotate-wrapper"]
				}, external_BdApi_React_default().createElement("svg", {
					className: Fuses_style.Z["rotate-clock"],
					width: "110",
					height: "129",
					viewBox: "0 0 110 129",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, external_BdApi_React_default().createElement("path", {
					d: "M73.2 0H36.6V12.2H73.2V0ZM97.783 38.979L106.445 30.317C103.822 27.206 100.955 24.278 97.844 21.716L89.182 30.378C79.727 22.814 67.832 18.3 54.9 18.3C24.583 18.3 7.62939e-06 42.883 7.62939e-06 73.2C7.62939e-06 103.517 24.522 128.1 54.9 128.1C85.278 128.1 109.8 103.517 109.8 73.2C109.8 60.268 105.286 48.373 97.783 38.979ZM54.9 115.9C31.293 115.9 12.2 96.807 12.2 73.2C12.2 49.593 31.293 30.5 54.9 30.5C78.507 30.5 97.6 49.593 97.6 73.2C97.6 96.807 78.507 115.9 54.9 115.9Z",
					fill: "black"
				})), external_BdApi_React_default().createElement("div", {
					className: Fuses_style.Z["rotate-pointer"],
					style: {
						transform: `rotate(${rotateAngle}deg)`
					}
				}))));
				const BasicTimer = external_BdApi_React_default().memo((({
					timezone = getOffset(),
					tooltip = true,
					showSeconds = false,
					staticTime,
					className,
					children = props => props
				}) => {
					const [dateHook, setDateHook] = (0, external_BdApi_React_.useState)(getTimeFromTimezone(timezone));
					(0, external_BdApi_React_.useEffect)((() => {
						const id = setInterval((() => setDateHook(getTimeFromTimezone(timezone))), 1e3);
						return () => {
							clearInterval(id);
						};
					}), []);
					const shouldShowTimerIcon = (0, flux_namespaceObject.useStateFromStores)([settingsManager], (() => settingsManager.get("_callTimeCalculator")));
					const date = staticTime ? staticTime : dateHook;
					const formattedText = formatDate(date, timezone);
					const element = external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, formattedText.hours, ":", formattedText.minutes, settingsManager.get("seconds", false) || showSeconds ? `:${formattedText.seconds}` : "", settingsManager.get("ampm", constants.TimePreferrence["12HFOMRAT"]()) ? " " + formattedText.suffix : "");
					if (tooltip) return external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
						text: formattedText.toString(),
						delay: 750,
						className
					}, children(element, formattedText, date));
					return children(element, formattedText, date, shouldShowTimerIcon);
				}));
				function Timer_extends() {
					Timer_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return Timer_extends.apply(this, arguments);
				}
				const Timer = external_BdApi_React_default().memo((({
					timezone = getOffset(),
					showSeconds = false,
					className,
					children = props => props,
					...etc
				}) => external_BdApi_React_default().createElement("div", Timer_extends({
					className: `${Fuses_style.Z["timer-wrapper"]} ${className}`
				}, etc), external_BdApi_React_default().createElement(BasicTimer, {
					timezone,
					showSeconds,
					tooltip: false
				}, ((element, formattedText, date, shouldShowTimerIcon) => external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement("div", {
					className: Fuses_style.Z["img-wrapper"]
				}, !shouldShowTimerIcon ? external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
					text: formattedText.toString()
				}, external_BdApi_React_default().createElement(RotateClock, {
					rotateAngle: 30 * Number(formattedText["12hour"])
				})) : external_BdApi_React_default().createElement(icons_namespaceObject.DropdownArrow, {
					width: 20,
					height: 20
				})), external_BdApi_React_default().createElement("div", {
					className: Fuses_style.Z.timer
				}, children(element, formattedText, date, shouldShowTimerIcon))))))));
				const external_Modules_react_spring_namespaceObject = Modules["react-spring"];
				const timezoneList_namespaceObject = JSON.parse('[{"value":"Dateline Standard Time","abbr":"DST","offset":-12,"isdst":false,"text":"(UTC-12:00) International Date Line West","cities":["Etc/GMT+12"]},{"value":"UTC-11","abbr":"U","offset":-11,"isdst":false,"text":"(UTC-11:00) Coordinated Universal Time-11","cities":["Etc/GMT+11","Pacific/Midway","Pacific/Niue","Pacific/Pago_Pago"]},{"value":"Hawaiian Standard Time","abbr":"HST","offset":-10,"isdst":false,"text":"(UTC-10:00) Hawaii","cities":["Etc/GMT+10","Pacific/Honolulu","Pacific/Johnston","Pacific/Rarotonga","Pacific/Tahiti"]},{"value":"Alaskan Standard Time","abbr":"AKDT","offset":-8,"isdst":true,"text":"(UTC-09:00) Alaska","cities":["America/Anchorage","America/Juneau","America/Nome","America/Sitka","America/Yakutat"]},{"value":"Pacific Standard Time (Mexico)","abbr":"PDT","offset":-7,"isdst":true,"text":"(UTC-08:00) Baja California","cities":["America/Santa_Isabel"]},{"value":"Pacific Daylight Time","abbr":"PDT","offset":-7,"isdst":true,"text":"(UTC-07:00) Pacific Time (US & Canada)","cities":["America/Los_Angeles","America/Tijuana","America/Vancouver"]},{"value":"Pacific Standard Time","abbr":"PST","offset":-8,"isdst":false,"text":"(UTC-08:00) Pacific Time (US & Canada)","cities":["America/Los_Angeles","America/Tijuana","America/Vancouver","PST8PDT"]},{"value":"US Mountain Standard Time","abbr":"UMST","offset":-7,"isdst":false,"text":"(UTC-07:00) Arizona","cities":["America/Creston","America/Dawson","America/Dawson_Creek","America/Hermosillo","America/Phoenix","America/Whitehorse","Etc/GMT+7"]},{"value":"Mountain Standard Time (Mexico)","abbr":"MDT","offset":-6,"isdst":true,"text":"(UTC-07:00) Chihuahua, La Paz, Mazatlan","cities":["America/Chihuahua","America/Mazatlan"]},{"value":"Mountain Standard Time","abbr":"MDT","offset":-6,"isdst":true,"text":"(UTC-07:00) Mountain Time (US & Canada)","cities":["America/Boise","America/Cambridge_Bay","America/Denver","America/Edmonton","America/Inuvik","America/Ojinaga","America/Yellowknife","MST7MDT"]},{"value":"Central America Standard Time","abbr":"CAST","offset":-6,"isdst":false,"text":"(UTC-06:00) Central America","cities":["America/Belize","America/Costa_Rica","America/El_Salvador","America/Guatemala","America/Managua","America/Tegucigalpa","Etc/GMT+6","Pacific/Galapagos"]},{"value":"Central Standard Time","abbr":"CDT","offset":-5,"isdst":true,"text":"(UTC-06:00) Central Time (US & Canada)","cities":["America/Chicago","America/Indiana/Knox","America/Indiana/Tell_City","America/Matamoros","America/Menominee","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Rainy_River","America/Rankin_Inlet","America/Resolute","America/Winnipeg","CST6CDT"]},{"value":"Central Standard Time (Mexico)","abbr":"CDT","offset":-5,"isdst":true,"text":"(UTC-06:00) Guadalajara, Mexico City, Monterrey","cities":["America/Bahia_Banderas","America/Cancun","America/Merida","America/Mexico_City","America/Monterrey"]},{"value":"Canada Central Standard Time","abbr":"CCST","offset":-6,"isdst":false,"text":"(UTC-06:00) Saskatchewan","cities":["America/Regina","America/Swift_Current"]},{"value":"SA Pacific Standard Time","abbr":"SPST","offset":-5,"isdst":false,"text":"(UTC-05:00) Bogota, Lima, Quito","cities":["America/Bogota","America/Cayman","America/Coral_Harbour","America/Eirunepe","America/Guayaquil","America/Jamaica","America/Lima","America/Panama","America/Rio_Branco","Etc/GMT+5"]},{"value":"Eastern Standard Time","abbr":"EDT","offset":-4,"isdst":true,"text":"(UTC-05:00) Eastern Time (US & Canada)","cities":["America/Detroit","America/Havana","America/Indiana/Petersburg","America/Indiana/Vincennes","America/Indiana/Winamac","America/Iqaluit","America/Kentucky/Monticello","America/Louisville","America/Montreal","America/Nassau","America/New_York","America/Nipigon","America/Pangnirtung","America/Port-au-Prince","America/Thunder_Bay","America/Toronto","EST5EDT"]},{"value":"US Eastern Standard Time","abbr":"UEDT","offset":-4,"isdst":true,"text":"(UTC-05:00) Indiana (East)","cities":["America/Indiana/Marengo","America/Indiana/Vevay","America/Indianapolis"]},{"value":"Venezuela Standard Time","abbr":"VST","offset":-4.5,"isdst":false,"text":"(UTC-04:30) Caracas","cities":["America/Caracas"]},{"value":"Paraguay Standard Time","abbr":"PYT","offset":-4,"isdst":false,"text":"(UTC-04:00) Asuncion","cities":["America/Asuncion"]},{"value":"Atlantic Standard Time","abbr":"ADT","offset":-3,"isdst":true,"text":"(UTC-04:00) Atlantic Time (Canada)","cities":["America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Moncton","America/Thule","Atlantic/Bermuda"]},{"value":"Central Brazilian Standard Time","abbr":"CBST","offset":-4,"isdst":false,"text":"(UTC-04:00) Cuiaba","cities":["America/Campo_Grande","America/Cuiaba"]},{"value":"SA Western Standard Time","abbr":"SWST","offset":-4,"isdst":false,"text":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan","cities":["America/Anguilla","America/Antigua","America/Aruba","America/Barbados","America/Blanc-Sablon","America/Boa_Vista","America/Curacao","America/Dominica","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guyana","America/Kralendijk","America/La_Paz","America/Lower_Princes","America/Manaus","America/Marigot","America/Martinique","America/Montserrat","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Santo_Domingo","America/St_Barthelemy","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tortola","Etc/GMT+4"]},{"value":"Pacific SA Standard Time","abbr":"PSST","offset":-4,"isdst":false,"text":"(UTC-04:00) Santiago","cities":["America/Santiago","Antarctica/Palmer"]},{"value":"Newfoundland Standard Time","abbr":"NDT","offset":-2.5,"isdst":true,"text":"(UTC-03:30) Newfoundland","cities":["America/St_Johns"]},{"value":"E. South America Standard Time","abbr":"ESAST","offset":-3,"isdst":false,"text":"(UTC-03:00) Brasilia","cities":["America/Sao_Paulo"]},{"value":"Argentina Standard Time","abbr":"AST","offset":-3,"isdst":false,"text":"(UTC-03:00) Buenos Aires","cities":["America/Argentina/La_Rioja","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Buenos_Aires","America/Catamarca","America/Cordoba","America/Jujuy","America/Mendoza"]},{"value":"SA Eastern Standard Time","abbr":"SEST","offset":-3,"isdst":false,"text":"(UTC-03:00) Cayenne, Fortaleza","cities":["America/Araguaina","America/Belem","America/Cayenne","America/Fortaleza","America/Maceio","America/Paramaribo","America/Recife","America/Santarem","Antarctica/Rothera","Atlantic/Stanley","Etc/GMT+3"]},{"value":"Greenland Standard Time","abbr":"GDT","offset":-3,"isdst":true,"text":"(UTC-03:00) Greenland","cities":["America/Godthab"]},{"value":"Montevideo Standard Time","abbr":"MST","offset":-3,"isdst":false,"text":"(UTC-03:00) Montevideo","cities":["America/Montevideo"]},{"value":"Bahia Standard Time","abbr":"BST","offset":-3,"isdst":false,"text":"(UTC-03:00) Salvador","cities":["America/Bahia"]},{"value":"UTC-02","abbr":"U","offset":-2,"isdst":false,"text":"(UTC-02:00) Coordinated Universal Time-02","cities":["America/Noronha","Atlantic/South_Georgia","Etc/GMT+2"]},{"value":"Mid-Atlantic Standard Time","abbr":"MDT","offset":-1,"isdst":true,"text":"(UTC-02:00) Mid-Atlantic - Old","cities":[]},{"value":"Azores Standard Time","abbr":"ADT","offset":0,"isdst":true,"text":"(UTC-01:00) Azores","cities":["America/Scoresbysund","Atlantic/Azores"]},{"value":"Cape Verde Standard Time","abbr":"CVST","offset":-1,"isdst":false,"text":"(UTC-01:00) Cape Verde Is.","cities":["Atlantic/Cape_Verde","Etc/GMT+1"]},{"value":"Morocco Standard Time","abbr":"MDT","offset":1,"isdst":true,"text":"(UTC) Casablanca","cities":["Africa/Casablanca","Africa/El_Aaiun"]},{"value":"UTC","abbr":"UTC","offset":0,"isdst":false,"text":"(UTC) Coordinated Universal Time","cities":["America/Danmarkshavn","Etc/GMT"]},{"value":"GMT Standard Time","abbr":"GMT","offset":0,"isdst":false,"text":"(UTC) Edinburgh, London","cities":["Europe/Isle_of_Man","Europe/Guernsey","Europe/Jersey","Europe/London"]},{"value":"British Summer Time","abbr":"BST","offset":1,"isdst":true,"text":"(UTC+01:00) Edinburgh, London","cities":["Europe/Isle_of_Man","Europe/Guernsey","Europe/Jersey","Europe/London"]},{"value":"GMT Standard Time","abbr":"GDT","offset":1,"isdst":true,"text":"(UTC) Dublin, Lisbon","cities":["Atlantic/Canary","Atlantic/Faeroe","Atlantic/Madeira","Europe/Dublin","Europe/Lisbon"]},{"value":"Greenwich Standard Time","abbr":"GST","offset":0,"isdst":false,"text":"(UTC) Monrovia, Reykjavik","cities":["Africa/Abidjan","Africa/Accra","Africa/Bamako","Africa/Banjul","Africa/Bissau","Africa/Conakry","Africa/Dakar","Africa/Freetown","Africa/Lome","Africa/Monrovia","Africa/Nouakchott","Africa/Ouagadougou","Africa/Sao_Tome","Atlantic/Reykjavik","Atlantic/St_Helena"]},{"value":"W. Europe Standard Time","abbr":"WEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","cities":["Arctic/Longyearbyen","Europe/Amsterdam","Europe/Andorra","Europe/Berlin","Europe/Busingen","Europe/Gibraltar","Europe/Luxembourg","Europe/Malta","Europe/Monaco","Europe/Oslo","Europe/Rome","Europe/San_Marino","Europe/Stockholm","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Zurich"]},{"value":"Central Europe Standard Time","abbr":"CEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague","cities":["Europe/Belgrade","Europe/Bratislava","Europe/Budapest","Europe/Ljubljana","Europe/Podgorica","Europe/Prague","Europe/Tirane"]},{"value":"Romance Standard Time","abbr":"RDT","offset":2,"isdst":true,"text":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris","cities":["Africa/Ceuta","Europe/Brussels","Europe/Copenhagen","Europe/Madrid","Europe/Paris"]},{"value":"Central European Standard Time","abbr":"CEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb","cities":["Europe/Sarajevo","Europe/Skopje","Europe/Warsaw","Europe/Zagreb"]},{"value":"W. Central Africa Standard Time","abbr":"WCAST","offset":1,"isdst":false,"text":"(UTC+01:00) West Central Africa","cities":["Africa/Algiers","Africa/Bangui","Africa/Brazzaville","Africa/Douala","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Luanda","Africa/Malabo","Africa/Ndjamena","Africa/Niamey","Africa/Porto-Novo","Africa/Tunis","Etc/GMT-1"]},{"value":"Namibia Standard Time","abbr":"NST","offset":1,"isdst":false,"text":"(UTC+01:00) Windhoek","cities":["Africa/Windhoek"]},{"value":"GTB Standard Time","abbr":"GDT","offset":3,"isdst":true,"text":"(UTC+02:00) Athens, Bucharest","cities":["Asia/Nicosia","Europe/Athens","Europe/Bucharest","Europe/Chisinau"]},{"value":"Middle East Standard Time","abbr":"MEDT","offset":3,"isdst":true,"text":"(UTC+02:00) Beirut","cities":["Asia/Beirut"]},{"value":"Egypt Standard Time","abbr":"EST","offset":2,"isdst":false,"text":"(UTC+02:00) Cairo","cities":["Africa/Cairo"]},{"value":"Syria Standard Time","abbr":"SDT","offset":3,"isdst":true,"text":"(UTC+02:00) Damascus","cities":["Asia/Damascus"]},{"value":"E. Europe Standard Time","abbr":"EEDT","offset":3,"isdst":true,"text":"(UTC+02:00) E. Europe","cities":["Asia/Nicosia","Europe/Athens","Europe/Bucharest","Europe/Chisinau","Europe/Helsinki","Europe/Kiev","Europe/Mariehamn","Europe/Nicosia","Europe/Riga","Europe/Sofia","Europe/Tallinn","Europe/Uzhgorod","Europe/Vilnius","Europe/Zaporozhye"]},{"value":"South Africa Standard Time","abbr":"SAST","offset":2,"isdst":false,"text":"(UTC+02:00) Harare, Pretoria","cities":["Africa/Blantyre","Africa/Bujumbura","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Kigali","Africa/Lubumbashi","Africa/Lusaka","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Etc/GMT-2"]},{"value":"FLE Standard Time","abbr":"FDT","offset":3,"isdst":true,"text":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","cities":["Europe/Helsinki","Europe/Kiev","Europe/Mariehamn","Europe/Riga","Europe/Sofia","Europe/Tallinn","Europe/Uzhgorod","Europe/Vilnius","Europe/Zaporozhye"]},{"value":"Turkey Standard Time","abbr":"TDT","offset":3,"isdst":false,"text":"(UTC+03:00) Istanbul","cities":["Europe/Istanbul"]},{"value":"Israel Standard Time","abbr":"JDT","offset":3,"isdst":true,"text":"(UTC+02:00) Jerusalem","cities":["Asia/Jerusalem"]},{"value":"Libya Standard Time","abbr":"LST","offset":2,"isdst":false,"text":"(UTC+02:00) Tripoli","cities":["Africa/Tripoli"]},{"value":"Jordan Standard Time","abbr":"JST","offset":3,"isdst":false,"text":"(UTC+03:00) Amman","cities":["Asia/Amman"]},{"value":"Arabic Standard Time","abbr":"AST","offset":3,"isdst":false,"text":"(UTC+03:00) Baghdad","cities":["Asia/Baghdad"]},{"value":"Kaliningrad Standard Time","abbr":"KST","offset":3,"isdst":false,"text":"(UTC+02:00) Kaliningrad","cities":["Europe/Kaliningrad"]},{"value":"Arab Standard Time","abbr":"AST","offset":3,"isdst":false,"text":"(UTC+03:00) Kuwait, Riyadh","cities":["Asia/Aden","Asia/Bahrain","Asia/Kuwait","Asia/Qatar","Asia/Riyadh"]},{"value":"E. Africa Standard Time","abbr":"EAST","offset":3,"isdst":false,"text":"(UTC+03:00) Nairobi","cities":["Africa/Addis_Ababa","Africa/Asmera","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Mogadishu","Africa/Nairobi","Antarctica/Syowa","Etc/GMT-3","Indian/Antananarivo","Indian/Comoro","Indian/Mayotte"]},{"value":"Moscow Standard Time","abbr":"MSK","offset":3,"isdst":false,"text":"(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk","cities":["Europe/Kirov","Europe/Moscow","Europe/Simferopol","Europe/Volgograd","Europe/Minsk"]},{"value":"Samara Time","abbr":"SAMT","offset":4,"isdst":false,"text":"(UTC+04:00) Samara, Ulyanovsk, Saratov","cities":["Europe/Astrakhan","Europe/Samara","Europe/Ulyanovsk"]},{"value":"Iran Standard Time","abbr":"IDT","offset":4.5,"isdst":true,"text":"(UTC+03:30) Tehran","cities":["Asia/Tehran"]},{"value":"Arabian Standard Time","abbr":"AST","offset":4,"isdst":false,"text":"(UTC+04:00) Abu Dhabi, Muscat","cities":["Asia/Dubai","Asia/Muscat","Etc/GMT-4"]},{"value":"Azerbaijan Standard Time","abbr":"ADT","offset":5,"isdst":true,"text":"(UTC+04:00) Baku","cities":["Asia/Baku"]},{"value":"Mauritius Standard Time","abbr":"MST","offset":4,"isdst":false,"text":"(UTC+04:00) Port Louis","cities":["Indian/Mahe","Indian/Mauritius","Indian/Reunion"]},{"value":"Georgian Standard Time","abbr":"GET","offset":4,"isdst":false,"text":"(UTC+04:00) Tbilisi","cities":["Asia/Tbilisi"]},{"value":"Caucasus Standard Time","abbr":"CST","offset":4,"isdst":false,"text":"(UTC+04:00) Yerevan","cities":["Asia/Yerevan"]},{"value":"Afghanistan Standard Time","abbr":"AST","offset":4.5,"isdst":false,"text":"(UTC+04:30) Kabul","cities":["Asia/Kabul"]},{"value":"West Asia Standard Time","abbr":"WAST","offset":5,"isdst":false,"text":"(UTC+05:00) Ashgabat, Tashkent","cities":["Antarctica/Mawson","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Dushanbe","Asia/Oral","Asia/Samarkand","Asia/Tashkent","Etc/GMT-5","Indian/Kerguelen","Indian/Maldives"]},{"value":"Yekaterinburg Time","abbr":"YEKT","offset":5,"isdst":false,"text":"(UTC+05:00) Yekaterinburg","cities":["Asia/Yekaterinburg"]},{"value":"Pakistan Standard Time","abbr":"PKT","offset":5,"isdst":false,"text":"(UTC+05:00) Islamabad, Karachi","cities":["Asia/Karachi"]},{"value":"India Standard Time","abbr":"IST","offset":5.5,"isdst":false,"text":"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi","cities":["Asia/Kolkata","Asia/Calcutta"]},{"value":"Sri Lanka Standard Time","abbr":"SLST","offset":5.5,"isdst":false,"text":"(UTC+05:30) Sri Jayawardenepura","cities":["Asia/Colombo"]},{"value":"Nepal Standard Time","abbr":"NST","offset":5.75,"isdst":false,"text":"(UTC+05:45) Kathmandu","cities":["Asia/Kathmandu"]},{"value":"Central Asia Standard Time","abbr":"CAST","offset":6,"isdst":false,"text":"(UTC+06:00) Nur-Sultan (Astana)","cities":["Antarctica/Vostok","Asia/Almaty","Asia/Bishkek","Asia/Qyzylorda","Asia/Urumqi","Etc/GMT-6","Indian/Chagos"]},{"value":"Bangladesh Standard Time","abbr":"BST","offset":6,"isdst":false,"text":"(UTC+06:00) Dhaka","cities":["Asia/Dhaka","Asia/Thimphu"]},{"value":"Myanmar Standard Time","abbr":"MST","offset":6.5,"isdst":false,"text":"(UTC+06:30) Yangon (Rangoon)","cities":["Asia/Rangoon","Indian/Cocos"]},{"value":"SE Asia Standard Time","abbr":"SAST","offset":7,"isdst":false,"text":"(UTC+07:00) Bangkok, Hanoi, Jakarta","cities":["Antarctica/Davis","Asia/Bangkok","Asia/Hovd","Asia/Jakarta","Asia/Phnom_Penh","Asia/Pontianak","Asia/Saigon","Asia/Vientiane","Etc/GMT-7","Indian/Christmas"]},{"value":"N. Central Asia Standard Time","abbr":"NCAST","offset":7,"isdst":false,"text":"(UTC+07:00) Novosibirsk","cities":["Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk"]},{"value":"China Standard Time","abbr":"CST","offset":8,"isdst":false,"text":"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi","cities":["Asia/Hong_Kong","Asia/Macau","Asia/Shanghai"]},{"value":"North Asia Standard Time","abbr":"NAST","offset":8,"isdst":false,"text":"(UTC+08:00) Krasnoyarsk","cities":["Asia/Krasnoyarsk"]},{"value":"Singapore Standard Time","abbr":"MPST","offset":8,"isdst":false,"text":"(UTC+08:00) Kuala Lumpur, Singapore","cities":["Asia/Brunei","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Makassar","Asia/Manila","Asia/Singapore","Etc/GMT-8"]},{"value":"W. Australia Standard Time","abbr":"WAST","offset":8,"isdst":false,"text":"(UTC+08:00) Perth","cities":["Antarctica/Casey","Australia/Perth"]},{"value":"Taipei Standard Time","abbr":"TST","offset":8,"isdst":false,"text":"(UTC+08:00) Taipei","cities":["Asia/Taipei"]},{"value":"Ulaanbaatar Standard Time","abbr":"UST","offset":8,"isdst":false,"text":"(UTC+08:00) Ulaanbaatar","cities":["Asia/Choibalsan","Asia/Ulaanbaatar"]},{"value":"North Asia East Standard Time","abbr":"NAEST","offset":8,"isdst":false,"text":"(UTC+08:00) Irkutsk","cities":["Asia/Irkutsk"]},{"value":"Japan Standard Time","abbr":"JST","offset":9,"isdst":false,"text":"(UTC+09:00) Osaka, Sapporo, Tokyo","cities":["Asia/Dili","Asia/Jayapura","Asia/Tokyo","Etc/GMT-9","Pacific/Palau"]},{"value":"Korea Standard Time","abbr":"KST","offset":9,"isdst":false,"text":"(UTC+09:00) Seoul","cities":["Asia/Pyongyang","Asia/Seoul"]},{"value":"Cen. Australia Standard Time","abbr":"CAST","offset":9.5,"isdst":false,"text":"(UTC+09:30) Adelaide","cities":["Australia/Adelaide","Australia/Broken_Hill"]},{"value":"AUS Central Standard Time","abbr":"ACST","offset":9.5,"isdst":false,"text":"(UTC+09:30) Darwin","cities":["Australia/Darwin"]},{"value":"E. Australia Standard Time","abbr":"EAST","offset":10,"isdst":false,"text":"(UTC+10:00) Brisbane","cities":["Australia/Brisbane","Australia/Lindeman"]},{"value":"AUS Eastern Standard Time","abbr":"AEST","offset":10,"isdst":false,"text":"(UTC+10:00) Canberra, Melbourne, Sydney","cities":["Australia/Melbourne","Australia/Sydney"]},{"value":"West Pacific Standard Time","abbr":"WPST","offset":10,"isdst":false,"text":"(UTC+10:00) Guam, Port Moresby","cities":["Antarctica/DumontDUrville","Etc/GMT-10","Pacific/Guam","Pacific/Port_Moresby","Pacific/Saipan","Pacific/Truk"]},{"value":"Tasmania Standard Time","abbr":"TST","offset":10,"isdst":false,"text":"(UTC+10:00) Hobart","cities":["Australia/Currie","Australia/Hobart"]},{"value":"Yakutsk Standard Time","abbr":"YST","offset":9,"isdst":false,"text":"(UTC+09:00) Yakutsk","cities":["Asia/Chita","Asia/Khandyga","Asia/Yakutsk"]},{"value":"Central Pacific Standard Time","abbr":"CPST","offset":11,"isdst":false,"text":"(UTC+11:00) Solomon Is., New Caledonia","cities":["Antarctica/Macquarie","Etc/GMT-11","Pacific/Efate","Pacific/Guadalcanal","Pacific/Kosrae","Pacific/Noumea","Pacific/Ponape"]},{"value":"Vladivostok Standard Time","abbr":"VST","offset":11,"isdst":false,"text":"(UTC+11:00) Vladivostok","cities":["Asia/Sakhalin","Asia/Ust-Nera","Asia/Vladivostok"]},{"value":"New Zealand Standard Time","abbr":"NZST","offset":12,"isdst":false,"text":"(UTC+12:00) Auckland, Wellington","cities":["Antarctica/McMurdo","Pacific/Auckland"]},{"value":"UTC+12","abbr":"U","offset":12,"isdst":false,"text":"(UTC+12:00) Coordinated Universal Time+12","cities":["Etc/GMT-12","Pacific/Funafuti","Pacific/Kwajalein","Pacific/Majuro","Pacific/Nauru","Pacific/Tarawa","Pacific/Wake","Pacific/Wallis"]},{"value":"Fiji Standard Time","abbr":"FST","offset":12,"isdst":false,"text":"(UTC+12:00) Fiji","cities":["Pacific/Fiji"]},{"value":"Magadan Standard Time","abbr":"MST","offset":12,"isdst":false,"text":"(UTC+12:00) Magadan","cities":["Asia/Anadyr","Asia/Kamchatka","Asia/Magadan","Asia/Srednekolymsk"]},{"value":"Kamchatka Standard Time","abbr":"KDT","offset":13,"isdst":true,"text":"(UTC+12:00) Petropavlovsk-Kamchatsky - Old","cities":["Asia/Kamchatka"]},{"value":"Tonga Standard Time","abbr":"TST","offset":13,"isdst":false,"text":"(UTC+13:00) Nuku\'alofa","cities":["Etc/GMT-13","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Tongatapu"]},{"value":"Samoa Standard Time","abbr":"SST","offset":13,"isdst":false,"text":"(UTC+13:00) Samoa","cities":["Pacific/Apia"]}]');
				const normalizeCity = city => city.replace(" ", "_").normalize("NFD").replace(/\p{Diacritic}/gu, "");
				function searchForInfoFromCity(city, exact = false, onlyFirstResult = false) {
					const normalizedCity = normalizeCity(city);
					const results = timezoneList_namespaceObject.filter((t => {
						let search = t.cities.filter((c => exact ? c === normalizedCity : ~c.toLowerCase().indexOf(normalizedCity.toLowerCase())));
						return _.isEmpty(search) ? false : search[0];
					}));
					return onlyFirstResult ? results?.[0] : results;
				}
				function searchCityNames(city, exact = false, onlyFirstResult = false) {
					const normalizedCity = normalizeCity(city);
					const searched = searchForInfoFromCity(normalizedCity, exact, onlyFirstResult);
					if (!searched) return;
					if (_.isArray(searched)) return searched.flatMap((t => t.cities.filter((c => ~c.toLowerCase().indexOf(normalizedCity.toLowerCase())))));
					else return searched;
				}
				function getTimezoneFromCity(city) {
					const foundCity = searchForInfoFromCity(city);
					if (!foundCity || foundCity?.length <= 0 || foundCity?.length >= 2) throw new TimezoneException("Invalid City", constants.ExceptionCodes.Timezones.INVALID_CITY);
					return foundCity?.[0]?.offset;
				}
				function getDateFromCity(city, sendAsMoment = false) {
					const timezone = getTimezoneFromCity(city);
					if (!timezone) return;
					const date = getTimeFromTimezone(ensureTimezone(timezone));
					return sendAsMoment ? (0, classes_namespaceObject.Timestamp)(date) : date;
				}
				const doesCityExist = city => Boolean(searchForInfoFromCity(city, true));
				const {
					AvatarDefaults
				} = external_PluginApi_namespaceObject.DiscordModules;
				const {
					default: Avatar
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("AnimatedAvatar");
				const {
					default: SearchBar
				} = external_PluginApi_namespaceObject.WebpackModules.find((m => "SearchBar" === m.default?.displayName));
				function components_UserSelector({
					onConfirm,
					include = {
						existingUsers: true,
						bots: false
					},
					onClose,
					transitionState
				}) {
					const [search, setSearch] = (0, external_BdApi_React_.useState)("");
					const [selectedUser, setSelectedUser] = (0, external_BdApi_React_.useState)(false);
					const userList = Object.entries(stores_namespaceObject.Users.getUsers()).filter((([id]) => id !== stores_namespaceObject.Users.getCurrentUser().id));
					const searchedUserList = userList.filter((([, user]) => {
						const isInSearch = Boolean(~user.username.toLowerCase().indexOf(search.toLowerCase()));
						const isBot = include.bots ? false : user.bot;
						const doesExist = include.existingUsers ? true : !isExistingUser(user.id);
						return isInSearch && !isBot && doesExist;
					})).slice(0, 30);
					return external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z["user-find"]
					}, external_BdApi_React_default().createElement(modal_namespaceObject.ModalRoot, {
						size: modal_namespaceObject.ModalSize.MEDIUM,
						transitionState
					}, external_BdApi_React_default().createElement(modal_namespaceObject.ModalHeader, {
						separator: false
					}, external_BdApi_React_default().createElement(SearchBar, {
						className: Fuses_style.Z.search,
						placeholder: "Search users",
						query: search,
						onQueryChange: val => {
							setSearch(val);
						},
						onClear: () => setSearch("")
					}), external_BdApi_React_default().createElement(modal_namespaceObject.ModalCloseButton, {
						onClick: () => onClose()
					})), external_BdApi_React_default().createElement(modal_namespaceObject.ModalContent, null, external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z["list-wrapper"]
					}, searchedUserList.map((([id, values]) => external_BdApi_React_default().createElement("div", {
						className: `${Fuses_style.Z["list-user"]} ${selectedUser === values ? Fuses_style.Z["list-user-selected"] : ""}`,
						onClick: () => {
							setSelectedUser(selectedUser === values ? false : values);
						}
					}, external_BdApi_React_default().createElement(Avatar, {
						className: Fuses_style.Z["user-pfp"],
						src: AvatarDefaults.getUserAvatarURL(values),
						size: Avatar.Sizes.SIZE_24
					}), external_BdApi_React_default().createElement("span", null, values.username))))), external_BdApi_React_default().createElement(components_namespaceObject.Button, {
						onClick: () => {
							onConfirm(selectedUser.id);
							onClose();
						},
						style: {
							marginLeft: "auto",
							marginBottom: "16px"
						},
						disabled: !selectedUser
					}, external_BdApi_React_default().createElement(components_namespaceObject.Flex, null, selectedUser && external_BdApi_React_default().createElement(Avatar, {
						className: Fuses_style.Z["user-pfp"],
						src: AvatarDefaults.getUserAvatarURL(selectedUser),
						size: Avatar.Sizes.SIZE_16
					}), "Select")))));
				}
				function ErrorText_extends() {
					ErrorText_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return ErrorText_extends.apply(this, arguments);
				}
				const ErrorText = external_BdApi_React_default().memo((({
					children,
					...etc
				}) => {
					const anim = (0, external_Modules_react_spring_namespaceObject.useSpring)({
						from: {
							marginTop: "-10px"
						},
						to: {
							marginTop: "0"
						}
					});
					return external_BdApi_React_default().createElement(external_Modules_react_spring_namespaceObject.animated.div, ErrorText_extends({
						style: anim
					}, etc, {
						className: "colorError-3RX-d6 size12-3cLvbJ"
					}), children);
				}));
				function UserPicker_extends() {
					UserPicker_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return UserPicker_extends.apply(this, arguments);
				}
				const {
					AvatarDefaults: UserPicker_AvatarDefaults
				} = external_PluginApi_namespaceObject.DiscordModules;
				const {
					default: UserPicker_Avatar
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("AnimatedAvatar");
				const UserPicker = external_BdApi_React_default().memo((({
					user,
					onSelect,
					error,
					filterUsers,
					bigPreview = false,
					disableControls = false
				}) => {
					const UserSelector = ({
						text
					}) => external_BdApi_React_default().createElement("a", {
						onClick: () => (0, modal_namespaceObject.openModal)((h => external_BdApi_React_default().createElement(components_UserSelector, UserPicker_extends({
							onConfirm: onSelect,
							include: filterUsers
						}, h))))
					}, text);
					const Controls = () => external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement("span", null, user.username, " ", bigPreview ? "" : "."), external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z.opts
					}, external_BdApi_React_default().createElement(UserSelector, {
						text: "Change"
					}), !bigPreview && external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement("span", {
						className: Fuses_style.Z.dot
					}, "or"), external_BdApi_React_default().createElement("a", {
						onClick: onSelect
					}, "Remove"))));
					return external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z["user-selector"]
					}, !bigPreview ? external_BdApi_React_default().createElement((() => {
						if (user) return external_BdApi_React_default().createElement("div", {
							className: Fuses_style.Z["user-picker"]
						}, external_BdApi_React_default().createElement(UserPicker_Avatar, {
							src: UserPicker_AvatarDefaults.getUserAvatarURL(user),
							size: UserPicker_Avatar.Sizes.SIZE_16,
							className: Fuses_style.Z.avatar
						}), external_BdApi_React_default().createElement(Controls, null));
						else return external_BdApi_React_default().createElement(UserSelector, {
							text: "Select a user"
						});
					}), null) : external_BdApi_React_default().createElement((() => {
						if (user) return external_BdApi_React_default().createElement("div", {
							className: Fuses_style.Z["user-picker-big-preview"]
						}, external_BdApi_React_default().createElement(UserPicker_Avatar, {
							src: UserPicker_AvatarDefaults.getUserAvatarURL(user),
							size: UserPicker_Avatar.Sizes.SIZE_120,
							className: Fuses_style.Z.avatar
						}), external_BdApi_React_default().createElement(Controls, null));
						else return external_BdApi_React_default().createElement(ErrorText, null, "User ID not set. Please contact the dev of this plugin");
					}), null), error && external_BdApi_React_default().createElement(ErrorText, null, error));
				}));
				function ListSettings_extends() {
					ListSettings_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return ListSettings_extends.apply(this, arguments);
				}
				const ListSettings = external_BdApi_React_default().memo((({
					onClose,
					...etc
				}) => {
					const listSorting = (0, flux_namespaceObject.useStateFromStores)([settingsManager], (() => settingsManager.get("listSorting", "a-z")));
					const lockControls = (0, flux_namespaceObject.useStateFromStores)([settingsManager], (() => settingsManager.get("lockControls", false)));
					return external_BdApi_React_default().createElement(contextmenu_namespaceObject.Menu, ListSettings_extends({}, etc, {
						navId: "fuses-list-settings",
						onClose
					}), external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuGroup, {
						label: "Sorting"
					}, external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuRadioItem, {
						label: "A-Z",
						id: "a-z",
						checked: "a-z" === listSorting,
						action: () => settingsManager.set("listSorting", "a-z")
					}), external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuRadioItem, {
						label: "Z-A",
						id: "z-a",
						checked: "z-a" === listSorting,
						action: () => settingsManager.set("listSorting", "z-a")
					}), external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuRadioItem, {
						label: "By newest",
						id: "by-newest",
						checked: "by-newest" === listSorting,
						action: () => settingsManager.set("listSorting", "by-newest")
					}), external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuRadioItem, {
						label: "By oldest",
						id: "by-oldest",
						checked: "by-oldest" === listSorting,
						action: () => settingsManager.set("listSorting", "by-oldest")
					})), external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuGroup, null, external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuCheckboxItem, {
						id: "lock-controls",
						label: "Lock controls",
						subtext: "Locks the action controls in the list in case of accidental deletions or changes",
						checked: lockControls,
						action: () => settingsManager.set("lockControls", !lockControls)
					})));
				}));
				function List_extends() {
					List_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return List_extends.apply(this, arguments);
				}
				const List_SearchBar = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("SearchBar");
				const {
					default: List_Avatar
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("AnimatedAvatar");
				const {
					AvatarDefaults: List_AvatarDefaults
				} = external_PluginApi_namespaceObject.DiscordModules;
				const List = external_BdApi_React_default().memo((({
					onEdit,
					onDelete,
					enableSettings = true,
					disableControls = settingsManager.get("lockControls", false),
					list = cleanList(getList()),
					...etc
				}) => {
					const sortSettings = (0, flux_namespaceObject.useStateFromStores)([settingsManager], (() => settingsManager.get("listSorting", "a-z")));
					const lockControls = (0, flux_namespaceObject.useStateFromStores)([settingsManager], (() => disableControls));
					const [search, setSearch] = (0, external_BdApi_React_.useState)("");
					const formattedList = Object.entries(list).map((([userid]) => stores_namespaceObject.Users.getUser(userid)));
					const filteredList = formattedList.filter((user => ~user?.username?.toLowerCase?.().indexOf?.(search)));
					let sortedList = filteredList;
					switch (sortSettings) {
						case "a-z":
							sortedList = filteredList.sort(((a, b) => {
								if (!a || !b) return 0;
								if (a.username > b.username) return 1;
								if (a.username < b.username) return -1;
							}));
							break;
						case "z-a":
							sortedList = filteredList.sort(((a, b) => {
								if (!a || !b) return 0;
								if (a.username > b.username) return -1;
								if (a.username < b.username) return 1;
							}));
							break;
						case "by-newest":
							sortedList = filteredList.reverse();
							break;
						case "by-oldest":
							break;
						default:
							break;
					}
					return external_BdApi_React_default().createElement("div", List_extends({
						className: Fuses_style.Z["user-list-wrapper"]
					}, etc), external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z.header
					}, external_BdApi_React_default().createElement(List_SearchBar, {
						className: Fuses_style.Z["header-search"],
						placeholder: "Search user",
						query: search,
						onQueryChange: val => {
							setSearch(val);
						},
						onClear: () => setSearch("")
					}), enableSettings && external_BdApi_React_default().createElement(components_namespaceObject.Popout, {
						renderPopout: props => external_BdApi_React_default().createElement(ListSettings, List_extends({}, props, {
							onClose: props.closePopout
						})),
						position: components_namespaceObject.Popout.Positions.BOTTOM
					}, (props => external_BdApi_React_default().createElement(components_namespaceObject.Button, List_extends({
						size: components_namespaceObject.Button.Sizes.ICON,
						look: components_namespaceObject.Button.Looks.BLANK,
						className: `${Fuses_style.Z.settings} ${props["aria-expanded"] ? Fuses_style.Z.active : ""}`
					}, props), external_BdApi_React_default().createElement(icons_namespaceObject.Gear, {
						width: 20,
						height: 20
					}))))), external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z["user-list"]
					}, sortedList.map((user => {
						if (!user) return external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null);
						const timezone = getTimezone(user.id);
						if (!timezone) return external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null);
						return external_BdApi_React_default().createElement("div", {
							className: Fuses_style.Z["user-list-item"]
						}, external_BdApi_React_default().createElement(List_Avatar, {
							src: List_AvatarDefaults.getUserAvatarURL(user),
							size: List_Avatar.Sizes.SIZE_32,
							className: Fuses_style.Z.avatar
						}), external_BdApi_React_default().createElement("div", null, external_BdApi_React_default().createElement("div", {
							className: Fuses_style.Z.name
						}, user.username), external_BdApi_React_default().createElement("div", {
							className: Fuses_style.Z.timezone
						}, "UTC", timezone, " ", external_BdApi_React_default().createElement("span", {
							className: Fuses_style.Z["timestamp-dot"]
						}, "•"), " ", external_BdApi_React_default().createElement(BasicTimer, {
							timezone
						}))), !lockControls && external_BdApi_React_default().createElement("div", {
							className: Fuses_style.Z["actions-wrapper"]
						}, external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
							text: `Edit ${user.username}`
						}, external_BdApi_React_default().createElement(icons_namespaceObject.Pencil, {
							className: Fuses_style.Z["edit-icon"],
							onClick: () => onEdit(user.id)
						})), external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
							text: `Remove ${user.username}`
						}, external_BdApi_React_default().createElement(icons_namespaceObject.Trash, {
							className: Fuses_style.Z["delete-icon"],
							onClick: () => onDelete(user.id)
						}))));
					}))));
				}));
				const timezoneAbbreviations_namespaceObject = JSON.parse('{"UTC":"0","EST":"-5","CET":"+1","AST":"-4","CAT":"+2","CST":"-6","PST":"-8","AEST":"+10","ACST":"+9.5","AFT":"+4.5","AKST":"-9","AWST":"+9","EAT":"+3","EET":"+2","MSK":"+3","MST":"-7","WAT":"+1"}');
				function useKeyPress(targetKey) {
					const [keyPressed, setKeyPressed] = (0, external_BdApi_React_.useState)(false);
					function downHandler({
						key
					}) {
						if (key === targetKey) setKeyPressed(true);
					}
					const upHandler = ({
						key
					}) => {
						if (key === targetKey) setKeyPressed(false);
					};
					(0, external_BdApi_React_.useEffect)((() => {
						window.addEventListener("keydown", downHandler);
						window.addEventListener("keyup", upHandler);
						return () => {
							window.removeEventListener("keydown", downHandler);
							window.removeEventListener("keyup", upHandler);
						};
					}));
					return keyPressed;
				}
				const AutocompleteQuery = external_BdApi_React_default().memo((({
					list,
					onSelect
				}) => {
					const downPress = useKeyPress("ArrowDown");
					const upPress = useKeyPress("ArrowUp");
					const enterPress = useKeyPress("Enter");
					const [cursor, setCursor] = (0, external_BdApi_React_.useState)(0);
					const [hovered, setHovered] = (0, external_BdApi_React_.useState)();
					(0, external_BdApi_React_.useEffect)((() => {
						if (list.length && downPress) setCursor((prevState => prevState < list.length - 1 ? prevState + 1 : prevState));
					}), [downPress]);
					(0, external_BdApi_React_.useEffect)((() => {
						if (list.length && upPress) setCursor((prevState => prevState > 0 ? prevState - 1 : prevState));
					}), [upPress]);
					(0, external_BdApi_React_.useEffect)((() => {
						if (list.length && enterPress) onSelect(list[cursor]);
					}), [cursor, enterPress]);
					(0, external_BdApi_React_.useEffect)((() => {
						if (list.length && hovered) setCursor(list.indexOf(hovered));
					}), [hovered]);
					return external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z.autocomplete
					}, external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z["autocomplete-popout"]
					}, list.map(((item, index) => external_BdApi_React_default().createElement(CityItem, {
						active: index === cursor,
						item,
						onSelect,
						setHovered
					})))));
				}));
				const CityItem = ({
					item,
					active,
					onSelect,
					setHovered
				}) => external_BdApi_React_default().createElement("div", {
					className: Fuses_style.Z.row,
					onClick: () => onSelect(item),
					onMouseEnter: () => setHovered(item),
					onMouseLeave: () => setHovered()
				}, external_BdApi_React_default().createElement("div", {
					className: `${Fuses_style.Z.item} ${active ? Fuses_style.Z.selected : ""}`
				}, external_BdApi_React_default().createElement("span", null, item)));
				const {
					SingleSelect
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("SingleSelect");
				const presets = Object.entries(timezoneAbbreviations_namespaceObject).map((([name, tz]) => ({
					label: name,
					value: tz
				})));
				function UserList({
					defaultVals,
					isModal = false,
					...etc
				}) {
					const [, forceUpdate] = (0, external_BdApi_React_.useReducer)((n => n + 1), 0);
					const currentOffset = getOffset();
					const [timezonePage, setTimezonePage] = (0, external_BdApi_React_.useState)(constants.Settings.TimezonePages.MANUAL);
					const [userId, setUserId] = (0, external_BdApi_React_.useState)(defaultVals?.userID);
					const [userIdError, setUserIdError] = (0, external_BdApi_React_.useState)(false);
					const [timezone, setTimezone] = (0, external_BdApi_React_.useState)(defaultVals?.timezone);
					const [timezoneError, setTimezoneError] = (0, external_BdApi_React_.useState)(false);
					const [userCity, setUserCity] = (0, external_BdApi_React_.useState)("");
					const [userCityError, setUserCityError] = (0, external_BdApi_React_.useState)(false);
					const [init, setInit] = (0, external_BdApi_React_.useState)(false);
					(0, external_BdApi_React_.useEffect)((() => {
						setInit(true);
					}));
					const addUserButtonAnim = (0, external_Modules_react_spring_namespaceObject.useTransition)(timezonePage === constants.Settings.TimezonePages.MANUAL, {
						from: {
							marginTop: init ? "-38px" : "0px",
							opacity: init ? 0 : 1
						},
						enter: {
							marginTop: "0px",
							opacity: 1
						},
						leave: {
							marginTop: "-38px",
							opacity: 0
						}
					});
					const selectPresetAnim = (0, external_Modules_react_spring_namespaceObject.useTransition)(timezonePage === constants.Settings.TimezonePages.MANUAL, {
						from: {
							width: init ? "0px" : "150px",
							opacity: init ? 0 : 1,
							marginLeft: init ? "0px" : "8px"
						},
						enter: {
							width: "150px",
							opacity: 1,
							marginLeft: "8px"
						},
						leave: {
							width: "0px",
							opacity: 0,
							marginLeft: "0px"
						}
					});
					const searchCityButtonAnim = (0, external_Modules_react_spring_namespaceObject.useTransition)(timezonePage === constants.Settings.TimezonePages.CITY_SELECTOR, {
						from: {
							marginRight: "-40px",
							opacity: 0
						},
						enter: {
							marginRight: "0px",
							opacity: 1
						},
						leave: {
							marginRight: "-40px",
							opacity: 0
						}
					});
					const [searched, setSearched] = (0, external_BdApi_React_.useState)();
					(0, external_BdApi_React_.useEffect)((() => {
						setSearched(searchCityNames(userCity));
					}), [userCity]);
					const [isEditing, setEditing] = (0, external_BdApi_React_.useState)(false);
					const handleAdd = (id, timezone) => {
						if (_.isEmpty(id)) {
							setUserIdError("Please put a value here");
							return;
						}
						if (!stores_namespaceObject.Users.getUser(id)) {
							setUserIdError("I have no idea how you made that, but you've added an invalid ID");
							return;
						}
						if (_.isEmpty(timezone)) {
							setTimezoneError("Please put a value here");
							return;
						}
						addUser(id, ensureTimezone(timezone));
						if (isModal) {
							external_PluginApi_namespaceObject.Toasts.success("Timezone sucessfully added");
							etc.onClose();
							return;
						}
						setUserId("");
						setTimezone("");
						setEditing(false);
						setUserIdError(false);
						setTimezoneError(false);
						forceUpdate();
					};
					const handleCityChange = city => {
						try {
							const cityDate = getDateFromCity(city, true);
							setTimezone(getOffset(cityDate));
							setUserCityError(false);
							setTimezonePage(constants.Settings.TimezonePages.MANUAL);
						} catch (err) {
							if (err instanceof TimezoneException && err.code === constants.ExceptionCodes.Timezones.INVALID_CITY) setUserCityError(external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, "Invalid City! Please check ", external_BdApi_React_default().createElement("a", {
								href: "https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a",
								target: "_blank"
							}, "this list"), " to see all valid places!"));
							else {
								setUserCityError("Unkown error! Check console for more information");
								console.error(err);
							}
						}
					};
					const TimezonePicker = external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement(components_namespaceObject.Flex, {
						className: Fuses_style.Z["user-add-timezone-panel"],
						style: {
							zIndex: 2
						}
					}, timezonePage === constants.Settings.TimezonePages.MANUAL && external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement(components_namespaceObject.TextInput, {
						className: Fuses_style.Z["timezone-search-textbox"],
						value: timezone,
						placeholder: `Timezone (in UTC. e.g.: ${currentOffset})`,
						onChange: text => setTimezone(text.replace(/[^\d.+-:]/g, "")),
						error: timezoneError
					})), timezonePage === constants.Settings.TimezonePages.CITY_SELECTOR && external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement(components_namespaceObject.TextInput, {
						className: Fuses_style.Z["city-search-textbox"],
						value: userCity,
						placeholder: `City that user lives (Inserting country names will not work)`,
						onChange: text => setUserCity(text),
						error: userCityError
					})), selectPresetAnim(((style, item) => item && external_BdApi_React_default().createElement(external_Modules_react_spring_namespaceObject.animated.div, {
						style
					}, external_BdApi_React_default().createElement(SingleSelect, {
						options: presets,
						placeholder: "Select a preset",
						value: presets.find((val => ensureTimezone(val.value) === ensureTimezone(timezone)))?.value,
						onChange: value => setTimezone(value),
						className: Fuses_style.Z["preset-selector"]
					})))), external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z["actions-wrapper"]
					}, searchCityButtonAnim(((style, item) => item && external_BdApi_React_default().createElement(external_Modules_react_spring_namespaceObject.animated.div, {
						style,
						className: Fuses_style.Z["find-city-btn-anim"]
					}, external_BdApi_React_default().createElement(components_namespaceObject.Button, {
						className: Fuses_style.Z["find-city-btn"],
						color: components_namespaceObject.Button.Colors.GREEN,
						size: components_namespaceObject.Button.Sizes.ICON,
						style: {
							width: "40px",
							height: "40px"
						},
						onClick: () => handleCityChange(userCity)
					}, external_BdApi_React_default().createElement(icons_namespaceObject.Search, null))))), timezonePage === constants.Settings.TimezonePages.MANUAL ? external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
						text: `Search a timezone by a city`,
						className: Fuses_style.Z["search-city-wrapper"]
					}, external_BdApi_React_default().createElement(components_namespaceObject.Button, {
						className: Fuses_style.Z["search-city-btn"],
						look: components_namespaceObject.Button.Looks.OUTLINED,
						color: components_namespaceObject.Button.Colors.WHITE,
						size: components_namespaceObject.Button.Sizes.ICON,
						onClick: () => setTimezonePage(constants.Settings.TimezonePages.CITY_SELECTOR)
					}, external_BdApi_React_default().createElement(icons_namespaceObject.EmojiTravelCategory, {
						width: 24,
						height: 24
					}))) : external_BdApi_React_default().createElement(components_namespaceObject.Button, {
						className: Fuses_style.Z["return-btn"],
						look: components_namespaceObject.Button.Looks.OUTLINED,
						color: components_namespaceObject.Button.Colors.WHITE,
						size: components_namespaceObject.Button.Sizes.ICON,
						onClick: () => setTimezonePage(constants.Settings.TimezonePages.MANUAL)
					}, external_BdApi_React_default().createElement(icons_namespaceObject.ArrowLeft, null)))));
					return external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, !isModal && external_BdApi_React_default().createElement(List, {
						onEdit: id => {
							setUserId(id);
							setTimezone(timezone);
							setEditing(true);
							setTimezonePage(constants.Settings.TimezonePages.MANUAL);
						},
						onDelete: id => {
							removeUser(id);
							forceUpdate();
						}
					}), external_BdApi_React_default().createElement(UserPicker, {
						user: stores_namespaceObject.Users.getUser(userId),
						onSelect: id => {
							setUserId(id);
							setEditing(false);
						},
						error: userIdError,
						filterUsers: defaultVals?.userPicker,
						bigPreview: isModal
					}), timezonePage === constants.Settings.TimezonePages.CITY_SELECTOR && !_.isEmpty(searched) && !_.isEmpty(userCity) && userCity !== searched?.[0] && external_BdApi_React_default().createElement(AutocompleteQuery, {
						list: searched,
						onSelect: value => setUserCity(value)
					}), TimezonePicker, addUserButtonAnim(((style, item) => item && external_BdApi_React_default().createElement(external_Modules_react_spring_namespaceObject.animated.div, {
						style
					}, external_BdApi_React_default().createElement(components_namespaceObject.Button, {
						onClick: () => handleAdd(userId, timezone),
						disabled: !(userId && !_.isEmpty(timezone))
					}, isEditing ? "Edit" : "Add", " user")))));
				}
				function DataIcon_extends() {
					DataIcon_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return DataIcon_extends.apply(this, arguments);
				}
				const colorList = ["#57F287", "#FEE75C", "#EB459E", "#ED4245"];
				const DataIcon = external_BdApi_React_default().memo((props => {
					const getRandom = setRandomInterval(0, 4);
					return external_BdApi_React_default().createElement("svg", DataIcon_extends({
						viewBox: "0 0 620 827",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, props), external_BdApi_React_default().createElement("path", {
						d: "M412.671 190.172L412.674 190.178C416.424 197.48 422.52 203.576 429.822 207.326L429.828 207.329C434.352 209.644 439.346 210.677 445.408 211.176C451.362 211.667 458.765 211.667 468.219 211.667H468.444H610.541C611.646 214.4 612.527 217.249 613.243 220.23C614.968 227.445 615 235.19 615 252.306V771.555C615 781.283 614.996 788.276 614.543 793.771C614.095 799.205 613.234 802.736 611.76 805.617C608.966 811.054 604.388 815.633 598.95 818.426C596.069 819.901 592.538 820.762 587.104 821.21C581.609 821.663 574.616 821.667 564.889 821.667H55.1111C45.3836 821.667 38.391 821.663 32.896 821.21C27.462 820.762 23.9309 819.901 21.0496 818.426C15.6105 815.632 11.0312 811.052 8.23747 805.612C6.76495 802.732 5.9042 799.201 5.45672 793.771C5.00395 788.276 5 781.283 5 771.555V55.1111C5 45.3836 5.00395 38.391 5.45672 32.896C5.90429 27.4642 6.76529 23.9337 8.23834 21.0531C11.0328 15.613 15.613 11.0328 21.0531 8.23834C23.9337 6.76529 27.4642 5.90429 32.896 5.45672C38.391 5.00395 45.3836 5 55.1111 5H367.694C384.809 5 392.554 5.03194 399.769 6.75692C402.75 7.47242 405.6 8.35406 408.333 9.45905V151.556V151.782C408.333 161.235 408.333 168.638 408.824 174.592C409.323 180.654 410.356 185.648 412.671 190.172Z",
						stroke: "white",
						"stroke-width": "10"
					}), external_BdApi_React_default().createElement("path", {
						d: "M434.388 198.429C428.946 195.634 424.365 191.053 421.571 185.612C420.098 182.732 419.238 179.201 418.79 173.771C418.337 168.276 418.333 161.283 418.333 151.556V14.5509C424.681 18.4634 430.08 23.8179 442.003 35.7408L584.259 177.997C596.182 189.92 601.536 195.319 605.449 201.667H468.444C458.717 201.667 451.724 201.663 446.229 201.21C440.798 200.762 437.268 199.902 434.388 198.429Z",
						stroke: "white",
						"stroke-width": "10"
					}), external_BdApi_React_default().createElement("path", {
						d: "M422 25L595 197",
						stroke: "white",
						"stroke-width": "20"
					}), external_BdApi_React_default().createElement("rect", {
						x: "66",
						y: "351",
						width: "210",
						height: "39",
						rx: "20",
						fill: colorList[getRandom()]
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "414",
						width: "174",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "520",
						width: "208",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "485",
						width: "404",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "450",
						width: "95",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "66",
						y: "78",
						width: "269",
						height: "39",
						rx: "20",
						fill: colorList[getRandom()]
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "141",
						width: "178",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "282",
						width: "297",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "247",
						width: "236",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "212",
						width: "178",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "177",
						width: "131",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "66",
						y: "586",
						width: "265",
						height: "39",
						rx: "20",
						fill: colorList[getRandom()]
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "650",
						width: "285",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "721",
						width: "168",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}), external_BdApi_React_default().createElement("rect", {
						x: "157",
						y: "686",
						width: "201",
						height: "23",
						rx: "12",
						fill: "#4F545C"
					}));
				}));
				function setRandomInterval(min, max) {
					let last;
					let last2;
					let last3;
					return function() {
						let random;
						do {
							random = Math.floor(Math.random() * (max - min)) + min;
						} while (random === last || random === last2 || random === last3);
						last3 = last2;
						last2 = last;
						last = random;
						return random;
					};
				}
				const SwitchItem = hooks_createUpdateWrapper(external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("SwitchItem"));
				const RadioGroup = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("RadioGroup");
				const Settings = external_BdApi_React_default().memo((() => {
					const shouldEnableIconsOption = (0, flux_namespaceObject.useStateFromStores)([settingsManager], (() => {
						const timestamp = settingsManager.get("timestamps", false);
						const timestampsMessages = settingsManager.get("timestampsMessages", false);
						return !(timestamp && !timestampsMessages || !timestamp && timestampsMessages);
					}));
					const timerDisplay = (0, flux_namespaceObject.useStateFromStores)([settingsManager], (() => settingsManager.get("display", constants.Settings.TimerDisplay.USER_BANNER)));
					const [, forceUpdate] = (0, external_BdApi_React_.useReducer)((n => n + 1), 0);
					const [fileError, setFileError] = (0, external_BdApi_React_.useState)();
					settingsManager.set("_callTimeCalculator", false);
					return external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z["preview-wrapper"]
					}, external_BdApi_React_default().createElement(Timer, null)), external_BdApi_React_default().createElement(Category, {
						look: Category.Looks.COMPACT,
						label: "User list"
					}, external_BdApi_React_default().createElement(UserList, null)), external_BdApi_React_default().createElement(Category, {
						look: Category.Looks.COMPACT,
						label: "General Settings"
					}, external_BdApi_React_default().createElement(forms_namespaceObject.FormSection, {
						title: "Display timer on..."
					}, external_BdApi_React_default().createElement(RadioGroup, {
						options: [{
							name: "Banner",
							value: constants.Settings.TimerDisplay.USER_BANNER
						}, {
							name: "Header",
							value: constants.Settings.TimerDisplay.USER_HEADER
						}],
						value: timerDisplay,
						onChange: ({
							value
						}) => settingsManager.set("display", value)
					})), external_BdApi_React_default().createElement(SwitchItem, {
						value: settingsManager.get("seconds", false),
						onChange: value => settingsManager.set("seconds", value)
					}, "Show seconds on the timer"), external_BdApi_React_default().createElement(SwitchItem, {
						value: settingsManager.get("ampm", constants.TimePreferrence["12HFOMRAT"]()),
						onChange: value => settingsManager.set("ampm", value)
					}, "Use the 12 o' clock format (AM/PM)")), external_BdApi_React_default().createElement(Category, {
						look: Category.Looks.COMPACT,
						label: "Timer in messages"
					}, external_BdApi_React_default().createElement(SwitchItem, {
						value: settingsManager.get("timestamps", false),
						onChange: value => settingsManager.set("timestamps", value)
					}, "Display the user's current time in messages"), external_BdApi_React_default().createElement(SwitchItem, {
						value: settingsManager.get("timestampsMessages", false),
						onChange: value => settingsManager.set("timestampsMessages", value)
					}, "Display the message's time according to the user's time"), external_BdApi_React_default().createElement(SwitchItem, {
						value: settingsManager.get("timestampsIcons", false),
						onChange: value => settingsManager.set("timestampsIcons", value),
						disabled: shouldEnableIconsOption,
						note: "This will be enabled by default if both settings above are enabled"
					}, "Show icons")), external_BdApi_React_default().createElement(Category, {
						look: Category.Looks.COMPACT,
						label: "Import/Export user list"
					}, external_BdApi_React_default().createElement(components_namespaceObject.Flex, {
						className: Fuses_style.Z["import-flex"]
					}, external_BdApi_React_default().createElement("div", {
						className: Fuses_style.Z["import-wrapper"]
					}, external_BdApi_React_default().createElement(components_namespaceObject.Button, {
						onClick: () => {
							DiscordNative.fileManager.openFiles("*.json").then((output => {
								if (!output?.[0]?.data) return;
								const [{
									data
								}] = output;
								const buffer = new Uint8Array(data);
								const str = (new TextDecoder).decode(buffer);
								try {
									let json;
									try {
										json = JSON.parse(str);
									} catch (err) {
										throw new ImportFileException("Tried to read a non-JSON file", constants.ExceptionCodes.ImportFile.INVALID_FILE);
									}
									const checkIfNotValid = isListNotValid(json);
									console.log(checkIfNotValid);
									if (checkIfNotValid) throw new ImportFileException("You imported an invalid User List format. Are you sure that this is the correct .JSON file?", checkIfNotValid[0]);
									createQuestion("Override current list", external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement(components_namespaceObject.Text, null, "Are you sure that you wanna do that? This will override the current user list. But you can backup it. Here it is a look at what you're trying to import:"), external_BdApi_React_default().createElement(List, {
										list: json,
										enableSettings: false,
										disableControls: true,
										style: {
											marginTop: "16px"
										}
									})), [{
										text: "Save and Override",
										color: components_namespaceObject.Button.Colors.BRAND
									}, {
										text: "Ignore and Override",
										color: components_namespaceObject.Button.Colors.RED,
										look: components_namespaceObject.Button.Looks.LINK
									}, {
										text: "Cancel",
										color: components_namespaceObject.Button.Colors.TRANSPARENT,
										look: components_namespaceObject.Button.Looks.LINK
									}], {
										size: modal_namespaceObject.ModalSize.MEDIUM,
										autoClose: false
									}).then((({
										button,
										close
									}) => {
										if ("Save and Override" === button) DiscordNative.fileManager.saveWithDialog(JSON.stringify(getList()), "users.json").then((() => setList(json)));
										if ("Just Override" === button) setList(json);
										close();
										setFileError(false);
										forceUpdate();
									}));
								} catch (err) {
									if (err.code === constants.ExceptionCodes.ImportFile.INVALID_FILE) setFileError(["This isn't a valid user list file. It should be a file that ends with .JSON", err.code]);
									else {
										setFileError(["Unkown error. Click here to open DevTools", err.code]);
										console.error(err);
									}
								}
							}));
						},
						style: {
							marginBottom: "12px"
						}
					}, "Load user list"), external_BdApi_React_default().createElement(components_namespaceObject.Button, {
						onClick: () => {
							DiscordNative.fileManager.saveWithDialog(JSON.stringify(getList()), "users.json");
							setFileError(false);
						}
					}, "Save user list"), fileError && external_BdApi_React_default().createElement(ErrorText, {
						onClick: () => window.require("electron").ipcRenderer.send("bd-open-devtools")
					}, fileError[0], ". Code error: ", fileError[1])), external_BdApi_React_default().createElement(DataIcon, {
						height: 138,
						className: Fuses_style.Z["file-info-icon"]
					}))));
				}));
				function useResolvedElement(subscriber, refOrElement) {
					const callbackRefElement = (0, external_BdApi_React_.useRef)(null);
					const lastReportRef = (0, external_BdApi_React_.useRef)(null);
					const cleanupRef = (0, external_BdApi_React_.useRef)();
					const callSubscriber = (0, external_BdApi_React_.useCallback)((() => {
						let element = null;
						if (callbackRefElement.current) element = callbackRefElement.current;
						else if (refOrElement)
							if (refOrElement instanceof HTMLElement) element = refOrElement;
							else element = refOrElement.current;
						if (lastReportRef.current && lastReportRef.current.element === element && lastReportRef.current.reporter === callSubscriber) return;
						if (cleanupRef.current) {
							cleanupRef.current();
							cleanupRef.current = null;
						}
						lastReportRef.current = {
							reporter: callSubscriber,
							element
						};
						if (element) cleanupRef.current = subscriber(element);
					}), [refOrElement, subscriber]);
					(0, external_BdApi_React_.useEffect)((() => {
						callSubscriber();
					}), [callSubscriber]);
					return (0, external_BdApi_React_.useCallback)((element => {
						callbackRefElement.current = element;
						callSubscriber();
					}), [callSubscriber]);
				}
				const extractSize = (entry, boxProp, sizeType) => {
					if (!entry[boxProp]) {
						if ("contentBoxSize" === boxProp) return entry.contentRect["inlineSize" === sizeType ? "width" : "height"];
						return;
					}
					return entry[boxProp][0] ? entry[boxProp][0][sizeType] : entry[boxProp][sizeType];
				};
				function useResizeObserver(opts = {}) {
					const onResize = opts.onResize;
					const onResizeRef = (0, external_BdApi_React_.useRef)(void 0);
					onResizeRef.current = onResize;
					const round = opts.round || Math.round;
					const resizeObserverRef = (0, external_BdApi_React_.useRef)();
					const [size, setSize] = (0, external_BdApi_React_.useState)({
						width: void 0,
						height: void 0
					});
					const didUnmount = (0, external_BdApi_React_.useRef)(false);
					(0, external_BdApi_React_.useEffect)((() => () => {
						didUnmount.current = true;
					}), []);
					const previous = (0, external_BdApi_React_.useRef)({
						width: void 0,
						height: void 0
					});
					const refCallback = useResolvedElement((0, external_BdApi_React_.useCallback)((element => {
						if (!resizeObserverRef.current || resizeObserverRef.current.box !== opts.box || resizeObserverRef.current.round !== round) resizeObserverRef.current = {
							box: opts.box,
							round,
							instance: new ResizeObserver((entries => {
								const entry = entries[0];
								const boxProp = "border-box" === opts.box ? "borderBoxSize" : "device-pixel-content-box" === opts.box ? "devicePixelContentBoxSize" : "contentBoxSize";
								const reportedWidth = extractSize(entry, boxProp, "inlineSize");
								const reportedHeight = extractSize(entry, boxProp, "blockSize");
								const newWidth = reportedWidth ? round(reportedWidth) : void 0;
								const newHeight = reportedHeight ? round(reportedHeight) : void 0;
								if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
									const newSize = {
										width: newWidth,
										height: newHeight
									};
									previous.current.width = newWidth;
									previous.current.height = newHeight;
									if (onResizeRef.current) onResizeRef.current(newSize);
									else if (!didUnmount.current) setSize(newSize);
								}
							}))
						};
						resizeObserverRef.current.instance.observe(element, {
							box: opts.box
						});
						return () => {
							if (resizeObserverRef.current) resizeObserverRef.current.instance.unobserve(element);
						};
					}), [opts.box, round]), opts.ref);
					return (0, external_BdApi_React_.useMemo)((() => ({
						ref: refCallback,
						width: size.width,
						height: size.height
					})), [refCallback, size ? size.width : null, size ? size.height : null]);
				}
				const hooks_useResizeObserver = useResizeObserver;
				function TimeCalculator_extends() {
					TimeCalculator_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return TimeCalculator_extends.apply(this, arguments);
				}
				const Header = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("Header");
				const TimeCalculator = external_BdApi_React_default().memo((({
					timezone,
					attachPropsToAnim,
					...etc
				}) => {
					const {
						ref,
						height
					} = hooks_useResizeObserver();
					let shouldShow = (0, flux_namespaceObject.useStateFromStores)([settingsManager], (() => settingsManager.get("_callTimeCalculator")));
					const [hours, setHours] = (0, external_BdApi_React_.useState)(0);
					const [minutes, setMinutes] = (0, external_BdApi_React_.useState)(0);
					const [calculated, calculate] = (0, external_BdApi_React_.useState)(getCurrentTime(timezone, hours, minutes));
					(0, external_BdApi_React_.useEffect)((() => {
						const id = setInterval((() => calculate(getCurrentTime(timezone, hours, minutes))), 1e3);
						return () => {
							clearInterval(id);
						};
					}));
					const openAnim = (0, external_Modules_react_spring_namespaceObject.useSpring)({
						height: shouldShow ? height + 16 : 0,
						opacity: shouldShow ? 1 : 0,
						pointerEvents: shouldShow ? "visible" : "none"
					});
					const calculateTextAnim = (0, external_Modules_react_spring_namespaceObject.useSpring)({
						opacity: calculated ? 1 : 0
					});
					return external_BdApi_React_default().createElement(external_Modules_react_spring_namespaceObject.animated.div, TimeCalculator_extends({
						style: openAnim
					}, attachPropsToAnim), external_BdApi_React_default().createElement("div", TimeCalculator_extends({
						ref,
						className: Fuses_style.Z["calc-time-wrapper"]
					}, etc), external_BdApi_React_default().createElement("div", {
						className: "divider-ewBQKj"
					}), external_BdApi_React_default().createElement("div", {
						className: "bodyTitle-1ySSKn fontDisplay-1dagSA base-1x0h_U size12-3cLvbJ muted-3-7c5L uppercase-3VWUQ9"
					}, "Check time after"), external_BdApi_React_default().createElement(components_namespaceObject.Flex, {
						align: components_namespaceObject.Flex.Align.CENTER,
						className: Fuses_style.Z["input-wrapper"]
					}, external_BdApi_React_default().createElement(components_namespaceObject.TextInput, {
						className: Fuses_style.Z.input,
						value: hours,
						onChange: value => {
							setHours(Number(value));
						}
					}), " ", external_BdApi_React_default().createElement("span", null, "hour", 1 === hours ? "" : "s", " and"), external_BdApi_React_default().createElement(components_namespaceObject.TextInput, {
						className: Fuses_style.Z.input,
						value: minutes,
						onChange: value => setMinutes(Number(value))
					}), " ", external_BdApi_React_default().createElement("span", null, "minute", 1 === minutes ? "" : "s")), calculated && external_BdApi_React_default().createElement(external_Modules_react_spring_namespaceObject.animated.div, {
						style: calculateTextAnim
					}, external_BdApi_React_default().createElement("b", null, "Result:"), " ", formatDate(calculated).toString())));
				}));
				function getCurrentTime(timezone, hrs, mins) {
					if (0 === hrs) return;
					let date = getTimeFromTimezone(timezone, new Date);
					date.setTime(date.getTime() + 60 * Number(hrs + mins / 60) * 60 * 1e3);
					return date;
				}
				const native_namespaceObject = Modules["@discord/native"];
				const TimestampActions = ({
					id,
					timezone,
					onEditTimezone,
					onDeleteTimezone
				}) => {
					let date = getTimeFromTimezone(timezone);
					const timeFormatted = formatDate(date);
					return [external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuGroup, null, external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
						id: "fuses-edit-timestamp",
						label: "Edit timezone",
						action: () => onEditTimezone(id)
					}), external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
						id: "fuses-remove-timestamp",
						label: "Remove timezone",
						color: "colorDanger",
						action: () => onDeleteTimezone(id)
					})), external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuGroup, null, external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
						id: "fuses-copy-timezone",
						label: "Copy timezone",
						action: () => (0, native_namespaceObject.copy)(timezone)
					}), external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
						id: "fuses-copy-time",
						label: "Copy time information",
						action: () => (0, native_namespaceObject.copy)(formatDate(date).toString())
					}, external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
						id: "fuses-copy-time-full",
						label: "Full date",
						action: () => (0, native_namespaceObject.copy)(timeFormatted.toString())
					}), external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
						id: "fuses-copy-time-hms",
						label: "Time",
						action: () => (0, native_namespaceObject.copy)(timeFormatted.timeString({
							includeSecs: false
						}))
					}), external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
						id: "fuses-copy-time-date",
						label: "Date",
						action: () => (0, native_namespaceObject.copy)(timeFormatted.dateString())
					})))];
				};
				function Fuses_extends() {
					Fuses_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return Fuses_extends.apply(this, arguments);
				}
				const onDeleteTimezone = id => {
					createQuestion("Remove timezone", "Are you sure that you want to remove the timezone for this user? Note that this is an IRREVERSIBLE action.", [{
						text: "Proceed",
						color: components_namespaceObject.Button.Colors.RED
					}, {
						text: "Cancel",
						color: components_namespaceObject.Button.Colors.TRANSPARENT,
						look: components_namespaceObject.Button.Looks.LINK
					}]).then((({
						button
					}) => {
						if ("Proceed" === button) removeUser(id);
					}));
				};
				class Fuses extends(external_BasePlugin_default()) {
					onStart() {
						external_StyleLoader_default().inject();
						this.handleUserBannerPatch();
						this.handleTimestampPatch();
						this.handleContextMenuPatch();
					}
					async handleUserBannerPatch() {
						external_PluginApi_namespaceObject.Patcher.after(external_PluginApi_namespaceObject.WebpackModules.find((m => "UserBanner" === m.default?.displayName)), "default", ((_this, [props], res) => {
							if (!isExistingUser(props.user.id) || settingsManager.get("display", constants.Settings.TimerDisplay.USER_BANNER) !== constants.Settings.TimerDisplay.USER_BANNER) return;
							const userTimezone = getTimezone(props.user.id);
							res.props.children.push(external_BdApi_React_default().createElement(Timer, {
								onClick: () => settingsManager.set("_callTimeCalculator", !settingsManager.get("_callTimeCalculator", false)),
								timezone: userTimezone,
								className: Fuses_style.Z["timer-positioning"],
								onContextMenu: e => (0, contextmenu_namespaceObject.openContextMenu)(e, (() => external_BdApi_React_default().createElement(contextmenu_namespaceObject.Menu, {
									navId: "fuses-timer-context-menu",
									onClose: contextmenu_namespaceObject.closeContextMenu
								}, TimestampActions({
									id: props.user.id,
									timezone: userTimezone,
									onEditTimezone: this.openSettingsModal,
									onDeleteTimezone
								}))))
							}, (element => settingsManager.get("_callTimeCalculator", false) ? element : external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
								text: `Click here to see ${props.user.username}'s time after some hours`,
								delay: 750
							}, element))));
						}));
						external_PluginApi_namespaceObject.Patcher.after(external_PluginApi_namespaceObject.WebpackModules.getByProps("UserPopoutInfo"), "UserPopoutProfileText", ((_this, [props], res) => {
							if (!isExistingUser(props.user.id)) return;
							const userTimezone = getTimezone(props.user.id);
							let indexToInsert = res.props.children.findIndex((e => "UserPopoutCustomStatus" === e?.type?.displayName));
							if (!indexToInsert) indexToInsert = 0;
							const headerTimer = external_BdApi_React_default().createElement(components_namespaceObject.Flex, {
								align: components_namespaceObject.Flex.Align.CENTER,
								className: `bodyTitle-1ySSKn fontDisplay-1dagSA ${components_namespaceObject.Text.Sizes.SIZE_12} ${components_namespaceObject.Text.Colors.HEADER_SECONDARY} uppercase-3VWUQ9 ${Fuses_style.Z["header-prev"]}`,
								onContextMenu: e => (0, contextmenu_namespaceObject.openContextMenu)(e, (() => external_BdApi_React_default().createElement(contextmenu_namespaceObject.Menu, {
									navId: "fuses-timer-context-menu",
									onClose: contextmenu_namespaceObject.closeContextMenu
								}, TimestampActions({
									id: props.user.id,
									timezone: userTimezone,
									onEditTimezone: this.openSettingsModal,
									onDeleteTimezone
								}))))
							}, external_BdApi_React_default().createElement(BasicTimer, {
								timezone: userTimezone,
								tooltip: false
							}, ((element, formattedText, _, shouldShowTimerIcon) => {
								const spanElement = external_BdApi_React_default().createElement("span", {
									onClick: () => settingsManager.set("_callTimeCalculator", !settingsManager.get("_callTimeCalculator", false))
								}, element, " (UTC", userTimezone, ")");
								return external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
									text: formattedText.toString(),
									className: Fuses_style.Z["timer-icon"]
								}, !shouldShowTimerIcon ? external_BdApi_React_default().createElement(RotateClock, {
									rotateAngle: 30 * Number(formattedText["12hour"])
								}) : external_BdApi_React_default().createElement(icons_namespaceObject.DropdownArrow, {
									className: Fuses_style.Z["close-icon"],
									width: 18,
									height: 18
								})), shouldShowTimerIcon ? spanElement : external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
									className: Fuses_style.Z["header-timer"],
									text: `Click here to see ${props.user.username}'s time after some hours`,
									delay: 750
								}, spanElement));
							})));
							if (settingsManager.get("_callTimeCalculator", false)) settingsManager.set("_callTimeCalculator", false);
							res.props.children.splice(indexToInsert + 1, 0, settingsManager.get("display", constants.Settings.TimerDisplay.USER_BANNER) === constants.Settings.TimerDisplay.USER_HEADER ? headerTimer : null, external_BdApi_React_default().createElement(TimeCalculator, {
								timezone: userTimezone
							}));
						}));
					}
					handleTimestampPatch() {
						const OriginalMessageTimestamp = external_PluginApi_namespaceObject.WebpackModules.getModule((m => m?.default?.toString().indexOf("showTimestampOnHover") > -1));
						external_PluginApi_namespaceObject.Patcher.after(OriginalMessageTimestamp, "default", ((_this, [props], res) => {
							if (!(settingsManager.get("timestamps", false) || settingsManager.get("timestampsMessages", false))) return;
							const isBothSettingsApplied = settingsManager.get("timestamps", false) && settingsManager.get("timestampsMessages", false);
							if (!isExistingUser(props.message.author.id)) return;
							let userTimezone = getTimezone(props.message.author.id);
							let timestamp = external_PluginApi_namespaceObject.Utilities.findInReactTree(res, (e => "MessageTimestamp" === e?.type?.displayName));
							const firstOgFunc = timestamp?.type;
							if (!firstOgFunc) return;
							timestamp.type = function() {
								let firstRes = firstOgFunc.apply(this, arguments);
								let children = firstRes?.props?.children;
								if (!children) return firstRes;
								firstRes.props.className += ` ${Fuses_style.Z["timestamp-timer-wrapper"]}`;
								if (!_.isArray(children)) children = [children];
								if (settingsManager.get("timestampsMessages", false)) children.push(external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement("span", {
									className: Fuses_style.Z.dot
								}, "•"), (isBothSettingsApplied || settingsManager.get("timestampsIcons", false)) && external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
									className: Fuses_style.Z["timestamp-tooltip"],
									text: `Message's time in ${props.message.author.username}'s timezone`
								}, external_BdApi_React_default().createElement(icons_namespaceObject.ChatBubble, {
									width: 16,
									height: 16
								})), external_BdApi_React_default().createElement(BasicTimer, {
									className: Fuses_style.Z["timestamp-timer"],
									staticTime: getTimeFromTimezone(userTimezone, props.message.timestamp.toDate())
								})));
								if (settingsManager.get("timestamps", false)) children.push(external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement("span", {
									className: Fuses_style.Z.dot
								}, "•"), (isBothSettingsApplied || settingsManager.get("timestampsIcons", false)) && external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
									className: Fuses_style.Z["timestamp-tooltip"],
									text: `${props.message.author.username}'s current time`
								}, external_BdApi_React_default().createElement(icons_namespaceObject.Timer, {
									width: 16,
									height: 16
								})), external_BdApi_React_default().createElement(BasicTimer, {
									className: Fuses_style.Z["timestamp-timer"],
									timezone: userTimezone
								})));
								firstRes.props.children = children;
								return firstRes;
							};
						}));
						const Modules = external_PluginApi_namespaceObject.WebpackModules.findAll((m => ~["ChannelMessage", "InboxMessage"].indexOf(m?.type?.displayName)));
						for (const Module of Modules) external_PluginApi_namespaceObject.Patcher.after(Module, "type", ((_, __, ret) => {
							const tree = external_PluginApi_namespaceObject.Utilities.findInReactTree(ret, (m => m?.childrenHeader));
							if (!tree) return;
							tree.childrenHeader.type.type = OriginalMessageTimestamp.default;
						}));
					}
					handleContextMenuPatch() {
						external_PluginApi_namespaceObject.Patcher.after(external_PluginApi_namespaceObject.WebpackModules.find((m => "GuildChannelUserContextMenu" === m.default?.displayName)), "default", ((_this, [props], res) => {
							const user = props.user;
							if (user.bot) return;
							let menugroup = res.props?.children?.props?.children?.[4];
							if (!menugroup) return;
							const timezone = getTimezone(user.id);
							const addTimezoneMenuItem = external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
								id: "fuses-add-user",
								label: "Add timezone",
								action: () => {
									this.openSettingsModal(user.id);
								}
							});
							const timezoneActionsMenuItem = external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
								id: "fuses-get-user",
								label: "Timezone actions"
							}, TimestampActions({
								id: user.id,
								timezone,
								onEditTimezone: this.openSettingsModal,
								onDeleteTimezone
							}));
							const isUserAdded = isExistingUser(user.id);
							menugroup.props.children.unshift(!isUserAdded ? addTimezoneMenuItem : timezoneActionsMenuItem);
						}));
						external_PluginApi_namespaceObject.Patcher.after(external_PluginApi_namespaceObject.WebpackModules.find((m => "DMUserContextMenu" === m.default?.displayName)), "default", ((_this, [props], res) => {
							const user = props.user;
							if (user.bot) return;
							let userActions = res.props?.children?.props?.children?.[5];
							if (!userActions) return;
							const timezone = getTimezone(user.id);
							const addTimezoneMenuItem = external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
								id: "fuses-add-user",
								label: "Add timezone",
								action: () => {
									this.openSettingsModal(user.id);
								}
							});
							const timezoneActionsMenuItem = external_BdApi_React_default().createElement(contextmenu_namespaceObject.MenuItem, {
								id: "fuses-get-user",
								label: "Timezone actions"
							}, TimestampActions({
								id: user.id,
								timezone,
								onEditTimezone: this.openSettingsModal,
								onDeleteTimezone
							}));
							const isUserAdded = isExistingUser(user.id);
							userActions.props.children.unshift(!isUserAdded ? addTimezoneMenuItem : timezoneActionsMenuItem);
						}));
					}
					openSettingsModal(userID) {
						(0, modal_namespaceObject.openModal)((h => external_BdApi_React_default().createElement(modal_namespaceObject.ModalRoot, Fuses_extends({
							size: modal_namespaceObject.ModalSize.MEDIUM,
							className: Fuses_style.Z["add-user-modal"]
						}, h), external_BdApi_React_default().createElement(modal_namespaceObject.ModalHeader, {
							separator: false
						}, external_BdApi_React_default().createElement(components_namespaceObject.Text, {
							size: components_namespaceObject.Text.Sizes.SIZE_14,
							className: "h4-AQvcAz title-3sZWYQ defaultColor-1_ajX0 defaultMarginh4-2vWMG5"
						}, "Add a new user")), external_BdApi_React_default().createElement(modal_namespaceObject.ModalContent, {
							className: "bd-addon-modal-settings"
						}, external_BdApi_React_default().createElement("div", {
							className: Fuses_style.Z["user-add-wrapper"]
						}, external_BdApi_React_default().createElement(UserList, Fuses_extends({
							defaultVals: {
								userID,
								timezone: getTimezone(userID),
								userPicker: {
									existingUsers: isExistingUser(userID)
								}
							},
							isModal: true
						}, h)))))));
					}
					getSettingsPanel() {
						return external_BdApi_React_default().createElement(Settings, null);
					}
					onStop() {
						external_PluginApi_namespaceObject.Patcher.unpatchAll();
						external_StyleLoader_default().remove();
					}
				}
			},
			645: module => {
				module.exports = function(cssWithMappingToString) {
					var list = [];
					list.toString = function toString() {
						return this.map((function(item) {
							var content = cssWithMappingToString(item);
							if (item[2]) return "@media ".concat(item[2], " {").concat(content, "}");
							return content;
						})).join("");
					};
					list.i = function(modules, mediaQuery, dedupe) {
						if ("string" === typeof modules) modules = [
							[null, modules, ""]
						];
						var alreadyImportedModules = {};
						if (dedupe)
							for (var i = 0; i < this.length; i++) {
								var id = this[i][0];
								if (null != id) alreadyImportedModules[id] = true;
							}
						for (var _i = 0; _i < modules.length; _i++) {
							var item = [].concat(modules[_i]);
							if (dedupe && alreadyImportedModules[item[0]]) continue;
							if (mediaQuery)
								if (!item[2]) item[2] = mediaQuery;
								else item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
							list.push(item);
						}
					};
					return list;
				};
			},
			113: module => {
				module.exports = BdApi.React;
			}
		};
		var __webpack_module_cache__ = {};
		function __webpack_require__(moduleId) {
			var cachedModule = __webpack_module_cache__[moduleId];
			if (void 0 !== cachedModule) return cachedModule.exports;
			var module = __webpack_module_cache__[moduleId] = {
				id: moduleId,
				exports: {}
			};
			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
			return module.exports;
		}
		(() => {
			__webpack_require__.n = module => {
				var getter = module && module.__esModule ? () => module["default"] : () => module;
				__webpack_require__.d(getter, {
					a: getter
				});
				return getter;
			};
		})();
		(() => {
			__webpack_require__.d = (exports, definition) => {
				for (var key in definition)
					if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key]
					});
			};
		})();
		(() => {
			__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		})();
		(() => {
			__webpack_require__.r = exports => {
				if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module"
				});
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
			};
		})();
		var __webpack_exports__ = __webpack_require__(642);
		module.exports.LibraryPluginHack = __webpack_exports__;
	})();
	const PluginExports = module.exports.LibraryPluginHack;
	return PluginExports?.__esModule ? PluginExports.default : PluginExports;
}
module.exports = window.hasOwnProperty("ZeresPluginLibrary") ?
	buildPlugin(window.ZeresPluginLibrary.buildPlugin(config)) :
	class {
		getName() {
			return config.info.name;
		}
		getAuthor() {
			return config.info.authors.map(a => a.name).join(", ");
		}
		getDescription() {
			return `${config.info.description}. __**ZeresPluginLibrary was not found! This plugin will not work!**__`;
		}
		getVersion() {
			return config.info.version;
		}
		load() {
			BdApi.showConfirmationModal(
				"Library plugin is needed",
				[`The library plugin needed for ${config.info.name} is missing. Please click Download to install it.`], {
					confirmText: "Download",
					cancelText: "Cancel",
					onConfirm: () => {
						require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
							if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
							await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
						});
					}
				}
			);
		}
		start() {}
		stop() {}
	};
/*@end@*/