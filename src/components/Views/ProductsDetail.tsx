"use client";
import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { useState } from "react";
import PortableText from "react-portable-text"; // to show sanity ritch text
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import AddToCartButton from "../ui/AddToCartButton";

export default function ProductsDetail({
  product,
  user,
}: {
  product: sanityProducstType[];
  user: KindeUser;
}) {
  const [sizes, setSizes] = useState<string>(product[0].size[0]);
  const [activeImageUrl, setActiveimageUrl] = useState<string>(
    urlForImage(product[0].image[1]).url() as string
  );
  const [imageArray, setImageArray] = useState<string[]>(() => {
    return product[0].image.map((item) => {
      return urlForImage(item).url() as string;
    });
  });
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap ">
          <div className="lg:w-1/2 w-full space-y-5">
            <Image
              width={1000}
              height={1000}
              alt="ecommerce"
              className=" w-full lg:h-auto h-64 object-cover object-center rounded"
              src={activeImageUrl}
            />
            <div className="flex gap-7 md:max-w-28 max-w-16 w-full  ">
              {imageArray.map((item, index) => (
                <Image
                  key={index}
                  onClick={() => setActiveimageUrl(item)}
                  src={item}
                  className={`${
                    item == activeImageUrl &&
                    "ring-4 ring-indigo-500 opacity-75 p-4"
                  }w-full lg:h-auto h-64 object-cover object-center rounded`}
                  height={1000}
                  width={1000}
                  alt="arrayImage"
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Nasir Ecommerce
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product[0].productname}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>

            {/* sanity ritch text */}
            <PortableText
              className="leading-relaxed"
              content={product[0].description}
            />

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex justify-center items-center">
                <span className="mr-3 text-2xl ">Sizes :</span>
                <div className="space-x-3 ">
                  {product[0].size.map((item, index) => (
                    <button
                      onClick={() => setSizes(item)}
                      key={index}
                      className={`${
                        sizes == item && "ring-2 ring-indigo-500"
                      } border-2  border-gray-300 rounded-full w-8 h-8 text-center focus:outline-none=`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <AddToCartButton user={user} product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
