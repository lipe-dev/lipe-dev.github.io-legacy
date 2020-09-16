import Social from "../social/social";
import Nav from "../nav/nav";

export default function Footer() {
  return (
    <footer className="container max-w-full bg-blue-900 text-gray-200 text-center">
      <div className="container mx-auto flex mx-16 py-8 flex-wrap">
        <div className="w-full sm:w-1/2 text-xl mb-8 sm:mb-0">
          <blockquote className="border-l-4 border-gray-200 px-3 italic text-left ml-4 text-center sm:text-left">
            Is bottom navigation still a thing? - Me
          </blockquote>
          <Nav bottom />
        </div>
        <div className="w-full sm:w-1/2 px-4">
          <h1 className="text-4xl">Lipe.Dev</h1>
          <h2 className="text-2xl mt-2">Felipe Pereira</h2>
          <a className="text-xl underline" href="mailto:fe@lipe.dev">
            fe@lipe.dev
          </a>
          <hr className="my-4" />
          <p className="text-xl">
            This website is open source. <br />
            Feel free to steal it from Github.
          </p>
          <hr className="my-4" />
          <Social bottom />
        </div>
      </div>
    </footer>
  );
}
