(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.kodo = factory());
}(this, (function () { 'use strict';

function logAge(age) {
	console.log(age);
}

var main$$1 = function () {
	console.log(logAge(18));
};

return main$$1;

})));
//# sourceMappingURL=bundle.js.map
