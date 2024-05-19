"use client";

import Link from "next/link";
import { useReducer } from "react";
import Scores from "../scores/Scores";
import { ActionTypes, CounterType } from "./product.type";

type ProductProps = {
  imgUrl: string;
  title: string;
  price: number;
  score: number;
};
const initialState = {
  count: 0,
};

const reducer = (state: CounterType, action: ActionTypes) => {
  switch (action.type) {
    case "increment":
      if (state.count == 5) {
        return { count: state.count + 0 };
      }
      return { count: state.count + action.payload };
    case "decrement":
      if (state.count == 0) {
        return { count: state.count };
      }
      return { count: state.count - action.payload };
    default: {
      throw new Error("Invalid Action Type !!");
    }
  }
};
export default function Product({ imgUrl, title, price, score }: ProductProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  let starts = Math.trunc(score);

  return (
    <div className="overflow-hidden mx-auto border border-gray-200 rounded-lg p-5 hover:cursor-pointer hover:bg-[#a59c95]/10 transition-colors z-20">
      <Link href="/product/6645ba289dda028157c53370">
        <img
          className="w-48 h-48"
          src={`/${imgUrl}`}
          alt="Sunset in the mountains"
        />
      </Link>
      <section className="px-6 py-2 flex flex-col items-center gap-2">
        <p className="font-bold text-xl mb-2">{title}</p>
        <Scores starts={starts} />
        <span>{price} تومان</span>
        <div className="flex items-center gap-3">
          <Link
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
          </Link>
        </div>
      </section>
    </div>
  );
}
