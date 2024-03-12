import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  const arr: number[] = [1, 2, 3];
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <div className="lg:w-1/2 w-full space-y-5">
              {/* image skeleton */}
              <Skeleton
                width={500}
                height={600}
                className=" w-full lg:h-auto h-64  rounded"
              />

              {/* image row skeleton */}
              <div className="flex gap-7 md:max-w-28 max-w-16 w-full  ">
                <Skeleton
                  width={150}
                  height={150}
                  className="w-full lg:h-auto h-64  rounded"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* brand name skeleton */}
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                <Skeleton width={200} height={12} />
              </h2>
              {/* heading skeleton */}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                <Skeleton width={430} />
              </h1>
              {/* revies skeleton */}
              <div className="flex mb-4">
                <span className="flex items-center">
                  <Skeleton width={15} height={15} />
                  <Skeleton width={15} height={15} />
                  <Skeleton width={15} height={15} />
                  <Skeleton width={15} height={15} />

                  <span className="text-gray-600 ml-3">
                    {/* 4 Reviews */}
                    <Skeleton width={48} height={15} />
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <Skeleton width={15} height={15} />
                  <Skeleton width={15} height={15} />
                  <Skeleton width={15} height={15} />
                </span>
              </div>

              {/* description skeleton */}
              <Skeleton height={130} width={430} />

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex justify-center items-center space-x-8">
                  <Skeleton width={55} height={30} />
                  <div className="space-x-3 flex">
                    <Skeleton
                      className=" flex rounded-full"
                      width={30}
                      height={30}
                    />
                    <Skeleton
                      className=" flex rounded-full"
                      width={30}
                      height={30}
                    />
                    <Skeleton
                      className=" flex rounded-full"
                      width={30}
                      height={30}
                    />
                    <Skeleton
                      className=" flex rounded-full"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Skeleton width={90} height={30} />

                <Skeleton className="rounded" width={100} height={35} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* three products skeleton */}

      <div className="container px-5 py-24 mx-auto flex justify-center items-center flex-wrap">
        {arr.map((item, index) => {
          return (
            <section key={index} className="p-4 md:w-1/3  ">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/* image skeleton */}
                <Skeleton className="object-cover lg:w-120  object-center lg:h-48 md:h-36 w-full h-96 " />

                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <Skeleton width={30} height={10} />
                  </h2>

                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    {/* product name */}
                  </h1>
                  <p className="leading-relaxed truncate mb-3">
                    <Skeleton />
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      {/* learn more */}
                      <Skeleton width={35} height={10} />
                    </div>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <Skeleton height={15} width={15} />
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <Skeleton height={15} width={15} />
                    </span>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
