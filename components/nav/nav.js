import cn from "classnames";

import NavItem from "./navItem";

export default function Nav({ home, bottom }) {
  return (
    <nav
      className={cn(
        "container",
        "mx-auto",
        "flex",
        bottom ? "items-start" : "items-center",
        "justify-center",
        "pb-3",
        bottom ? "text-gray-200" : "text-gray-700",
        { "mt-8": bottom },
        { "flex-col": bottom }
      )}
    >
      <NavItem href="/" bottom={bottom}>
        Home
      </NavItem>
      <NavItem href="/" bottom={bottom}>
        Tech
      </NavItem>
      <NavItem href="/" bottom={bottom}>
        Folio
      </NavItem>
      <NavItem href="/" bottom={bottom}>
        Blog
      </NavItem>
      <NavItem href="/" bottom={bottom}>
        About
      </NavItem>
      <NavItem href="/" bottom={bottom}>
        Chat
      </NavItem>
    </nav>
  );
}
