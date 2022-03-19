export interface CommonComponentProps {
    actionType: string;
    url: string;
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    boxShadow: string;
    opacity: string;
    position: string;
    left: string;
    top: string;
    right: string;
}
export declare const commonDefaultProps: CommonComponentProps;
export interface TextComponentProps extends CommonComponentProps {
    text: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    lineHeight: string;
    textAlign: string;
    color: string;
    backgroundColor: string;
}
export interface ImageComponentProps extends CommonComponentProps {
    src: string;
}
export declare type AllComponentProps = TextComponentProps & ImageComponentProps;
export declare const textDefaultProps: TextComponentProps;
export declare const imageDefaultProps: ImageComponentProps;
export declare const textStylePropNames: string[];
export declare const imageStylePropsNames: string[];
export declare const transformToComponentProps: (props: TextComponentProps) => {
    text: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: StringConstructor;
        default: string;
    };
    fontFamily: {
        type: StringConstructor;
        default: string;
    };
    fontWeight: {
        type: StringConstructor;
        default: string;
    };
    fontStyle: {
        type: StringConstructor;
        default: string;
    };
    textDecoration: {
        type: StringConstructor;
        default: string;
    };
    lineHeight: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    actionType: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    paddingLeft: {
        type: StringConstructor;
        default: string;
    };
    paddingRight: {
        type: StringConstructor;
        default: string;
    };
    paddingTop: {
        type: StringConstructor;
        default: string;
    };
    paddingBottom: {
        type: StringConstructor;
        default: string;
    };
    borderStyle: {
        type: StringConstructor;
        default: string;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    borderWidth: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    boxShadow: {
        type: StringConstructor;
        default: string;
    };
    opacity: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    left: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
};
