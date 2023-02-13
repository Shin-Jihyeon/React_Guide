import Link from "next/link";
import { Fragment } from "react";

// our-domain.com/news

function NewsPage() {
  return (
    <Fragment>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJs Is A greate Framework</Link>
        </li>
        <li>
          <a href="/news/something">Something Else</a>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
