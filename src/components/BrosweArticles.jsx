import { useEffect, useState } from "react";
import { getArticles } from "./Axios";
import { Link } from "react-router-dom";
import Voter from "./Voter";

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
          <div key={article.article_id} className="mb-8 p-4 bg-gray-100 border border-gray-300 rounded shadow-md">
            <p className="text-xl text-center underline mb-2">
              <Link to={`article/${article.article_id}`}>{article.title}</Link>
            </p>{" "}
            <div className="mb-4">
              {" "}
              <Link to={`article/${article.article_id}`}>
                <img
                  className="mx-auto text-center object-contain h-48 w-96"
                  src={article.article_img_url}
                  alt="Article Image"
                />
              </Link>
            </div>
            <p className="text-center text-green-900 mb-2">
              {" "}
              {article.comment_count} Comments
            </p>{" "}
            <div className="text-center text-red-900 ">
              <Voter votes={article.votes} id={article.article_id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
