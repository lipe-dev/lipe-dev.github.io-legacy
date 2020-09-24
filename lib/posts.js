import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import remarkToc from "remark-toc";
import remarkSlug from "remark-slug";
import html from "remark-html";
import autolinkHeadings from "remark-autolink-headings";
import remarkHighlight from "remark-highlight.js";

const pageSize = 8;

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData({ categories, page = 1, count }) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  let postsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Filter posts by categories
  if (categories) {
    postsData = postsData.filter((post) => {
      return categories.some((category) => post.categories.includes(category));
    });
  }

  // Sort posts by date
  postsData = postsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  // Calculate if there are next/prev pages
  let nextPage = null;
  let prevPage = null;

  if (page > 1) {
    // If the offset is greater than 1, there is a prev page
    prevPage = page - 1;
  }
  if (page * pageSize < postsData.length) {
    nextPage = page + 1;
  }
  // Paginate
  postsData = postsData.slice((page - 1) * pageSize, page * pageSize);

  // Limit by count
  if (count) {
    postsData.splice(count);
  }

  return { postsData, nextPage, prevPage };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getAllListPaths() {
  const fileNames = fs.readdirSync(postsDirectory);
  const categoriesCount = {};

  fileNames.forEach((fileName) => {
    // Remove ".md" from file name to get id

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    matterResult.data.categories.forEach((category) => {
      if (categoriesCount[category]) categoriesCount[category]++;
      else categoriesCount[category] = 1;
    });
  });

  // categoriesCount now has a mapping of how many posts are in each category
  // in this use case, there will be only listings for a single category

  const paths = [];

  Object.keys(categoriesCount).forEach((category) => {
    // generate all possible list paths with page number from 1 to max possible
    paths.push({
      params: {
        args: [category],
      },
    });
    for (
      let page = 1;
      (page - 1) * pageSize <= categoriesCount[category];
      page++
    ) {
      paths.push({
        params: {
          args: [category, `${page}`],
        },
      });
    }
  });

  // additionally, add a category-less paginated listing
  for (let page = 1; (page - 1) * pageSize <= fileNames.length; page++) {
    paths.push({
      params: {
        args: [`${page}`],
      },
    });
  }

  return paths;
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       args: ['tech', 0, 9]
  //     }
  //   },
  //   {
  //     params: {
  //       args: ['tech', 10, 19]
  //     }
  //   },
  //   {
  //     params: {
  //       args: ['folio', 0, 10]
  //     }
  //   }
  // ]
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedDocument = await remark()
    .use(remarkSlug)
    .use(remarkToc)
    .use(autolinkHeadings)
    .process(matterResult.content);

  const tocStart = processedDocument.contents.indexOf("##");
  const tocEnd = processedDocument.contents.indexOf("##", tocStart + 1);

  const tocMD = processedDocument.contents.substring(tocStart, tocEnd);
  const contentMD = processedDocument.contents.substring(tocEnd);

  const processedToc = await remark().use(html).process(tocMD);
  const processedContent = await remark()
    .use(remarkSlug)
    .use(autolinkHeadings)
    .use(remarkHighlight, { include: ["yaml", "diff"] })
    .use(html)
    .process(contentMD);

  const contentHtml = processedContent.toString();
  const tocHtml = processedToc.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    tocHtml,
    ...matterResult.data,
  };
}
