"use client";

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type Props = {};

function AddToWishList({}: Props) {
  const [isLike, setIsLike] = useState(false);

  return (
    <>
      {isLike ? (
        <FaHeart
          className="icon"
          // style={{ animation: "zoom-in-zoom-out 0.5s ease" }}
          onClick={() => setIsLike((prev) => !prev)}
        />
      ) : (
        <FaRegHeart
          className="icon"
          onClick={() => setIsLike((prev) => !prev)}
        />
      )}
    </>
  );
}

export default AddToWishList;
