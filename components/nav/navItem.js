import Link from "next/link";
import cn from "classnames";

export default function NavItem({ href, children, bottom }) {
  return (
    <Link href={href}>
      <a
        className={cn(
          "px-3",
          bottom ? "py-1" : "py-3",
          "mx-1",
          "transition",
          "duration-200",
          "transform",
          { "hover:scale-105": !bottom },
          bottom ? "hover:bg-blue-800" : "hover:bg-orange-300",
          "hover:shadow-diagonal",
          { "w-full": bottom },
          { "text-left": bottom },
          { "transform hover:translate-x-2": bottom },
          { "mt-1": bottom }
        )}
      >
        {children}
      </a>
    </Link>
  );
}
