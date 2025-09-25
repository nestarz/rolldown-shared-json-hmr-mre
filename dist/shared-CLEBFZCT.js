import "node:module";

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
	return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (all) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __toDynamicImportESM = (isNodeMode) => (mod) => __toESM(mod.default, isNodeMode);

//#endregion
//#region src/data.json
var data_exports = /* @__PURE__ */ __export({ default: () => data_default });
const data_hot = __rolldown_runtime__.createModuleHotContext("src/data.json");
__rolldown_runtime__.registerModule("src/data.json", { exports: data_exports });
var data_default = {};

//#endregion
//#region src/shared.js
var shared_exports = /* @__PURE__ */ __export({ value: () => value });
var shared_hot, value;
var init_shared = __esm({ "src/shared.js": (() => {
	shared_hot = __rolldown_runtime__.createModuleHotContext("src/shared.js");
	__rolldown_runtime__.registerModule("src/shared.js", { exports: shared_exports });
	value = data_default.message;
}) });

//#endregion
export { __esm, __export, __reExport, __toCommonJS, __toDynamicImportESM, __toESM, init_shared, shared_exports, value };