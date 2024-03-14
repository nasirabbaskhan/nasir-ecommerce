import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import Quantity from "./Quantity";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { cart } from "@/lib/drizzle";
//import { deleteCartItemfromDB } from "../Views/AddToCartCompo/CartMain";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddToCartItems({
  productdata,
  user,
  data,
}: {
  productdata: sanityProducstType[];
  user: KindeUser;
  data: cart[];
}) {
  const { refresh } = useRouter();
  async function deleteCartItemfromDB(userid: string, productid: string) {
    await fetch(
      `https://nasirabbas-ecommerce.vercel.app/api/cart?userid=${userid}&productid=${productid}`,
      {
        method: "DELETE",
      }
    );
    return "OK";
  }
  refresh();

  return (
    <>
      {productdata.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full h-[6rem] border-t  flex gap-9 justify-between items-center"
          >
            <div className="flex items-center gap-8">
              <div className="w-16 h-16">
                <Image
                  src={urlForImage(item.image[0]).url()}
                  width={1000}
                  height={1000}
                  alt="image"
                />
              </div>
              <div className="truncate w-60">{item.productname}</div>
              <Quantity item={item} user={user} data={data[index]} />
              <p className="text-gray-500">$ {item.price}</p>
              <X
                onClick={() => deleteCartItemfromDB(user.id, item._id)}
                className="cursor-pointer"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}