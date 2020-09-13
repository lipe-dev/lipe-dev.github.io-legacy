import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import { getSortedPostsData } from "../lib/posts";
import Preview from "../components/preview/preview";

export default function Home({ techPostData, folioPostData, blogPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} | Home</title>
      </Head>
      <Preview
        title="What's new around here"
        posts={blogPostData}
        morePosts="See all my posts"
        linkTo="/posts/list/1"
        home
      />
      <Preview
        title="Tech I recently fell in love with..."
        posts={techPostData}
        round
        morePosts="Look at all tech I've ever loved!"
        linkTo="/posts/list/tech/1"
        home
      />
      <Preview
        title="My latest projects"
        posts={folioPostData}
        morePosts="Here is my full folio"
        linkTo="/posts/list/folio/1"
        home
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const { postsData: techPostData } = getSortedPostsData({
    categories: ["tech"],
    count: 4,
  });
  const { postsData: folioPostData } = getSortedPostsData({
    categories: ["folio"],
    count: 4,
  });
  const { postsData: blogPostData } = getSortedPostsData({
    count: 4,
  });
  return {
    props: {
      techPostData,
      folioPostData,
      blogPostData,
    },
  };
}
