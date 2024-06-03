import Layout from "@/components/layouts/panelUserLayout";
import WishListIsEmpty from "@/components/templates/p-user/wishList/WishListIsEmpty";
import WishListProducts from "@/components/templates/p-user/wishList/WishListProducts";
import WishListModel from "@/models/wishList";
import connectToDB from "@/utils/db";
import { authUser } from "@/utils/serverHelpers";

async function WishList() {
  connectToDB();
  const user = await authUser();
  let wishes = [];
  if (user) {
    wishes = await WishListModel.find(
      { userID: user._id },
      "-__v -createdAt -updatedAt"
    )
      .populate("productID", "image name price score")
      .lean();
  }

  return (
    <Layout>
      <div>
        <h2 className="font-bold text-2xl border-b border-x-amber-800 py-4">
          لیست علاقه مندی ها
        </h2>
        {wishes.length !== 0 ? (
          <WishListProducts wishes={JSON.parse(JSON.stringify(wishes))} />
        ) : (
          <WishListIsEmpty />
        )}
      </div>
    </Layout>
  );
}

export default WishList;
