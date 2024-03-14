"use client";
import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import { Button } from "@/components/ui/button";
import { cart } from "@/lib/drizzle";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { Minimize, Plus } from "lucide-react";

export async function updateQuantityInDatabase(
  userid: string,
  productid: string,
  quantity: number
) {
  const res = await fetch(`https://nasirabbas-ecommerce.vercel.app/api/cart`, {
    // mode: "no-cors",
    method: "PUT",
    body: JSON.stringify({
      userid: userid,
      productid: productid,
      quantity: quantity,
    }),
  });
  if (!res.ok) {
    return "Error";
  }

  return "OK";
}

export default function Quantity({
  item,
  user,
  data,
}: {
  item: sanityProducstType;
  user: KindeUser;
  data: cart;
}) {
  const IncrementQuantityHandler = async () => {
    await updateQuantityInDatabase(
      user.id,
      item._id,
      data.quantity + 1 // error resolve required
    );
  };
  const decrementQuantityHandler = async () => {
    await updateQuantityInDatabase(
      user.id,
      item._id,
      data.quantity - 1 // error resolve required
    );
  };
  return (
    <div className="flex justify-between  ">
      <div className={`flex gap-4 justify-center items-center text-lg`}>
        <button
          onClick={decrementQuantityHandler}
          className="select-none  text-4xl cursor-pointer flex justify-center items-center w-8 h-8 rounded"
        >
          {" "}
          -{" "}
        </button>
        <p className="ring-2 px-3 p-1 rounded-md">{data.quantity}</p>
        <button
          onClick={IncrementQuantityHandler}
          className="select-none text-2 xl cursor-pointer flex justify-center items-center w-8 h-8 rounded"
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
}
