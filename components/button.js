import cn from "classnames";
import Link from "next/link";

export default function Button({ Component, children, primary, ...props }) {
  const classNames = cn(
    "box-border",
    "inline-block",
    "p-3 sm:p-4",
    "mx-auto",
    "mt-4",
    "mb-4",
    "font-bold",
    "text-sm sm:text-md",
    "text-gray-200",
    "uppercase",
    "transition",
    "duration-200",
    "transform",
    primary ? "bg-orange-500" : "bg-blue-700",
    "hover:shadow-diagonal",
    "hover:scale-105"
  );

  if (Component === Link) {
    return (
      <Component {...props}>
        <a className={classNames}>{children}</a>
      </Component>
    );
  }
  if (Component) {
    return <Component {...props}>{children}</Component>;
  }
  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
}
