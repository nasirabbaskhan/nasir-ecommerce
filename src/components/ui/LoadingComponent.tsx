import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const arr: number[] = [1, 2, 3, 4, 5, 6];
export default function LoadingComponent({
  cardLimit,
  isLoaing,
}: {
  cardLimit: number;
  isLoaing: boolean;
}) {
  // log("is loading ", isLoaing);
  return (
    <>
      {isLoaing && (
        <div>
          <h1 className="text-gray-900 text-4xl font-bold text-center">
            <Skeleton width={350} height={20} />
          </h1>
          <p className="text-gray-900 text-2xl font-semibold text-center mt-2">
            <Skeleton width={300} height={20} />
          </p>
        </div>
      )}
      <div className="container px-5 py-24 mx-auto flex justify-center items-center flex-wrap">
        {arr.map((item, index) => {
          if (item > cardLimit) return null;
          return (
            <section className="p-4 md:w-1/3" key={index}>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Skeleton className="object-cover lg:w-120  object-center lg:h-48 md:h-36 w-full h-96 " />

                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <Skeleton />
                  </h2>

                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    <Skeleton />
                  </h1>
                  <p className="leading-relaxed truncate mb-3">
                    <Skeleton />
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      <Skeleton />
                    </div>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <Skeleton />
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
