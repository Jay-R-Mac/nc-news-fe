import { deleteArticleComments } from "./Axios";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";

export default function CommentDeleter({ comment_id, commentAuthor }) {
  const [deleteComment, setDeleteComment] = useState(false);
  const [signedIn] =useContext(UserContext)


  const handleDeleteComment = () => {
    deleteArticleComments(comment_id).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="mt-4">
      {signedIn === commentAuthor && (
        <form
          className="flex items-center mt-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleDeleteComment();
          }}
        >
          <button
            type="submit"
            className="bg-red-700 hover:bg-red-900 text-white font-bold py-1 px-1 rounded"
          >
            Delete
          </button>
        </form>
      )}
    </div>
  );
}
