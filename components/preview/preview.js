import Link from "next/link";

import PostPreview from "./postPreview";
import cn from "classnames";
import Button from "../button";

export default function Preview({
  title,
  home,
  posts,
  round,
  morePosts,
  linkTo,
}) {
  return (
    <section className={cn({ "mt-16": home }, { "bg-gray-200": round })}>
      <div
        className={cn({ "mb-16": home }, "container", "mx-auto", {
          "pt-4 pb-8": round,
        })}
      >
        <h1 className="text-center text-5xl my-8">{title}</h1>

        <div
          className={cn("flex", "flex-wrap", "justify-center", {
            "mb-8": !round,
          })}
        >
          {posts?.map((post) => (
            <PostPreview key={post.id} round={round} post={post} />
          ))}
        </div>

        {morePosts && (
          <div className="text-center">
            <Button primary Component={Link} href={linkTo}>
              {morePosts}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
