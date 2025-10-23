import {ClassAttributes, HTMLAttributes} from "react";

export const Heading3 = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => {
    const idText = props.children ? (props.children as string).replace(/ /g, "_").toLowerCase() : undefined;
    return <h3 id={idText} {...props}>{props.children}</h3>;
};
