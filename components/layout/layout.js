import Head from "next/head";

import cn from "classnames";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";

export const siteName = "Felipe Pereira";
export const siteTitle = "Lipe.dev";

export default function Layout({ children, home }) {
  return (
    <div className="container min-w-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Felipe &#34;lipe-dev&#34; Pereira&#39;s home on the internet."
        />
        <meta
          property="og:image:secure_url"
          content="/images/posts/lipe-dev.svg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Lipe.dev</title>
      </Head>
      {home && (
        <a href="https://github.com/lipe-dev/lipe-dev.github.io" className="absolute top-0 z-50">
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
      )}
      <Header home={home} />
      <main className={cn("container", "mx-auto", "min-w-full")}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  home: PropTypes.bool,
};
