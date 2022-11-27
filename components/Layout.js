import Link from "next/link";

export default function Layout({ children }) {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Top Stories",
      path: "/news/top-stories",
    },
    {
      title: "Popular",
      path: "/news/popular",
    },
    {
      title: "Sections",
      path: "/sections",
    },
  ];
  return (
    <>
      {links.map((link) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Link href={link.path}>
            <a>{link.title} </a>
          </Link>
        );
      })}
      {children}
    </>
  );
}
