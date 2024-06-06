import UserComment from "./comment";

type CommentsTableProps = {
  comments: [];
};
function CommentsTable({ comments }: CommentsTableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-12 border border-orange-950 text-orange-950">
      <table className="w-full text-sm text-left rtl:text-right  dark:text-gray-400 ">
        <thead className="uppercase bg-[#711d1c0f] text-orange-950 dark:bg-gray-700 dark:text-gray-400">
          <tr className="font-extrabold">
            <th scope="col" className="px-6 py-3">
              شناسه
            </th>
            <th scope="col" className="px-6 py-3">
              تاریخ
            </th>
            <th scope="col" className="px-6 py-3">
              محصول
            </th>
            <th scope="col" className="px-6 py-3">
              امتیاز
            </th>
            <th scope="col" className="px-6 py-3">
              وضعیت
            </th>
            <th scope="col" className="px-6 py-3">
              مشاهده
            </th>
          </tr>
        </thead>
        <tbody>
          {comments?.map((comment: any, index) => {
            return (
              <UserComment
                key={comment._id}
                isAccept={comment.isAccept}
                id={index + 1}
                date={new Date(comment.date).toLocaleDateString("fa-IR")}
                product={comment.productID.name}
                stars={comment.score}
                title={comment.message}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CommentsTable;
