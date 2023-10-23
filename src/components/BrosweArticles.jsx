import { useEffect, useState } from "react";

export default function BrowseArticles() {
  const [isLoading, setIsLoading] = useState(true);

  const [articles, setArticlesInfo] = useState([]);
  useEffect(() => {
    fetch(`https://jrm-nc-news.onrender.com/api/articles`)
      .then((response) => response.json())
      .then((response) => {
        setArticlesInfo(response);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading Please Wait...</p>;
  return (
    <div className="ArticleGrid">
      {articles.map((article) => {
        return (
          <div className="flex-auto container mx-auto py-6 box-border box-decoration-slice bg-slate-600 border-4  border-red-500 shadow-2xl">
            <p className="text-xl underline">{article.title}</p>{" "}
            <img
              className="object-contain h-48 w-96"
              src={article.article_img_url}
            />
            <p className="text-left text-green-500">
              {" "}
              {article.comment_count} Comments
            </p>{" "}
            <p className="text-left text-red-600 ">{article.votes} Votes </p>
          </div>
        );
      })}
    </div>
  );
}
