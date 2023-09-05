import React, { Children } from "react";

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen px-4 py-8 mx-auto flex justify-center items-center flex-col
            bg-gray-800
        ">
            <h2 className="text-3xl text-gray-300">Login</h2>
            {children}
        </div>
    )
}
