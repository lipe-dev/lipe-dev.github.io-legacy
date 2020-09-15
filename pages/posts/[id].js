import Layout from "../../components/layout/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Heading from "../../components/heading";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="mt-1 h-100 relative">
        <img
          className="object-cover h-100 w-full"
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
      <div className="flex container mx-auto">
        <div className="w-1/4 p-4 text-right mt-8 sticky self-start top-24">
          <div className="text-gray-500 italic">
            Posted on <Date dateString={postData.date} />
          </div>
          <h1 className="text-4xl">{postData.title}</h1>

          <summary role="doc-subtitle" className="text-gray-600 text-xl mt-4">
            {postData.excerpt}
          </summary>

          <img
            src={postData.image}
            alt={postData.excerpt}
            className="transform object-contain w-64 h-auto transition py-8 inline-block"
          />
        </div>
        <div className="w-3/4 p-4 pt-10">
          <article className="min-w-full prose prose-xl ml-auto ">
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
