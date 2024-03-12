import React, { PropsWithChildren } from "react";

export default function Wraper({ children }: PropsWithChildren) {
  return (
    <div className="xl:max-w-[1250px] lg:max-w-[920px] md:max-w-[730px] max-w-[300px] min-h-screen mx-auto">
      {children}
    </div>
  );
}
