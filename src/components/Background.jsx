import React from "react";

function Background() {
  return (
    <>
      <div className="z-[2] w-full h-screen">
        <div className="absolute w-full py-10 top-[5%] flex justify-center text-zinc-600 text-xl font-semibold">
          Welcome to the Gallery !!
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900">
          photos+videos
        </h1>
      </div>
    </>
  );
}

export default Background;
