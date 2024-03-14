import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import React from "react";
import { Button } from "./button";
import { cart } from "@/lib/drizzle";

export default function SummeryPricing({
  productdata,
  data,
}: {
  productdata: sanityProducstType[];
  data: cart[];
}) {
  const totalOrders = productdata.reduce((total: any, priceItem: any) => {
    const quantityItem = data.find((item) => item.productid == priceItem._id);
    if (quantityItem) {
      return (
        total +
        priceItem.price * (quantityItem.quantity ? quantityItem.quantity : 0)
      );
    }
  }, 0);

  const shippng = 10;
  return (
    <div className="flex flex-col w-1/4 gap-5 ">
      <div className=" bg-gray-100 p-8 space-y-6">
        <p className="text-2xl text-gray-500 font-semibold ">Summary</p>
        <div className="flex justify-between ">
          <p className="text-gray-500">Quantity</p>
          <p className="text-gray-600 font-semibold">
            {data.reduce((total, item) => total + item.quantity, 0)}
          </p>
        </div>
        <div className="flex justify-between ">
          <p className="text-gray-500">Order Total</p>
          <p className="text-gray-600 font-semibold">$ {totalOrders}.00</p>
        </div>
        <div className="flex justify-between ">
          <p className="text-gray-500">Shipping</p>
          <p className="text-gray-600 font-semibold">${shippng}.00</p>
        </div>
        <div className="flex justify-between ">
          <p className="text-gray-500">Shipping</p>
          <p className="text-gray-600 font-semibold text-xl">
            ${totalOrders + shippng}.00
          </p>
        </div>
      </div>
      <Button variant={"destructive"}>Checkout</Button>
    </div>
  );
}
