"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._container = exports._descriptionTextStyle = exports._countTextStyle = exports._titleTextStyle = exports._shadowStyle = void 0;
const react_native_1 = require("react-native");
const _shadowStyle = (shadowColor) => ({
    shadowColor,
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: {
        width: 0,
        height: 5,
    },
});
exports._shadowStyle = _shadowStyle;
const _titleTextStyle = (textColor) => ({
    fontWeight: 'bold',
    fontSize: 15,
    color: textColor,
});
exports._titleTextStyle = _titleTextStyle;
const _countTextStyle = (textColor) => ({
    paddingTop: 4,
    fontSize: 15,
    color: textColor,
});
exports._countTextStyle = _countTextStyle;
const _descriptionTextStyle = (descriptionColor) => ({
    paddingTop: 4,
    fontSize: 13,
    color: descriptionColor,
});
exports._descriptionTextStyle = _descriptionTextStyle;
const _container = (height, width, borderRadius, backgroundColor) => ({
    height,
    width,
    borderRadius,
    backgroundColor,
    paddingLeft: 20,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
});
exports._container = _container;
exports.default = react_native_1.StyleSheet.create({
    gradient: {
        height: 55,
        width: 55,
        opacity: 0.5,
        marginRight: 20,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 30,
        height: 30,
    },
    textContainer: {
        marginRight: 'auto',
    },
    countContainerStyle: {
        marginLeft: 'auto',
        marginRight: 12,
    },
    buttonImageStyle: {
        width: 12,
        height: 12,
    },
});
//# sourceMappingURL=CategoryCard.style.js.map