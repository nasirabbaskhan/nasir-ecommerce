import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import { fetchingSanityProducts } from "@/app/utils/FetchingSanityProducts";
import SanityProduct from "@/components/ui/sanityProduct";

export default async function AllProducts() {
  // await new Promise((res) => setTimeout(res, 7000));
  const products = (await fetchingSanityProducts()) as sanityProducstType[];
  return (
    <>
      <h1 className="text-gray-900 text-4xl font-bold text-center">
        All Products Catagories
      </h1>
      <p className="text-gray-900 text-2xl font-semibold text-center mt-2">
        Explore what we have
      </p>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item, index) => {
              return <SanityProduct key={index} product={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
