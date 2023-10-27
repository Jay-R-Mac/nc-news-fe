// import { deleteArticleComments } from "./Axios";
import { useEffect, useState, useContext } from "react";



export default function CommentDeleter({comment_id, commentAuthor}) {
  const [deleteComment, setDeleteComment] = useState(false);


//   useEffect(() => {  
//     deleteArticleComments(comment_id).then((response) => {
//       setComments(response);
//     });
//   }, [comments]);

  return (
    <div>
        Delete me
    </div>
  );
}