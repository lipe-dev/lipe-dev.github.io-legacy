import cn from "classnames";

import Tagline from "../tagline";
import Nav from "../nav/nav";
import Social from "../social/social";
import { siteName } from "./layout";

export default function Header({ home }) {
  return (
    <header
      className={cn(
        "container",
        "min-w-full",
        "bg-orange-400",
        "shadow-straight",
        "mb-1",
        { flex: !home },
        { "items-center": !home },
        { "py-2": home }
      )}
    >
      <div className="flex items-center mx-auto justify-center container flex-shrink-0">
        <img
          className={cn(
            "rounded-full",
            home ? "w-48" : "w-16",
            "mx-10",
            home ? "my-8" : "my-4"
          )}
          src="/images/profile.jpg"
          alt={siteName}
        />
        <div className={cn("text-gray-900", !home && "flex")}>
          <h1
            className={cn(home ? "text-4xl" : "text-2xl", "font-bold", "my-2")}
          >
            {siteName}
          </h1>
          <Tagline home={home} />
        </div>
      </div>
      <Nav home={home} />
      <Social />
    </header>
  );
}
