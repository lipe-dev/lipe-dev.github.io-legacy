import Link from "next/link";

export default function NavItem({ href, children }) {
  return (
    <Link href={href}>
      <a className="px-3 py-3 mx-1 transform transition duration-200 hover:scale-105 hover:bg-orange-300 hover:shadow-diagonal">
        {children}
      </a>
    </Link>
  );
}
