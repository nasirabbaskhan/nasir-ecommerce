import { sanityProducstType } from "@/app/utils/typesOfSanityProducts";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

interface typeofData {
  price: string;
  name: string;
  quantity: number;
}
const originalData: Array<typeofData> = [
  {
    price: "price_1PAsa7P3PqdLnapLQHapHBDb",
    name: "Junior Boy Black Silver Checkered Casual Shirt",
    quantity: 1,
  },
  {
    price: "price_1PAsciP3PqdLnapLXO8WC3tK",
    name: "Lyra Unstitched Fabric Cotton-LF",
    quantity: 1,
  },
  {
    price: "price_1PAsn7P3PqdLnapLybzdJ6bo",
    name: "Gul 900 Blossom Unstitched Fabric Blended-LF",
    quantity: 1,
  },
  {
    price: "price_1PAxDCP3PqdLnapL6zjP8noG",
    name: "Toddler Girl Green Viscose Blouse With Full Sleeves",
    quantity: 1,
  },
  {
    price: "price_1PAxJEP3PqdLnapLyDQknIp8",
    name: "Purple Basic Kurta KR-PLN24-007",
    quantity: 1,
  },
  {
    price: "price_1PAxKzP3PqdLnapLZQFh98p9",
    name: "Plum Basic Kurta KR-PLN24-012",
    quantity: 1,
  },
  {
    price: "price_1PAxNdP3PqdLnapL19tYtSQf",
    name: "Dobby Dyed Co-Ord Set WGK-DBW-DY-3279",
    quantity: 1,
  },
  {
    price: "price_1PAxQWP3PqdLnapLHM0gqpt6",
    name: "Luxury Pret Dyed Cotton silk Embroidered Kurti With Trouse",
    quantity: 1,
  },
  {
    price: "price_1PAxSRP3PqdLnapLQEcBohBV",
    name: "Cambrc Printed Shirt WGK-CMS-DP-3311",
    quantity: 1,
  },
  {
    price: "price_1PAxUiP3PqdLnapLh23vTrTA",
    name: "Junior Boy White T-Shirt 224-313-020",
    quantity: 1,
  },
  {
    price: "price_1PAxWLP3PqdLnapLP8wecoFn",
    name: "Junior Boy Black T-Shirt 224-313-024",
    quantity: 1,
  },
  {
    price: "price_1PAxYIP3PqdLnapLROKsec1R",
    name: "Yarn Dyed Shirt WGK-YDS-DY-3284",
    quantity: 1,
  },
  {
    price: "price_1PAxaDP3PqdLnapL6eHeJm1u",
    name: "Toddler Girl Blue Blouse 224-413-045 T",
    quantity: 1,
  },
  {
    price: "price_1PAxcbP3PqdLnapLyJZRPsqR",
    name: "Junior Boy Light Wash Shirt 224 -317-002",
    quantity: 1,
  },
  {
    price: "price_1PAxebP3PqdLnapLsQgcnrQ3",
    name: "Bemisaal Rivoli Unstitched Fabric Blended-LF",
    quantity: 1,
  },
  {
    price: "price_1PAxh4P3PqdLnapL1KkFFOFu",
    name: "Danedar Dyed Shirt WGK-DRW-DY-3295",
    quantity: 1,
  },
  {
    price: "price_1PAxjSP3PqdLnapLUfWJN7eH",
    name: "Rod Silk Embroidered Shirt WGK-RDW-DE-3233",
    quantity: 1,
  },
  {
    price: "price_1PAxlrP3PqdLnapLjVaQ2ZGq",
    name: "Yellow Styling Kurta KR-STY24-015",
    quantity: 1,
  },
];
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const POST = async (request: NextRequest) => {
  const cartItemsArray = await request.json();
  try {
    const line_items = originalData.filter((item: typeofData) => {
      for (let index = 0; index < cartItemsArray.length; index++) {
        const element: sanityProducstType = cartItemsArray[index];
        if (element.productname == item.name) {
          return true;
        }
      }
    });
    const lineToSend = line_items.map((item: typeofData) => {
      return {
        price: item.price,
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineToSend,
      mode: "payment",
      success_url: `${request.nextUrl.origin}/?success=true`,
      cancel_url: `${request.nextUrl.origin}/?success=false`,
    });
    // console.log("nasir sessions", session);
    return NextResponse.json({ link: session.url });
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ error });
  }
};
