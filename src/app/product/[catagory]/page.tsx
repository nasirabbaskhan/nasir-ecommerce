import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import { fetchingSanityProducts } from "@/app/utils/FetchingSanityProducts";
import SanityProduct from "@/components/ui/sanityProduct";

const products = (await fetchingSanityProducts()) as sanityProducstType[];

function productsCatagory(catagory: string) {
  return products.filter((item) => item.producttype == catagory);
}

export default async function Catagory({
  params,
}: {
  params: { catagory: string };
}) {
  const products = productsCatagory(params.catagory);
  // await new Promise((res) => setTimeout(res, 5000));

  return (
    <>
      <h1 className="text-gray-900 text-4xl font-bold text-center">
        For {params.catagory} Spacial
      </h1>
      <p className="text-gray-900 text-xl  text-center mt-2">
        Explore what we have
      </p>
      {products.length > 1 ? (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((item, index) => {
                return <SanityProduct key={index} product={item} />;
              })}
            </div>
          </div>
        </section>
      ) : (
        <div className="text-4xl text-center mt-10">
          Products are not available{" "}
        </div>
      )}
    </>
  );
}
