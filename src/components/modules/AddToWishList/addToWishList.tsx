"use client";

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type AddToWishListProps = { userID: any; productID: any };

function AddToWishList({ userID, productID }: AddToWishListProps) {
  const [isLike, setIsLike] = useState(false);

  const handleLikeProduct = async () => {
    const res = await fetch("http://localhost:3000/api/wishList", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ userID, productID }),
    });

    setIsLike((prev) => !prev);
    if (res.status === 201) {
      return toast.success("product added wishlist successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleUnLikeProduct = () => {
    setIsLike((prev) => !prev);
    toast.success("product removed wishlist successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer />
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
