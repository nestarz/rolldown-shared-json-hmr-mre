import { __esm, __export, __reExport, __toCommonJS, __toDynamicImportESM, __toESM, init_shared, shared_exports } from "./shared-CLEBFZCT.js";
import "ws";

//#region rolldown:hmr
var rolldown_hmr_exports = /* @__PURE__ */ __export({ DevRuntime: () => DevRuntime });
var Module, DevRuntime;
var init_rolldown_hmr = __esm({ "rolldown:hmr": (() => {
	Module = class {
		/**
		* @type {{ exports: any }}
		*/
		exportsHolder = { exports: null };
		/**
		* @type {string}
		*/
		id;
		/**
		* @param {string} id
		*/
		constructor(id) {
			this.id = id;
		}
		get exports() {
			return this.exportsHolder.exports;
		}
	};
	DevRuntime = class {
		/**
		* @type {Record<string, Module>}
		*/
		modules = {};
		/**
		* @param {string} _moduleId
		*/
		createModuleHotContext(_moduleId) {
			throw new Error("createModuleHotContext should be implemented");
		}
		/**
		* @param {string[]} _boundaries
		*/
		applyUpdates(_boundaries) {
			throw new Error("applyUpdates should be implemented");
		}
		/**
		* @param {string} id
		* @param {{ exports: any }} exportsHolder
		*/
		registerModule(id, exportsHolder) {
			const module = new Module(id);
			module.exportsHolder = exportsHolder;
			this.modules[id] = module;
		}
		/**
		* @param {string} id
		*/
		loadExports(id) {
			const module = this.modules[id];
			if (module) {
				return module.exportsHolder.exports;
			} else {
				console.warn(`Module ${id} not found`);
				return {};
			}
		}
		/**
		* __esmMin
		*
		* @type {<T>(fn: any, res: T) => () => T}
		* @internal
		*/
		createEsmInitializer = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
		/**
		* __commonJSMin
		*
		* @type {<T extends { exports: any }>(cb: any, mod: { exports: any }) => () => T}
		* @internal
		*/
		createCjsInitializer = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
		/** @internal */
		__toESM = __toESM;
		/** @internal */
		__toCommonJS = __toCommonJS;
		/** @internal */
		__export = __export;
		/** @internal */
		__toDynamicImportESM = __toDynamicImportESM;
		/** @internal */
		__reExport = __reExport;
	};
	globalThis.__rolldown_runtime__ = console.log;
}) });

//#endregion
//#region src/main.js
var main_exports = {};
var main_hot, i1, i2;
var init_main = __esm({ "src/main.js": (async () => {
	await init_rolldown_hmr();
	await init_shared();
	main_hot = __rolldown_runtime__.createModuleHotContext("src/main.js");
	__rolldown_runtime__.registerModule("src/main.js", { exports: main_exports });
	console.log(shared_exports);
	i1 = await import("./dynamic-1-Ct78xnIH.js");
	i2 = await import("./dynamic-2-CtRrG9bC.js");
	console.log(i1, i2);
}) });

//#endregion
await init_main();
export {  };