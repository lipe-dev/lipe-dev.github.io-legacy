import Link from "next/link";
import cn from "classnames";

import Button from "./button";
import Layout from "./layout/layout";

export default function Pagination({ nextPage, prevPage, baseUrl }) {
  return (
    <div
      className={cn(
        "container mx-auto text-center flex justify-center items-center",
        { "my-8": prevPage || nextPage }
      )}
    >
      {prevPage && (
        <div className="p-2">
          <Button Component={Link} href={`${baseUrl}${prevPage}`} primary>
            « First Page
          </Button>
        </div>
      )}
      {prevPage && prevPage !== 1 && (
        <div className="p-2">
          <Button Component={Link} href={`${baseUrl}${prevPage}`} primary>
            ‹ Page {prevPage}
          </Button>
        </div>
      )}
      {(prevPage || nextPage) && (
        <div className="m-2 uppercase p-4 font-black text-orange-600">
          Page {nextPage - 1 || prevPage + 1}
        </div>
      )}
      {nextPage && (
        <div className="p-2">
          <Button Component={Link} href={`${baseUrl}${nextPage}`} primary>
            Page {nextPage} ›
          </Button>
        </div>
      )}
    </div>
  );
}
