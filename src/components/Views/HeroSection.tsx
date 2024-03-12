import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroImage from "/heroImge.jpg";

export default async function HeroSection() {
  // await new Promise((res) => setTimeout(res, 7000));
  return (
    <>
      <div className="main flex flex-col lg:flex-row  justify-center items-center mt-7">
        {/* left side */}
        <div className="lef flex-1  lg:space-y-9 space-y-6">
          <p className="tag md:text-lg text-2xl text-center md:text-left text-gray-700">
            --clothing
          </p>
          <h1 className="heading md:text-5xl text-4xl  font-bold max-w-[612px] ">
            Style a way to say who you are without having to speak.{" "}
          </h1>
          <p className="paragraph max-w-md text-xl text-gray-800">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Nasir Outfit.
          </p>
          <div className="buttons flex justify-center lg:justify-start space-x-5">
            <div className="leftbutton ">
              <Button className="bg-gray-600">Explore cloths</Button>
            </div>

            <div className="Righttbutton ">
              <Button className="bg-black space-x-7">
                Get started&nbsp; <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        {/* right-side */}
        <div className="right  p-3 mt-10 lg:mt-0 rounded-xl ring-1 bg-gray-900/5 ring-inset ring-gray-900/10 ">
          <Image
            className="xl:w-[525px] flex-grow xl:h-[510px] md:h-[460px] md:w-[460px] h-[370px] [40px]"
            src={"/heroImge.jpg"}
            width={1000}
            height={1000}
            alt="heroImage"
          />
        </div>
      </div>
    </>
  );
}
