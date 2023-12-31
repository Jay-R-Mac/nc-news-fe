import React, { useEffect, useState } from "react";
import { getArticles, getArticlesTopics } from "./Axios";
import { Link, useParams } from "react-router-dom";
import Voter from "./Voter";
import { dateChanger } from "../../utils/utils";
import ErrorPage from "./ErrorPage";

export default function BrowseArticles({ sortBy, sortAsc }) {
  const { topic } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState(null);
  const [articles, setArticlesInfo] = useState([]);

  function filterSort(articles, sortBy, sortAsc) {
    const sortedArticles = articles.slice().sort((a, b) => {
      let sortByA = a[sortBy];
      let sortByB = b[sortBy];

      if (sortBy === "created_at") {
        sortByA = Date.parse(a[sortBy]);
        sortByB = Date.parse(b[sortBy]);
      } else if (typeof a[sortBy] === "string") {
        sortByA = parseFloat(a[sortBy]);
        sortByB = parseFloat(b[sortBy]);
      }

      if (sortAsc === "Desc") {
        if (sortByA > sortByB) return -1;
        if (sortByA < sortByB) return 1;
      } else {
        if (sortByA < sortByB) return -1;
        if (sortByA > sortByB) return 1;
      }
      return 0;
    });
    setArticlesInfo(sortedArticles);
  }

  useEffect(() => {
    if (topic) {
      getArticlesTopics(topic)
        .then((response) => {
          setArticlesInfo(response);
          setIsLoading(false);
          filterSort(response, sortBy, sortAsc);
        })
        .catch((error) => {
          setErrorStatus(error.response.status), setIsLoading(false);
        });
    } else {
      getArticles().then((response) => {
        setArticlesInfo(response);
        setIsLoading(false);
        filterSort(response, sortBy, sortAsc);
      })
      .catch((error) => {
        setErrorStatus(error.response.status), setIsLoading(false);
      });
    }
  }, [topic, sortBy, sortAsc]);

  if (isLoading) return <p>Loading Please Wait...</p>;
  if (errorStatus === 404) {return (<ErrorPage />)}


  return (
    <div>
      <div className="flex-auto">
        {articles.map((article) => {
          return (
            <div
              key={article.article_id}
              className="mb-8 p-4 bg-gray-100 border border-gray-300 rounded shadow-md"
            >
              <p className="text-xl text-center underline mb-2">
                <Link to={`/articles/article/${article.article_id}`}>
                  {article.title}
                </Link>
              </p>
              <div className="mb-4">
                <Link to={`/articles/article/${article.article_id}`}>
                  <img
                    className="mx-auto text-center object-contain h-48 w-96"
                    src={article.article_img_url}
                    alt="Article Image"
                  />
                </Link>
              </div>
              <p className="text-xl text-center italic underline mb-2">
                <Link to={`/articles/${article.topic}`}>{article.topic}</Link>
              </p>
              <p className="text-center text-green-900 mb-2">
                {article.comment_count} Comments
              </p>
              <div className="text-center text-red-900 ">
                <Voter votes={article.votes} id={article.article_id} />
              </div>
              <p className="text-sm text-right mb-2">
                {dateChanger(article.created_at)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
