"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
function Spoiler(props) {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: {
            position: 'relative',
            width: props.width || 'fit-content',
            height: props.height || 'fit-content'
        } }, { children: [(0, jsx_runtime_1.jsx)("div", { style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgb(0, 0, 0, 0.01)',
                    backgroundSize: '1.5rem 1.5rem',
                    backgroundImage: "url(".concat(require('../assets/gif/stars_spoiler.gif'), ")")
                } }), (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                    width: '100%',
                    height: '100%',
                    visibility: 'hidden'
                } }, { children: props.children }))] })));
}
exports.default = Spoiler;
