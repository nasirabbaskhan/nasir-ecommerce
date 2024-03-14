import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogIn } from "lucide-react";
import React from "react";
import { cart } from "@/lib/drizzle";
import CartMain from "@/components/Views/AddToCartCompo/CartMain";

async function getAllUserIDCardProducts(user_id: string) {
  const res = await fetch(
    `https://nasirabbas-ecommerce.vercel.app/api/cart?userid=${user_id}`
  );
  if (!res.ok) {
    return "Error";
  }
  const response = res.json();
  return response;
}

export default async function Cartpage() {
  // to get user id
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // if user not exist

  if (!user) {
    return (
      <div className="h-[80vh] flex justify-center flex-col gap-3">
        <LoginLink>
          <LogIn color="purple" size={32} />
        </LoginLink>
        <h1 className="text-2xl font-semibold text-gray-600">
          Please Login to View Your Cart....
        </h1>
      </div>
    );
  }

  const data = await getAllUserIDCardProducts(user.id);
  // console.log("Data is", data);
  // console.log("id", user.id);

  return (
    <div>
      <CartMain data={data} user={user} />
    </div>
  );
}
