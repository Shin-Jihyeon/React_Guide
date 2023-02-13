import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

// our-domain.com/news/:newsId

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return <h1>Detail</h1>;
}

export default DetailPage;
