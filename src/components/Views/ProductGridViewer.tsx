import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";

import SanityProduct from "../ui/sanityProduct";

export default async function ProductGridViewer({
  products,
}: {
  products: sanityProducstType[];
}) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((item, index) => {
            return <SanityProduct key={index} product={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
