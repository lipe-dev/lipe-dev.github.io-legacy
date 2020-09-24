import Link from "next/link";

import cn from "classnames";
import PropTypes from "prop-types";

import PostPreview from "./postPreview";
import Button from "components/button";
import Heading from "components/heading";
import CustomPropTypes from "propTypes";

export default function Preview({
  title,
  home,
  posts,
  round,
  morePosts,
  linkTo,
  subtitle,
}) {
  return (
    <section className={cn({ "mt-16": home }, { "bg-gray-200": round })}>
      <div
        className={cn(
          { "mb-16": home },
          "container",
          "mx-auto",
          { "pt-4": !home },
          { "pt-4": home && round },
          {
            "pb-8": round,
          }
        )}
      >
        <Heading subtitle={subtitle}>{title}</Heading>

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

Preview.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.bool,
  posts: PropTypes.arrayOf(CustomPropTypes.postData),
  round: PropTypes.bool,
  morePosts: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  subtitle: PropTypes.string,
};
