export type CounterType = {
    count: number;
  };
  
export type ActionTypes = {
    type: "increment" | "decrement";
    payload: number;
  };