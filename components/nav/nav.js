import cn from "classnames";

import NavItem from "./navItem";

export default function Nav({ home, bottom }) {
  return (
    <nav
      className={cn(
        "container",
        !bottom && "mx-auto",
        "flex",
        bottom ? "items-start" : "items-center",
        "justify-center",
        "my-4",
        bottom ? "text-gray-200" : "text-gray-800",
        { "mt-8": bottom },
        { "flex-col": bottom },
        "flex-grow"
      )}
    >
      <NavItem href="/" bottom={bottom}>
        Home
      </NavItem>
      <NavItem href="/posts/list/tech/1" bottom={bottom}>
        Tech
      </NavItem>
      <NavItem href="/posts/list/folio/1" bottom={bottom}>
        Folio
      </NavItem>
      <NavItem href="/posts/list/1" bottom={bottom}>
        Blog
      </NavItem>
      <NavItem href="/cv" bottom={bottom}>
        CV
      </NavItem>
      <NavItem href="/chat" bottom={bottom}>
        Chat
      </NavItem>
    </nav>
  );
}
