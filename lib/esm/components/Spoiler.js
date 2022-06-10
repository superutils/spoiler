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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Spoiler(props) {
    return (_jsxs("div", __assign({ style: {
            position: 'relative',
            width: props.width || 'fit-content',
            height: props.height || 'fit-content'
        } }, { children: [_jsx("div", { style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgb(0, 0, 0, 0.01)',
                    backgroundSize: '1.5rem 1.5rem',
                    backgroundImage: "url(".concat(require('../assets/gif/stars_spoiler.gif'), ")")
                } }), _jsx("div", __assign({ style: {
                    width: '100%',
                    height: '100%',
                    visibility: 'hidden'
                } }, { children: props.children }))] })));
}
