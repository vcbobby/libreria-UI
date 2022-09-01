import { createElement, forwardRef } from "react";
import PropTypes from "prop-types";
import { css, cx } from "@emotion/css";

const TextStyles = (fontWeight, fontSize, lineHeight) => css`
    font-weight: ${fontWeight || 700};
    font-size: ${fontSize || "1.6rem"};
    line-height: ${lineHeight || "25px"};
`;

const Text = forwardRef((props, ref) => {
    const {
        component,
        fontWeight,
        lineHeight,
        fontSize,
        className,
        ...otherProps
    } = props;
    const element = createElement(component, {
        ...otherProps,
        ref,
        className: cx(TextStyles(fontWeight, lineHeight, fontSize), className),
    });
    return element;
});

Text.propTypes = {
    component: PropTypes.oneOf([
        "p",
        "span",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "textarea",
    ]),
    fontWeight: PropTypes.number,
    fontSize: PropTypes.string,
    className: PropTypes.string,
    lineHeight: PropTypes.string,
};

Text.defaultProps = {
    component: "p",
};

export default Text;
