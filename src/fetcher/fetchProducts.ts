import axios from "axios";

export interface Product {
  [x: string]: any;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  image: string;
  weight?: number;
  suitableFor?: string;
  smell?: string;
  score: string;
  tags: string[];
  Inventory: boolean;
  comments: any[];
}
export const fetchProducts = async () => {
  return await axios.get("/api/products").then((res) => {
    return res.data as Product[];
  });
};
