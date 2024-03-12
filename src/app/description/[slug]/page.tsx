import { fetchingSanityProducts } from "@/app/utils/FetchingSanityProducts";
import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import ProductsDetail from "@/components/Views/ProductsDetail";
import SanityProduct from "@/components/ui/sanityProduct";

const products = (await fetchingSanityProducts()) as sanityProducstType[];
async function productDescription(slug: string) {
  return products.filter((item) => item.slug.current == slug);
}

export default async function Detail({ params }: { params: { slug: string } }) {
  // await new Promise((res) => setTimeout(res, 7000));
  const product = (await productDescription(
    params.slug
  )) as sanityProducstType[];
  return (
    <>
      <ProductsDetail product={product} />

      {/* show the products */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.slice(0, 3).map((item, index) => {
              return <SanityProduct key={index} product={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
