import { Image } from "sanity";

export interface IDescription {
  level: number;
  _type: string;
  style: string;
  _key: string;
  listItem: string;
  markDefs: any[];
  children: any[];
}

// export interface IImage {
//   _type: string;
//   alt: string;
//   _key: string;
//   asset: {
//     _ref: string;
//     _type: string;
//   };
// }

export interface Islug {
  current: string;
  _type: string;
}

// sanityProducstType;
export interface sanityProducstType {
  quantity: number;
  image: Image[];
  producttype: string;
  productname: string;
  slug: Islug;
  description: IDescription[];
  size: string[];
  price: number;
  _id: string;
}
export interface allSanityProducstType {
  query: string;
  result: Array<sanityProducstType>;
}
