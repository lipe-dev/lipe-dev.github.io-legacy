import Head from "next/head";
import Link from "next/link";
import cn from "classnames";

import Header from "./header";
import Footer from "./footer";

export const siteName = "Felipe Pereira";
export const siteTitle = "Lipe.dev";
export const siteTagline = "I'm the dev guy";

export default function Layout({ children, home }) {
  return (
    <div className="container min-w-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Lipe.dev</title>
      </Head>
      <a href="https://github.com/you" className="fixed top-0 z-20">
        <img
          loading="lazy"
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_left_orange_ff7600.png?resize=149%2C149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
      <Header home={home} />
      <main
        className={cn("container", "mx-auto", "min-w-full", !home && "pt-20")}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
