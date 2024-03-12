import HeroSection from "@/components/Views/HeroSection";
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import ShopDetail from "@/components/Views/ShopDetail";

import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import { fetchingSanityProducts } from "@/app/utils/FetchingSanityProducts";
import { Suspense } from "react";
import LoadingComponent from "@/components/ui/LoadingComponent";
import HeroLoading from "@/components/ui/HeroLoading";
import ShopDetailLoading from "@/components/ui/ShopDetailLoading";

export default async function Home() {
  await new Promise((res) => setTimeout(res, 7000));
  return (
    <div>
      <Suspense fallback={<HeroLoading />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<LoadingComponent isLoaing={false} cardLimit={6} />}>
        <Crucial />
      </Suspense>
      <Suspense fallback={<ShopDetailLoading />}>
        <ShopDetail />
      </Suspense>
    </div>
  );
}

async function Crucial() {
  const products = (await fetchingSanityProducts()) as sanityProducstType[];

  return <ProductGridViewer products={products.slice(0, 3)} />;
}
