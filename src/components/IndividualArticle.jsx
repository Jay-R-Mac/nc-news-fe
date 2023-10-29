import { useEffect, useState } from "react";
import { getArticleById } from "./Axios";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import ErrorPage from "./ErrorPage";

export default function IndividualArticle() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState(null)
  const [article, setArticleInfo] = useState([]);
console.log(article, errorStatus)
  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticleInfo(response);
      setIsLoading(false);
    })
    .catch((error)=>{setErrorStatus(error.response.status), setIsLoading(false)}
    );
  }, [errorStatus]);
  
  if (isLoading) return <p>Loading Please Wait...</p>;
  if (errorStatus === 404) {return (<ErrorPage />)}


  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">Author: {article.author}</p>

      <div className="flex justify-center">
        <img
          className="object-contain w-full h-full"
          src={article.article_img_url}
          alt="Article Image"
        />
      </div>

      <div className="mt-4 leading-7">{article.body}</div>
      <Comments article_id={article.article_id} />
    </div>
  );
}
