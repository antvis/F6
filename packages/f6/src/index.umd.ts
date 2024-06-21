// @ts-nocheck
import F6 from "./index";

// @ts-ignore：兼容旧版本H5导出,不用考虑其他环境，其他环境会使用其他规范
var getGlobal = function () {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
};

const root = getGlobal();
// umd 部分定义
if (typeof exports === "object" && typeof module === "object") {
} else if (typeof define === "function" && define.amd) {
} else if (typeof exports === "object") {
} else {
  Object.defineProperties(root, {
    f6: {
      get: function () {
        console.warn("废弃的特性: f6, 请使用 F6 代替 f6");
        return F6;
      },
    },
  });
}

export default F6;
