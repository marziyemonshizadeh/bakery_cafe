import AddToWishList from "@/components/modules/AddToWishList/addToWishList";
import Scores from "@/components/modules/scores/Scores";
import SocialMedias from "@/components/modules/socialMedia/socialMedia";
import { authUser } from "@/utils/serverHelpers";
import BreadCrumb from "./breadCrumb";

async function Details({ product }: any) {
  const user = await authUser();

  return (
    <div className="max-w-[600px] leading-10">
      <BreadCrumb name={product?.name} category={product?.category} />
      <h2 className="text-2xl font-extrabold my-2">{product?.name}</h2>
      <div className="flex items-center">
        <Scores starts={Math.trunc(product?.score)} />
        <p className="ms-1">(دیدگاه {product?.comments.length} کاربر)</p>
      </div>
      <h2 className="text-2xl font-extrabold">
        {product?.price.toLocaleString()} تومان
      </h2>
      <p className="text-slate-600 dark:text-slate-300">
        {product?.shortDescription}
      </p>
      <hr />
      <hr />
      <ul>
        <li className="font-semibold">شناسه محصول: {product?._id}</li>
        <li>
          <p>
            <span className="font-semibold">دسته :</span>
            {product?.category}
          </p>
        </li>
        <li>
          <span className="font-semibold">برچسب :</span>
          {product?.tags.join(" ,")}
        </li>
        <li className="flex">
          <span className="font-semibold">به اشتراک گذاری: </span>
          <SocialMedias />
        </li>
        {user && (
          <li className="flex items-center gap-2">
            <span className="font-semibold">اضافه کردن به علاقه مندی ها:</span>
            <AddToWishList
              userID={JSON.parse(JSON.stringify(user?._id))}
              productID={product?._id}
            />
          </li>
        )}
      </ul>
      <hr />
    </div>
  );
}

export default Details;
