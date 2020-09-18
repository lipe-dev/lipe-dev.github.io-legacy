import "../styles/index.css";
import hljs from "highlight.js/lib/core";
import yaml from "highlight.js/lib/languages/yaml";
import diff from "highlight.js/lib/languages/diff";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("diff", diff);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
