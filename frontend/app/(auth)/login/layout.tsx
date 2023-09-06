import React, { Children } from "react";
import {CgProfile} from 'react-icons/cg'

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen px-4 py-8 mx-auto flex justify-center items-center flex-col
            bg-white
        ">
            <div className="flex justify-center items-center gap-3">
                <h2 className="text-3xl text-gray-700">Login</h2>
                <CgProfile size={30} className="animate-bounce duration-1000"/>
            </div>
            {children}
        </div>
    )
}
