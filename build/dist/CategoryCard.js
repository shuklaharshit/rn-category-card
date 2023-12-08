"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_androw_1 = tslib_1.__importDefault(require("react-native-androw"));
const react_native_linear_gradient_1 = tslib_1.__importDefault(require("react-native-linear-gradient"));
const react_native_bounceable_1 = tslib_1.__importDefault(require("@freakycoder/react-native-bounceable"));
const CategoryCard_style_1 = tslib_1.__importStar(require("./CategoryCard.style"));
const windowWidth = react_native_1.Dimensions.get('window').width;
class CategoryCard extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { count, width = windowWidth * 0.8, height, borderRadius = 16, titleText, titleColor = '#4B4B4B', imageStyle, shadowColor = '#757575', shadowStyle, imageSource, gradientColors = ['#9CF4DF', '#30C9E8', '#107C91'], descriptionText, descriptionColor = '#B4B4B4', backgroundColor = '#fff', buttonImageStyle, disableRightButton = false, customImageComponent, ImageComponent = react_native_1.Image, rightButtonImageSource = require('../asset/next.png'), customCountTextComponent, customTitleTextComponent, customDescriptionComponent, onPress, } = this.props;
        const renderLeftImageContainer = () => imageSource && (<react_native_linear_gradient_1.default start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} colors={gradientColors} style={CategoryCard_style_1.default.gradient}>
          {customImageComponent || (<ImageComponent style={imageStyle || CategoryCard_style_1.default.imageStyle} source={imageSource}/>)}
        </react_native_linear_gradient_1.default>);
        const renderTextContainer = () => (<react_native_1.View style={CategoryCard_style_1.default.textContainer}>
        {customTitleTextComponent || (<react_native_1.Text style={(0, CategoryCard_style_1._titleTextStyle)(titleColor)}>{titleText}</react_native_1.Text>)}
        {descriptionText
                ? customDescriptionComponent || (<react_native_1.Text style={(0, CategoryCard_style_1._descriptionTextStyle)(descriptionColor)}>
                {descriptionText}
              </react_native_1.Text>)
                : null}
      </react_native_1.View>);
        const renderCountTextContainer = () => count
            ? customCountTextComponent || (<react_native_1.View style={CategoryCard_style_1.default.countContainerStyle}>
              <react_native_1.Text style={(0, CategoryCard_style_1._countTextStyle)(descriptionColor)}>{count}</react_native_1.Text>
            </react_native_1.View>)
            : null;
        const renderRightImageContainer = () => !disableRightButton && (<react_native_1.Image source={rightButtonImageSource} style={buttonImageStyle || CategoryCard_style_1.default.buttonImageStyle}/>);
        return (<react_native_bounceable_1.default onPress={onPress}>
        <react_native_androw_1.default style={shadowStyle || (0, CategoryCard_style_1._shadowStyle)(shadowColor)}>
          <react_native_1.View style={(0, CategoryCard_style_1._container)(height, width, borderRadius, backgroundColor)}>
            {renderLeftImageContainer()}
            {renderTextContainer()}
            {renderCountTextContainer()}
            {renderRightImageContainer()}
          </react_native_1.View>
        </react_native_androw_1.default>
      </react_native_bounceable_1.default>);
    }
}
exports.default = CategoryCard;
//# sourceMappingURL=CategoryCard.js.map