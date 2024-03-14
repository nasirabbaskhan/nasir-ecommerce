"use client";
import {
  allSanityProducstType,
  sanityProducstType,
} from "@/app/utils/typesOfSanityProducts";
import { cart } from "@/lib/drizzle";
import { ShoppingBagIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Quantity from "@/components/ui/Quantity";
import SummeryPricing from "@/components/ui/SummeryPricing";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

import AddToCartItems from "@/components/ui/AddToCartItems";
// getIdcartproductsFromSanity;
export async function getIdcartproductsFromSanity(productid: string) {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-03-05/data/query/production?query=*%5B_type%3D%3D%22products%22+%26%26+_id%3D%3D%22${productid}%22%5D%0A%7Bproductname%2C%0A++slug%2C%0A++description%2C%0A++size%2C%0A++quantity%2C%0A++image%2C%0A++producttype%2C%0A++price%2C%0A++_id%2C%7D`
  );

  if (!res.ok) {
    return "Error";
  }

  const response = res.json();
  return response;
}
// deleteCartItemfromDB;

export default function CartMain({
  data,
  user,
}: {
  data: cart[];
  user: KindeUser;
}) {
  const [productdata, setProductData] = useState<sanityProducstType[]>([]);
  useEffect(() => {
    dataGetter();
  }, [data]);

  // console.log("nasir aneela Data length ", data.length);
  //    if cart data are not available
  if (data.length == 0) {
    return (
      <div className="h-[80vh] flex justify-center flex-col gap-3 mx-auto">
        <ShoppingBagIcon color="purple" size={42} className="mx-auto" />
        <h2 className="text-2xl text-gray-600 font-semibold mx-auto">
          Cart is Empty,{" "}
          <Link href={"/products"} className="text-xl ">
            {" "}
            Brows Products
          </Link>
        </h2>
      </div>
    );
  }

  const dataGetter = async () => {
    const productPromise = data.map((item: cart) => {
      return getIdcartproductsFromSanity(item.productid);
    });
    try {
      const productData = await Promise.all(productPromise);
      console.log("akhter", productData);
      setProductData(
        productData.map((item: allSanityProducstType) => {
          return item.result[0];
        })
      );
    } catch (error) {}
  };

  // refresh();

  return (
    <>
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="font-bold py-8">
            <Link href={"/"} className="text-purple-500">
              {" "}
              Home
            </Link>{" "}
            / <span className="text-gray-600">Cart</span>
          </div>
          <div className="flex gap-6">
            <div className="w[69%]">
              <div className=" space-y-7 ">
                <AddToCartItems
                  productdata={productdata}
                  data={data}
                  user={user}
                />
              </div>
            </div>
            <SummeryPricing productdata={productdata} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
