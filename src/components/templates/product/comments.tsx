import Comment from "@/components/modules/comment/comment";
import CommentForm from "./CommentForm";

type CommentsProps = { comments: []; productID: number; userID?: any };

function Comments({ comments, productID, userID }: CommentsProps) {
  return (
    <div className="flex lg:flex-row flex-col  lg:justify-evenly justify-center gap-4 my-8 overflow-hidden">
      <div>
        <p className="font-bold">
          {comments.filter((comment: any) => comment.isAccept).length} دیدگاه
          برای قهوه اسپرسو
        </p>
        {comments?.map(
          (comment: any) =>
            comment.isAccept && <Comment key={comment._id} {...comment} />
        )}
      </div>
      <CommentForm productID={productID} userID={userID} />
    </div>
  );
}

export default Comments;
