import Layout from "@/components/layouts/panelUserLayout";
import CommentsTable from "@/components/templates/p-user/comments/commentsTable";
import ThereIsNoComment from "@/components/templates/p-user/comments/thereIsNoComment";
// import CommentModel from "@/models/comment";
// import connectToDB from "@/utils/db";
// import { authUser } from "@/utils/serverHelpers";

async function Comments() {
  // connectToDB();
  // const user = await authUser();
  // let comments = [];
  // if (user) {
  //   comments = await CommentModel.find({ userID: user._id }, "-__v");
  // }
  return (
    <Layout>
      <h2 className="font-bold text-2xl border-b border-x-amber-800 py-4">
        کامنت های ثبت شده
      </h2>
      <CommentsTable />
      <ThereIsNoComment />
    </Layout>
  );
}

export default Comments;
