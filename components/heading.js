import cn from "classnames";

export default function Heading({ subtitle, children, left, ...props }) {
  return (
    <h1
      className={cn(
        "text-5xl my-8 text-gray-900",
        left ? "text-left" : "text-center"
      )}
      {...props}
    >
      {children}
      <summary
        role="doc-subtitle"
        className={cn(
          "italic text-2xl text-gray-700 font-normal",
          left ? "text-left" : "text-center"
        )}
      >
        {subtitle}
      </summary>
    </h1>
  );
}
