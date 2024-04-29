"use client";
import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import React, { useState } from "react";
import { Button } from "./button";
import { cart } from "@/lib/drizzle";

export default function SummeryPricing({
  productdata,
  data,
}: {
  productdata: sanityProducstType[];
  data: cart[];
}) {
  const [isLoading, setIsLoading] = useState(false);

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

  async function handleProcessCheckout() {
    setIsLoading(true);
    let links = await fetch(
      `https://nasirabbas-ecommerce.vercel.app/api/checkout_session`,
      {
        method: "POST",
        body: JSON.stringify(productdata),
      }
    );
    setIsLoading(false);
    let { link } = await links.json();
    // console.log("nasir link", link);
    window.location.href = link;
  }
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
      <Button onClick={handleProcessCheckout} variant={"destructive"}>
        {isLoading ? "Loading...." : "Checkout"}
      </Button>
    </div>
  );
}
