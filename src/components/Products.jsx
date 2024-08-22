import { getProducts } from "@/helpers";
import Product from "./Product";
 


const Products = async () => {
  const products = await getProducts();
  return(
    <Product products={products} />
  )
  
};

export default Products;
