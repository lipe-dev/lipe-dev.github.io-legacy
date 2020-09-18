import Link from "next/link";
import cn from "classnames";
import Date from "../date";
import Button from "../button";

export default function PostPreview({ post, round }) {
  return (
    <div className={cn(round ? "w-1/2 md:w-1/4" : "w-full md:w-1/2", "my-4")}>
      <div
        className={cn(
          "mx-4",
          { "bg-gray-200": !round },
          { "hover:shadow-straight": !round },
          "sm:transform hover:scale-105",
          "transition",
          "duration-200",
          "flex",
          "flex-col",
          "rounded-lg",
          "overflow-hidden",
          { "pb-4": round },
          "flex-shrink"
        )}
      >
        <div
          className={cn(
            "overflow-hidden",
            { "rounded-full": round },
            "h-100",
            round ? "w-40 h-40 md:w-64 md:max-h-64 lg:w-56 lg:h-56" : "w-full",
            "max-w-full",
            { "mx-auto": round },
            "relative"
          )}
        >
          <img
            src={round ? post.image : post.banner}
            alt={post.title}
            className={cn(
              "transform",
              round ? "hover:scale-110" : "hover:scale-110",
              round ? "object-contain" : "object-cover",
              round
                ? "w-40 h-40 md:w-64 md:max-h-64 lg:w-56 lg:h-56"
                : "w-full",
              "transition",
              "duration-1000",
              { "rounded-full": round },
              { "mx-auto": round },
              { "bg-white": round }
            )}
          />
          {!round && (
            <h2 className="absolute bottom-0 text-3xl p-4 text-white bg-blue-900 w-full bg-opacity-50">
              {post.title}
            </h2>
          )}
        </div>
        {!round && (
          <div className="mx-4 my-2 italic text-right text-lg text-gray-600">
            <Date dateString={post.date} />
          </div>
        )}
        {round && (
          <h2
            className={cn(
              "text-2xl",
              "mx-4",
              "mb-4",
              "leading-snug",
              { "mt-4": round },
              { "text-center": round }
            )}
          >
            {post.title}
          </h2>
        )}
        <p
          className={cn("leading-snug", "text-xl", "mx-4", "text-gray-800", {
            "text-center": round,
          })}
        >
          {post.excerpt}
        </p>
        <div className="mt-auto text-center">
          <Button Component={Link} href={`/posts/${post.id}`}>
            Read More +
          </Button>
        </div>
      </div>
    </div>
  );
}
