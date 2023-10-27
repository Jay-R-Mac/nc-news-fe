import { getArticleComments } from "./Axios";
import { useEffect, useState } from "react";
import PostComment from "./PostComment";
import { dateChanger } from "../../utils/utils";

export default function Comments(props) {
  const article_id = props.article_id;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleComments(article_id).then((response) => {
      setComments(response);
    });
  }, [comments]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Comments Section</h3>
      <PostComment article_id={article_id}/>
      {comments.map((comment,index) => (
        <div
          className="mb-4 border border-gray-300 p-4 rounded"
          key={index}
        >
          <p className="text-red-700 font-semibold mb-1">{comment.author}</p>
          <p className="text-gray-700 mb-1">Votes: {comment.votes}</p>
          <p className="text-gray-800 mb-1">{comment.body}</p>
          <p className="text-gray-600">{dateChanger(comment.created_at)}</p>
        </div>
      ))}
    </div>
  );
}
