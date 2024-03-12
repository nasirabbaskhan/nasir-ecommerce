import { fetchingSanityProducts } from "@/app/utils/FetchingSanityProducts";
import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import SanityProduct from "@/components/ui/sanityProduct";

const products = (await fetchingSanityProducts()) as sanityProducstType[];
function getserchedProducts(keyword: string) {
  // log("keyword", keyword);
  return products.filter((item) => item.productname.includes(keyword));
}

export default async function SerachProducts({
  params,
}: {
  params: { keyword: string };
}) {
  const product = await getserchedProducts(params.keyword);
  //const item = product[0];
  // console.log("anellaserchproduct", product);

  return (
    <>
      <h1 className="text-2xl text-center text-gray-900 font-semibold">
        Your&apos;s searched for {params.keyword}
      </h1>
      {product.length > 0 ? (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {product.map((items, index) => {
                return <SanityProduct key={index} product={items} />;
              })}
            </div>
          </div>
        </section>
      ) : (
        <div className="text-gray-600 text-xl text-center">
          your {params.keyword} is not available
        </div>
      )}
    </>
  );
}
