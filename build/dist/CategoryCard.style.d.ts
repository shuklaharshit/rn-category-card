import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
interface Style {
    gradient: ViewStyle;
    imageStyle: ImageStyle;
    textContainer: ViewStyle;
    countContainerStyle: ViewStyle;
    buttonImageStyle: ImageStyle;
}
export declare const _shadowStyle: (shadowColor: any) => ViewStyle;
export declare const _titleTextStyle: (textColor: string) => TextStyle;
export declare const _countTextStyle: (textColor: string) => TextStyle;
export declare const _descriptionTextStyle: (descriptionColor: string) => TextStyle;
export declare const _container: (height: any, width: any, borderRadius: any, backgroundColor: any) => ViewStyle;
declare const _default: Style;
export default _default;
