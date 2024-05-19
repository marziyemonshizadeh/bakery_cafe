import SocialMedias from "@/components/modules/socialMedia/socialMedia";
import { FaRegStar, FaStar } from "react-icons/fa";
import BreadCrumb from "./breadCrumb";

function Details({ product }: any) {
  return (
    <div className="max-w-[600px] leading-10">
      <BreadCrumb name={product.name} />
      <h2 className="text-2xl font-extrabold my-2">{product.name}</h2>
      <div className="flex items-center">
        <div className="flex">
          {new Array(Math.trunc(product.score)).fill(0).map((star) => (
            <FaStar key={star} className="text-yellow-400" />
          ))}
          {new Array(5 - Math.trunc(product.score)).fill(0).map((star) => (
            <FaRegStar key={star} className="text-yellow-400" />
          ))}
        </div>
        <p className="ms-1">(دیدگاه {product.comments.length} کاربر)</p>
      </div>
      <h2 className="text-2xl font-extrabold">
        {product.price.toLocaleString()} تومان
      </h2>
      <desc className="text-slate-600 dark:text-slate-300">
        {product.shortDescription}
      </desc>
      <hr />
      {/* <div className="flex items-center gap-3"> */}
      {/* <Link
                href="#"
                className="bg-[#413a2d] text-[#D1B48C] border border-[#D1B48C] dark:bg-[#D1B48C] dark:text-[#413a2d] shadow shadow-[#D1B48C] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#4d4435] focus:ring-1 focus:outline-none focus:ring-[#eacfaa]  sm:w-auto dark:hover:bg-[#f6dcb8]"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "increment", payload: 1 });
                }}
              >
                +
              </Link>
              <span> {state.count}</span>
              <Link
                href="#"
                className="bg-[#413a2d] text-[#D1B48C] border border-[#D1B48C] dark:bg-[#D1B48C] dark:text-[#413a2d] shadow shadow-[#D1B48C] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#4d4435] focus:ring-1 focus:outline-none focus:ring-[#eacfaa]  sm:w-auto dark:hover:bg-[#f6dcb8]"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "decrement", payload: 1 });
                }}
              >
                -
              </Link> */}
      {/* </div> */}
      <hr />
      <ul>
        <li className="font-semibold">شناسه محصول: {product._id}</li>
        <li>
          <p>
            <span className="font-semibold">دسته :</span>
            {product.category}
          </p>
        </li>
        <li>
          <span className="font-semibold">برچسب :</span>
          {product.tags.join(" ,")}
        </li>
        <li className="flex">
          <span className="font-semibold">به اشتراک گذاری: </span>
          <SocialMedias />
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Details;
