import cn from "classnames";

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
      <summary
        role="doc-subtitle"
        className={cn(
          "italic",
          "text-lg sm:text-2xl text-gray-700 font-normal",
          left ? "text-left" : "text-center"
        )}
      >
        {subtitle}
      </summary>
    </h1>
  );
}