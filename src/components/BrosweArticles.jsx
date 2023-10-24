import { useEffect, useState } from "react";
import { getArticles } from "./Axios";
import { Link } from "react-router-dom";

export default function BrowseArticles() {
  const [isLoading, setIsLoading] = useState(true);

  const [articles, setArticlesInfo] = useState([]);
  useEffect(() => {
    getArticles().then((response) => {
      setArticlesInfo(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading Please Wait...</p>;
  return (
    <div className="flex-auto">
      {articles.map((article) => {
        return (
          <div className="flex-wrap row-span-2 container mx-auto py-2 box-border max-w-2xl box-decoration-slice bg-stone-200 border-4  border-red-500 shadow-2xl">
            <p className="text-xl text-center underline"><Link to= {`article/${article.article_id}`}>{article.title}</Link></p>{" "}
            <div className="">
              {" "}
              <Link to= {`article/${article.article_id}`}>
              <img
                className="mx-auto text-center object-contain h-48 w-96"
                
                src={article.article_img_url} alt="Article Image"
                
              /></Link>
            </div>
            <p className="text-center text-green-900">
              {" "}
              {article.comment_count} Comments
            </p>{" "}
            <p className="text-center text-red-900 ">{article.votes} Votes </p>
          </div>
        );
      })}
    </div>
  );
}
