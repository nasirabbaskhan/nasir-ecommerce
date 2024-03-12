import Image from "next/image";
import { Button } from "../ui/button";

export default async function ShopDetail() {
  // await new Promise((res) => setTimeout(res, 4000));
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            width={1000}
            height={1000}
            alt="shopImge"
            src={"/shopImge.jpg"}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
            Elegance in Every Stitch, Style in Every Fold of our Clothes
          </h1>
          <p className="mb-8 leading-relaxed">
            At Nasir&apos;s Ecommerce, fashion meets convenience! Step into a
            world of style and elegance. Whether you&apos;re searching for the
            perfect outfit for a special occasion, or simply treating yourself
            to a fashion-forward piece, We has you covered.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <label className="  text-gray-600">
                Subscribe to our Newslatter
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <Button className="hover:bg-indigo-600 rounded text-lg bg-indigo-500 ">
              Subscribe
            </Button>
            {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button> */}
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
            We deal in Exelent products for you.
          </p>
          <div className="flex lg:flex-row md:flex-col"></div>
        </div>
      </div>
    </section>
  );
}
