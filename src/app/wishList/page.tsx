import Navbar from "@/components/modules/navbar/navbar";
import Product from "@/components/modules/product/product";
import WishListModel from "@/models/wishList";
import { authUser } from "@/utils/auth";
import connectToDB from "@/utils/db";
type Props = {};

async function WishList({}: Props) {
  connectToDB();
  const user = await authUser();
  let wishes = [];
  console.log("user", user);
  if (user) {
    wishes = await WishListModel.find({ userID: user._id })
      .populate("productID", "image name price score")
      .lean();
    console.log("wishes=====", wishes);
  }
  return (
    <div className="bg-white dark:bg-[#2e2b27]">
      <Navbar isLogin={user ? true : false} userName={user?.userName} />
      <div className="relative top-28">
        <h2 className="font-bold text-2xl md:mx-16 mx-4 border-b border-x-amber-800 py-4">
          لیست علاقه مندی ها
        </h2>
        {wishes ? (
          <section className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid-cols-1 md:gap-2 flex flex-col justify-center gap-4 mt-12 md:mx-40 mx-5">
            <Product
              imgUrl="images/Coffee/nescoffee.png"
              title="دانه قهوه عربیکا"
              price={2000000}
              score={5}
            />
            <Product
              imgUrl="images/Coffee/nescafeGold.jpg"
              title="دانه قهوه عربیکا"
              price={2000000}
              score={2}
            />
            <Product
              imgUrl="images/Coffee/alibaba.png"
              title="دانه قهوه عربیکا"
              price={2000000}
              score={1}
            />

            <Product
              imgUrl="images/Coffee/jacobs-mokka.png"
              title="دانه قهوه عربیکا"
              price={2000000}
              score={4}
            />

            <Product
              imgUrl="images/Coffee/jacobs-mokka.png"
              title="دانه قهوه عربیکا"
              price={2000000}
              score={4}
            />

            <Product
              imgUrl="images/Coffee/jacobs-mokka.png"
              title="دانه قهوه عربیکا"
              price={2000000}
              score={4}
            />

            <Product
              imgUrl="images/Coffee/jacobs-mokka.png"
              title="دانه قهوه عربیکا"
              price={2000000}
              score={4}
            />

            <Product
              imgUrl="images/Coffee/jacobs-mokka.png"
              title="دانه قهوه عربیکا"
              price={2000000}
              score={4}
            />
          </section>
        ) : (
          <div className="flex flex-col justify-center items-center gap-4 my-10 md:mx-5 mx-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4090/4090539.png"
              alt="wishListImage"
              className="w-36 h-36 mb-8"
            />
            <h2 className="font-bold">shoma list mored alaghe nadarid</h2>
            <p>
              bareye inke mahsuli ra be list mored alaghe ezafe konid bayad ruye
              ghalb bezanid ta ghermez shavad
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WishList;
