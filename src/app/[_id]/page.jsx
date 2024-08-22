import SingleProduct from "@/components/SingleProduct";
import { getSingleProduct } from "@/helpers";

const page = async ({ searchParams }) => {
  const _idString = searchParams._id;
  const _id = Number(_idString);
  const product = getSingleProduct(_id);
  return (
    <SingleProduct product={product} />
  );
};

export default page;
