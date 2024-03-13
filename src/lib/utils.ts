import z from "zod";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// it is for type safty
export const validateUserid = z.object({
  userid: z.string(),
});

// it is for type safty
export const validatePostData = z.object({
  userid: z.string(),
  productid: z.string(),
  quantity: z.number(),
});
export const validateDelete = z.object({
  userid: z.string(),
  productid: z.string(),
});
