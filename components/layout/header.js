import Tagline from "../tagline";
import Link from "next/link";
import Nav from "../nav/nav";
import Social from "../social/social";
import { siteName } from "./layout";

export default function Header({ home }) {
  return (
    <header className="container min-w-full bg-orange-400 shadow-straight">
      {home ? (
        <div className="flex items-center mx-auto justify-center container">
          <img
            className="rounded-full w-48 mx-10 my-8"
            src="/images/profile.jpg"
            alt={siteName}
          />
          <div className="w-1/4">
            <h1 className="text-4xl font-bold my-2">{siteName}</h1>
            <Tagline />
          </div>
        </div>
      ) : (
        <>
          <Link href="/">
            <a>
              <img src="/images/profile.jpg" alt={name} />
            </a>
          </Link>
          <h2>
            <Link href="/">
              <a>{name}</a>
            </Link>
          </h2>
        </>
      )}
      <Nav home={home} />
      <Social />
    </header>
  );
}
