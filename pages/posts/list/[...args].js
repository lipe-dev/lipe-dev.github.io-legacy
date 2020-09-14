import Link from "next/link";

import Layout from "../../../components/layout/layout";
import { getAllListPaths, getSortedPostsData } from "../../../lib/posts";
import Preview from "../../../components/preview/preview";
import Button from "../../../components/button";
import Pagination from "../../../components/pagination";

const categoryTitles = {
  tech: ["Tech", "Everything that has piqued my interest"],
  folio: ["Folio", "Here is some work I'm proud of"],
  blog: ["Blog", "This is all I've been posting"],
};

export default function PostList({ postsData, category, prevPage, nextPage }) {
  return (
    <Layout>
      <Preview
        posts={postsData}
        round={category === "tech"}
        title={
          categoryTitles[category]
            ? categoryTitles[category][0]
            : categoryTitles.blog[0]
        }
        subtitle={
          categoryTitles[category]
            ? categoryTitles[category][1]
            : categoryTitles.blog[1]
        }
      />
      <Pagination
        baseUrl={`/posts/list/${category}/`}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllListPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filters = {};

  params?.args?.forEach((arg) => {
    if (isNaN(arg)) filters.categories = [arg];
    else filters.page = Number(arg);
  });

  const { postsData, nextPage, prevPage } = await getSortedPostsData(filters);

  return {
    props: {
      postsData,
      nextPage,
      prevPage,
      category: filters?.categories ? filters.categories[0] : null,
    },
  };
}
