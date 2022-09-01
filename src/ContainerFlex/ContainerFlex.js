import { forwardRef } from "react";
import PropTypes from "prop-types";
import { css, cx } from "@emotion/css";

const ContainerFlexStyles = (
    width,
    height,
    bgColor,
    flexDirection,
    alignContent,
    alignItems,
    justifyContent,
    gap
) => css`
    width: ${width || "100%"};
    height: ${height || "100%"};
    display: flex;
    background-color: ${bgColor};
    flex-direction: ${flexDirection};
    align-content: ${alignContent};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    gap: ${gap};
`;

const ContainerFlex = forwardRef((props, ref) => {
    const {
        className,
        width,
        height,
        bgColor,
        flexDirection,
        alignContent,
        alignItems,
        justifyContent,
        gap,
        ...otherProps
    } = props;
    return (
        <section
            ref={ref}
            {...otherProps}
            className={cx(
                ContainerFlexStyles(
                    width,
                    height,
                    bgColor,
                    flexDirection,
                    alignContent,
                    alignItems,
                    justifyContent,
                    gap
                ),
                className
            )}
        />
    );
});

ContainerFlex.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
    flexDirection: PropTypes.oneOf([
        "column",
        "column-reverse",
        "row",
        "row-reverse",
    ]),
    alignContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
    ]),
    alignItems: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch",
    ]),
    justifyContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
    ]),
    gap: PropTypes.string,
};

export default ContainerFlex;
