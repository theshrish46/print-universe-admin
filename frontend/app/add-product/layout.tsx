import React from "react";

type TProps = {
  children: React.ReactNode;
};

export default function addProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1>Add Product</h1>
      {children}
    </div>
  );
}
