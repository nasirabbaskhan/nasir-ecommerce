import React from "react";
import Skeleton from "react-loading-skeleton";

export default function HeroLoading() {
  return (
    <div className="main flex flex-col lg:flex-row  justify-center items-center mt-7">
      {/* left side */}
      <div className="lef flex-1  lg:space-y-9 space-y-6">
        <p className="tag md:text-lg text-2xl text-center md:text-left text-gray-700">
          {/* --clothing */}
          <Skeleton width={70} height={10} />
        </p>
        <h1 className="heading md:text-5xl text-4xl  font-bold ">
          {/* Style a way to say who you are without having to speak.{" "} */}

          <Skeleton width={600} height={20} count={2} />
          <Skeleton width={300} height={20} />
        </h1>
        <p className="paragraph max-w-md text-xl text-gray-800">
          {/* Anyone can beat you but no one can beat your outfit as long as you
          wear Nasir Outfit. */}
          <Skeleton width={600} height={10} />
          <Skeleton width={400} height={10} />
        </p>
        <div className="buttons flex justify-center lg:justify-start space-x-5">
          <div className="leftbutton ">
            {/* <Button className="bg-gray-600">Explore cloths</Button> */}
            <Skeleton width={90} height={30} />
          </div>

          <div className="Righttbutton ">
            {/* <Button className="bg-black space-x-7">
              Get started&nbsp; <ArrowRight size={18} />
            </Button> */}
            <Skeleton width={90} height={30} />
          </div>
        </div>
      </div>
      {/* right-side */}
      <div className="right  p-3 mt-10 lg:mt-0 rounded-xl ring-1 bg-gray-900/5 ring-inset ring-gray-900/10 ">
        <Skeleton width={520} height={500} />
        {/* <Image
          className="xl:w-[525px] flex-grow xl:h-[510px] md:h-[460px] md:w-[460px] h-[370px] [40px]"
          src={"/heroImge.jpg"}
          width={1000}
          height={1000}
          alt="heroImage"
        /> */}
      </div>
    </div>
  );
}
