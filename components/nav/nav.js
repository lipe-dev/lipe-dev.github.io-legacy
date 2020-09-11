import React from "react";

import NavItem from "./navItem";

export default function Nav({ home }) {
  return (
    <nav className="container mx-auto flex items-center justify-center pb-3">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/">Tech</NavItem>
      <NavItem href="/">Folio</NavItem>
      <NavItem href="/">Blog</NavItem>
      <NavItem href="/">About</NavItem>
      <NavItem href="/">Chat</NavItem>
    </nav>
  );
}
