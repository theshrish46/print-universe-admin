import React from "react";
import { useRouter } from "next/navigation";

type TProp = {
  children: React.ReactNode;
};

const layout = ({ children }: TProp) => {
  return (
    <div
      className="bg-white h-screen w-full
            flex justify-center items-center flex-col
        "
    >
      {children}
    </div>
  );
};

export default layout;
