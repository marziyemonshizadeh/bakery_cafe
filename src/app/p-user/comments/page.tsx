import Layout from "@/components/layouts/panelUserLayout";
import Title from "@/components/modules/panelUser/panelUserTitle";
import CommentsTable from "@/components/templates/p-user/comments/commentsTable";
import ThereIsNoComment from "@/components/templates/p-user/comments/thereIsNoComment";
import CommentModel from "@/models/comment";
import connectToDB from "@/utils/db";
import { authUser } from "@/utils/serverHelpers";

async function Comments() {
  connectToDB();
  const user = await authUser();
  let comments = [];
  if (user) {
    comments = await CommentModel.find({ userID: user._id }, "-__v").populate(
      "productID",
      "name"
    );
    console.log("user panel comments", comments);
  }
  return (
    <Layout>
      <Title text="کامنت های ثبت شده" />
      {comments.length > 0 ? (
        <CommentsTable comments={JSON.parse(JSON.stringify(comments))} />
      ) : (
        <ThereIsNoComment />
      )}
    </Layout>
  );
}

export default Comments;
