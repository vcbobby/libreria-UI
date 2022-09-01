import { forwardRef } from "react";
import PropTypes from "prop-types";
import { css, cx } from "@emotion/css";

const MediaImgStyles = (width, height, borderRadius) => css`
    width: ${width || "100px"};
    height: ${height || "100px"};
    border-radius: ${borderRadius || "8px"};
`;

const MediaImg = forwardRef((props, ref) => {
    const { className, width, height, src, alt, borderRadius, ...otherProps } =
        props;
    return (
        <img
            ref={ref}
            src={src}
            alt={alt}
            {...otherProps}
            className={cx(
                MediaImgStyles(width, height, borderRadius),
                className
            )}
        />
    );
});

MediaImg.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    borderRadius: PropTypes.string,
};

export default MediaImg;
