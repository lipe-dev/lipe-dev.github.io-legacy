import cn from "classnames";
import PropTypes from "prop-types";

export default function Heading({ subtitle, children, left, ...props }) {
  return (
    <h1
      className={cn(
        "text-3xl sm:text-5xl",
        "my-4 sm:my-8",
        "text-gray-900",
        left ? "text-left" : "text-center"
      )}
      {...props}
    >
      {children}
      <span
        role="doc-subtitle"
        className={cn(
          "block",
          "italic",
          "text-lg sm:text-2xl text-gray-700 font-normal",
          left ? "text-left" : "text-center"
        )}
      >
        {subtitle}
      </span>
    </h1>
  );
}

Heading.propTypes = {
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
  left: PropTypes.bool,
};
