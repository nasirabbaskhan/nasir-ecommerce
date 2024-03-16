import { defineField, defineType } from "sanity";

export const Products = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "productname",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "productname",
        maxLength: 200,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 50),
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block", // for ritch text
        },
      ],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "producttype",
      title: "Product Type",
      type: "string",
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "quantity",
      title: "quantity",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
});
