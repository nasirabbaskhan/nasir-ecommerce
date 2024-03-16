import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

export default function SanityProduct(props: { product: sanityProducstType }) {
  return (
    <section className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          src={urlForImage(props.product.image[0]).url()}
          width={800}
          height={10}
          alt="product image"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {props.product.producttype}
          </h2>

          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
            {props.product.productname}
          </h1>
          <p className="leading-relaxed truncate mb-3">
            {props.product.productname}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link
              href={`/description/${props.product.slug.current}`}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Learn More &nbsp;
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <MessageCircle className="w-4 h-4" /> &nbsp; 6
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
