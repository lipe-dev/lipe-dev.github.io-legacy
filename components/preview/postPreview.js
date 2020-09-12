import Link from "next/link";
import cn from "classnames";
import Date from "../post/date";
import Button from "../button";

export default function PostPreview({ post, round }) {
  return (
    <div
      className={cn(
        round ? "w-1/4" : "w-1/3",
        "mx-2",
        { "bg-gray-200": !round },
        { "hover:shadow-straight": !round },
        "transform hover:scale-105",
        "transition",
        "duration-200",
        "flex",
        "flex-col",
        "rounded-lg",
        "overflow-hidden",
        { "pb-4": round }
      )}
    >
      <div
        className={cn(
          "overflow-hidden",
          { "rounded-full": round },
          round ? "w-64 h-64" : "w-full",
          { "mx-auto": round }
        )}
      >
        <img
          src={round ? post.image : post.banner}
          alt={post.title}
          className={cn(
            "transform",
            round ? "hover:scale-110" : "hover:scale-125",
            round ? "object-contain" : "object-cover",
            round ? "w-64 h-64" : "w-full",
            "transition",
            "duration-1000",
            { "rounded-full": round },
            { "mx-auto": round },
            { "bg-white": round }
          )}
        />
      </div>
      {!round && (
        <div className="mx-4 mt-2 italic">
          <Date dateString={post.date} />
        </div>
      )}
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
      <p
        className={cn("leading-snug", "text-lg", "mx-4", {
          "text-center": round,
        })}
      >
        {post.excerpt}
      </p>
      <div className="mt-auto text-center">
        <Button Component={Link} href={`/posts/${post.id}`}>
          Read More
        </Button>
      </div>
    </div>
  );
}
