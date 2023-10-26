import { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import { postArticleComment } from "./Axios";

export default function PostComment({ article_id }) {
  const [newComment, setNewComment] = useState("");
  const [signedIn] = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(false);

  function submitPost(e) {
    e.preventDefault();
    setIsDisabled(true);
    postArticleComment(article_id, { username: signedIn, body: newComment })
      .then((res) => {
        if (res.status === 201) {
          window.alert("Post successful");
        }
      })
      .catch((error) => {
        setIsDisabled(false)
        window.alert("Please enter a comment")
      });
  }
  return (
    <div className="mt-4">
      {!signedIn && (
        <p className="text-red-700">You must be signed in to post comments</p>
      )}
      {signedIn && (
        <form className="flex items-center mt-4" onSubmit={submitPost}>
          <label className="mr-2 text-xl font-bold">Post Comment</label>
          <input
            className="mr-2 border border-gray-300 p-2 rounded"
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
          <button
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
            disabled={isDisabled}
          >
            Add Comment
          </button>
        </form>
      )}
    </div>
  );
}
