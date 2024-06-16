"use client";

const swal = require("sweetalert");
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type AddToWishListProps = { userID: number; productID: string | undefined };

function AddToWishList({ userID, productID }: AddToWishListProps) {
  const [isLike, setIsLike] = useState(false);

  const handleLikeProduct = async () => {
    const res = await fetch("/api/wishList", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ userID, productID }),
    });

    setIsLike((prev) => !prev);
    if (res.status === 201) {
      swal({
        title: "محصول مورد نظر با موفقیت به علاقه مندی ها اضافه شد   !",
        icon: "success",
        buttons: "فهمیدم",
      });
    }
  };

  const handleUnLikeProduct = async () => {
    setIsLike((prev) => !prev);
    const res = await fetch(`/api/wishList/${productID}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      swal({
        title: "محصول مورد نظر با موفقیت از علاقه مندی ها حذف شد   !",
        icon: "success",
        buttons: "فهمیدم",
      }).then(() => {
        location.reload();
      });
    }
  };

  return (
    <>
      {isLike ? (
        <FaHeart
          className="icon"
          // style={{ animation: "zoom-in-zoom-out 0.5s ease" }}
          onClick={handleUnLikeProduct}
        />
      ) : (
        <FaRegHeart className="icon" onClick={handleLikeProduct} />
      )}
    </>
  );
}

export default AddToWishList;
