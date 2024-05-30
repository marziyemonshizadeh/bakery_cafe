"use client";
import Link from "next/link";
import { useReducer } from "react";
import { ActionTypes, CounterType } from "../product/product.type";

type Props = {};

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

function Counter({}: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Link
        href="#"
        className="bg-[#413a2d] text-[#D1B48C] border border-[#D1B48C] dark:bg-[#D1B48C] dark:text-[#413a2d] shadow shadow-[#D1B48C] font-medium rounded-lg text-sm px-3 py-1.5 text-center hover:bg-[#4d4435] focus:ring-1 focus:outline-none focus:ring-[#eacfaa]  sm:w-auto dark:hover:bg-[#f6dcb8]"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "increment", payload: 1 });
        }}
      >
        +
      </Link>
      <span className="mx-1"> {state.count}</span>
      <Link
        href="#"
        className="bg-[#413a2d] text-[#D1B48C] border border-[#D1B48C] dark:bg-[#D1B48C] dark:text-[#413a2d] shadow shadow-[#D1B48C] font-medium rounded-lg text-sm px-3 py-1.5 text-center hover:bg-[#4d4435] focus:ring-1 focus:outline-none focus:ring-[#eacfaa]  sm:w-auto dark:hover:bg-[#f6dcb8]"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "decrement", payload: 1 });
        }}
      >
        -
      </Link>
    </div>
  );
}

export default Counter;
