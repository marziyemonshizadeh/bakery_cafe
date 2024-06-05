import UserComment from "./comment";

function CommentsTable() {
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
            <th scope="col" className="px-6 py-3">
              حذف
            </th>
            <th scope="col" className="px-6 py-3">
              ویرایش
            </th>
          </tr>
        </thead>
        <tbody>
          <UserComment
            isAccess={false}
            id={1}
            date="1402/10/23"
            product="قهوه عربیکا"
            stars={3}
            title="خیلی خوشمزه بود من راضی بودم"
          />
          <UserComment
            isAccess={true}
            id={2}
            date="1402/10/23"
            product="آیس کافی"
            stars={5}
            title="عالی بود"
          />
          <UserComment
            isAccess={false}
            id={3}
            date="1402/10/23"
            product="کاپوچینو"
            stars={2}
            title="سرد بود راضی نبودم"
          />
          <UserComment
            isAccess={false}
            id={4}
            date="1402/10/23"
            product="قهوه ترک"
            stars={4}
            title="خیلی با کیفیت بود"
          />
        </tbody>
      </table>
    </div>
  );
}

export default CommentsTable;
