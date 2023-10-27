import { deleteArticleComments } from "./Axios";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";

export default function CommentDeleter({ comment_id, commentAuthor }) {
  const [signedIn] = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteComment = () => {
    setIsDisabled(true);
    setIsLoading(true)
    deleteArticleComments(comment_id).then((res) => {
      if (res.status === 204){setIsDisabled(false), setIsLoading(false)}
    });
  };

  return (
    <div className="mt-4">
      {signedIn === commentAuthor && (
        <form
          className="flex items-center mt-4"
          onSubmit={(e) => {
            e.preventDefault()
            handleDeleteComment();
          }}
        >
          {signedIn && (<p hidden={!isLoading} className="text-red-700">Deleting...</p>)}
          <button
            disabled={isDisabled}
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
