import { client } from "../../../sanity/lib/client";

export const fetchingSanityProducts = async () => {
  const products = await client.fetch(
    '*[_type=="products"]{productname,slug,description,size,quantity,image,producttype,price,_id,}',
    {},
    { cache: "no-cache" }
  );
  return products;
};
