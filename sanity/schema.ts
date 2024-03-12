import { type SchemaTypeDefinition } from "sanity";
import { Products } from "./scemas/products";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products],
};
