import cn from "classnames";

import PropTypes from "prop-types";

import NavItem from "./navItem";

export default function Nav({ home, bottom }) {
  return (
    <nav
      className={cn(
        "container",
        !bottom && "h-20",
        !bottom && "mx-auto",
        "flex",
        bottom ? "items-start" : "items-center",
        "justify-center",
        home && "my-4",
        bottom ? "text-gray-200" : "text-gray-800",
        { "mt-8": bottom },
        { "sm:flex-row": !bottom && !home },
        { "flex-col": bottom },
        "flex-grow"
      )}
    >
      <NavItem href="/" bottom={bottom}>
        Home
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

Nav.propTypes = {
  bottom: PropTypes.bool,
  home: PropTypes.bool,
};
