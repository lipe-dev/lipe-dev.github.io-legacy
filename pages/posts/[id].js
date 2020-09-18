import { useEffect } from "react";

import Layout, { siteName, siteTitle } from "../../components/layout/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Lipe.dev | {postData.title}</title>
        <meta property="og:image" content={postData.banner} />
        <meta name="og:title" content={postData.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="-mt-1 h-banner relative">
        <img
          className="object-cover h-banner w-full"
          src={postData.banner}
          alt={postData.title}
        />
        <div className="absolute bottom-0 mx-auto w-full bg-blue-900 bg-opacity-75 p-4">
          <div className="container relative mx-auto">
            <h1 className="container text-5xl text-gray-300 text-center">
              {postData.title}
            </h1>
            <p className="text-center text-gray-500 italic -mt-2">
              Posted on <Date dateString={postData.date} />
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-no-wrap container mx-auto">
        <div className="w-full md:w-1/4 p-4 text-center md:text-left mt-8 md:sticky self-start top-24">
          <div
            className="prose prose-xl sm:prose-sm text-left"
            dangerouslySetInnerHTML={{ __html: postData.tocHtml }}
          />
          <img
            src={postData.image}
            alt={postData.excerpt}
            className="transform object-contain w-64 h-auto transition py-4 inline-block"
          />
        </div>
        <div className="w-full md:w-3/4 p-4 pt-10">
          <article className="min-w-full prose prose-xl ml-auto ">
            <blockquote
              role="doc-subtitle"
              className="text-gray-600 text-2xl mt-4 block"
            >
              {postData.excerpt}
            </blockquote>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
