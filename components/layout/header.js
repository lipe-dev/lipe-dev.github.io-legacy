import { useState } from "react";
import Link from "next/link";
import cn from "classnames";

import Tagline from "../tagline";
import Nav from "../nav/nav";
import Social from "../social/social";
import { siteName } from "./layout";

export default function Header({ home }) {
  const [expanded, setExpanded] = useState(false);

  // Mobile: home ? "-20.75rem" : "-12.75rem"
  // Desktop: home ? "-21.5rem" : "0"

  return (
    <header
      className={cn(
        "container",
        "min-w-full",
        "bg-orange-400",
        "shadow-straight",
        "mb-1",
        "sticky",
        "z-40",
        home
          ? "top-home-nav-offset sm:top-sm-home-nav-offset md:top-md-home-nav-offset"
          : "top-page-nav-offset sm:top-sm-page-nav-offset md:top-md-page-nav-offset lg:top-lg-page-nav-offset"
      )}
    >
      <div
        className={cn(
          "container",
          "mx-auto",
          { flex: !home },
          { "items-center": !home },
          !home && "flex-wrap lg:flex-no-wrap"
        )}
      >
        <div
          className={cn(
            "flex flex-wrap",
            "items-center",
            "mx-auto",
            home ? "justify-center" : "justify-center lg:justify-start",
            "container",
            "w-full",
            "flex-grow"
          )}
        >
          <Link href="/">
            <a className="w-full md:w-auto">
              <img
                className={cn(
                  "rounded-full",
                  home ? "w-32 sm:w-48" : "w-16",
                  home ? "mx-auto md:mx-10" : "mx-auto md:mx-2",
                  home ? "my-2 sm:my-8" : "my-2",
                  "hover:shadow-diagonal transition duration-200"
                )}
                src="/images/profile.jpg"
                alt={siteName}
              />
            </a>
          </Link>
          <div className={cn("text-gray-900", !home && "flex")}>
            <Link href="/">
              <a>
                <h1
                  className={cn(
                    home ? "text-2xl sm:text-4xl" : "text-2xl",
                    "text-center md:text-left",
                    "font-bold",
                    "my-2",
                    "text-gray-900"
                  )}
                >
                  {siteName}
                </h1>
              </a>
            </Link>
            {home && <Tagline home={home} />}
          </div>
        </div>
        <Social home={home} />
        <Nav home={home} />
      </div>
    </header>
  );
}
