import React from 'react';
import { StyleProp, ViewStyle, ImageStyle } from 'react-native';
declare type CustomViewStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
declare type CustomImageStyleProp = StyleProp<ImageStyle> | Array<StyleProp<ImageStyle>>;
export interface ISource {
    source: string | {
        uri: string;
    };
}
interface IProps {
    count?: number;
    width?: number;
    height?: number;
    titleText?: string;
    titleColor?: string;
    shadowColor?: string;
    borderRadius?: number;
    gradientColors?: string;
    descriptionText?: string;
    descriptionColor?: string;
    backgroundColor?: string;
    disableRightButton?: boolean;
    imageSource?: ISource;
    rightButtonImageSource?: ISource;
    imageStyle?: CustomViewStyleProp;
    shadowStyle?: CustomViewStyleProp;
    buttonImageStyle?: CustomImageStyleProp;
    ImageComponent?: any;
    customImageComponent?: React.ReactChild;
    customCountTextComponent?: React.ReactChild;
    customTitleTextComponent?: React.ReactChild;
    customDescriptionComponent?: React.ReactChild;
    onPress?: () => void;
}
interface IState {
}
export default class CategoryCard extends React.Component<IProps, IState> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
