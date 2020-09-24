import Link from "next/link";
import { useRouter } from "next/router";

import cn from "classnames";
import PropTypes from "prop-types";

export default function NavItem({ href, children, bottom }) {
  const router = useRouter();
  const active = router.asPath.includes(href) && href !== "/";

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
          { "scale-105": !bottom && active },
          bottom ? "hover:bg-blue-800" : "hover:bg-orange-300",
          bottom && active && "bg-blue-800",
          !bottom && active && "bg-orange-300",
          "hover:shadow-diagonal",
          active && "shadow-diagonal",
          "w-full",
          !bottom && "sm:w-auto",
          "text-center",
          { "text-center sm:text-left": bottom },
          { "transform hover:translate-x-2": bottom },
          { "mt-1": bottom },
          "text-md sm:text-xl"
        )}
      >
        {children}
      </a>
    </Link>
  );
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  bottom: PropTypes.bool,
};
