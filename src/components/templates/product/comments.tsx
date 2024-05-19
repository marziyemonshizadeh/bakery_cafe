import Comment from "@/components/modules/comment/comment";
import CommentForm from "./CommentForm";

type CommentsProps = { comments: any };

function Comments({ comments }: CommentsProps) {
  return (
    <div className="flex lg:flex-row flex-col  lg:justify-between justify-center gap-4 my-8">
      <div className="min-w-[600px]">
        <p className="font-bold">{comments.length} دیدگاه برای قهوه اسپرسو </p>
        {comments?.map((comment: any) => (
          <Comment key={comment._id} {...comment} />
        ))}
      </div>
      <CommentForm />
    </div>
  );
}

export default Comments;
