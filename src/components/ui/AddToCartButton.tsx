"use client";
import { Button } from "@/components/ui/button";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";

// post the product into database
export async function addToCartApiCalls(userid: string, productid: string) {
  const res = await fetch("https://nasirabbas-ecommerce.vercel.app/api/cart", {
    mode: "no-cors",
    method: "POST",
    body: JSON.stringify({
      userid: userid,
      productid: productid,
      quantity: 1,
    }),
  });
}
export default function AddToCartButton({
  user,
  product,
}: {
  user: KindeUser;
  product: sanityProducstType[];
}) {
  const router= useRouter()
  const { toast } = useToast();
  const handleOnclick = async () => {
    if (user) {
      await addToCartApiCalls(user.id, product[0]._id);
      toast({
        title: "Sucessfull ",
        description: "Addeed To Cart Sucessfully",
      });
    } else {
      router.push("/api/auth/login")
    }
  };

  return (
    <Button
      onClick={handleOnclick}
      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
    >
      Add to Cart
    </Button>
  );
}
