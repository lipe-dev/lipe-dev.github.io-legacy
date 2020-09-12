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
        morePosts="More from the blog"
      />
      <Preview
        title="Tech I recently fell in love with..."
        posts={techPostData}
        round
        morePosts="See all tech I've ever loved!"
      />
      <Preview
        title="My latest projects"
        posts={folioPostData}
        morePosts="See my full folio here"
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const techPostData = getSortedPostsData({
    filters: { categories: ["tech"] },
    limit: 4,
  });
  const folioPostData = getSortedPostsData({
    filters: { categories: ["folio"] },
    limit: 3,
  });
  const blogPostData = getSortedPostsData({
    limit: 3,
  });
  return {
    props: {
      techPostData,
      folioPostData,
      blogPostData,
    },
  };
}
