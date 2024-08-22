import { productData } from "@/constants/data";
export const getProducts = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};
export const getSingleProduct = (_id) => {
  const item = productData.find((product) => product._id === _id);
  return item;
};