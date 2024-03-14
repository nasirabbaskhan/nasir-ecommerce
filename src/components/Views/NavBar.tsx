import Link from "next/link";

import { Button, buttonVariants } from "../ui/button";
//import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Divide, Search, ShoppingBag, ShoppingCart } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import Avatordisplay from "../ui/Avatordisplay";
import { SearchFeature } from "../ui/SearchFeature";

interface Inavbar {
  label: string;
  href: string;
}
const navBarArray: Inavbar[] = [
  {
    label: "Male",
    href: "/product/male",
  },
  {
    label: "Female",
    href: "/product/female",
  },

  {
    label: "Kids",
    href: "/product/kids",
  },
  {
    label: "Products",
    href: "/products",
  },
];
export default async function NavBar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // console.log("kinde_Users", user);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 md:space-y-0 space-y-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl cursor-pointer">logo</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {navBarArray.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  href={item.href}
                  className="mr-5 cursor-pointer hover:text-gray-900"
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>
        <div className="space-x-6 flex items-center">
          <SearchFeature />
          <Link href={"/cart"}>
            <ShoppingCart size={27} />
          </Link>

          {!user ? (
            <div className="flex space-x-4">
              {" "}
              <LoginLink
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}
              >
                Sign in
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                })}
              >
                Sign up
              </RegisterLink>
            </div>
          ) : (
            <Avatordisplay userData={user} />
          )}
        </div>
      </div>
    </header>
  );
}
