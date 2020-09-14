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
        { "py-2": home },
        !home && "fixed z-10"
      )}
    >
      <div
        className={cn(
          "container",
          "mx-auto",
          { flex: !home },
          { "items-center": !home }
        )}
      >
        <div
          className={cn(
            "flex",
            "items-center",
            "mx-auto",
            home ? "justify-center" : "justify-start",
            "container",
            "flex-grow"
          )}
        >
          <img
            className={cn(
              "rounded-full",
              home ? "w-48" : "w-16",
              home ? "mx-10" : "mx-2",
              home ? "my-8" : "my-2"
            )}
            src="/images/profile.jpg"
            alt={siteName}
          />
          <div className={cn("text-gray-900", !home && "flex")}>
            <h1
              className={cn(
                home ? "text-4xl" : "text-2xl",
                "font-bold",
                "my-2"
              )}
            >
              {siteName}
            </h1>
            {home && <Tagline home={home} />}
          </div>
        </div>
        <Nav home={home} />
        <Social home={home} />
      </div>
    </header>
  );
}
