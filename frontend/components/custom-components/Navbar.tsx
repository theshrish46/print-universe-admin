'use client'

import Link from "next/link";

import { CgProfile } from 'react-icons/cg'
import { Button } from "../ui/button";
// import { Dialog } from "../ui/dialog";
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     NavigationMenuViewport,
//     navigationMenuTriggerStyle
// } from "../ui/navigation-menu";

export default function Navbar() {

    return (
        <div className="w-full mx-auto my-4
            flex justify-end items-start
        ">
            <nav className="flex justify-end items-center">
                {/* <Dialog></Dialog> */}

                <ul className="flex justify-center items-center gap-5">
                    <li>
                        <Link href={'/profile'}>
                            {/* Profile */}
                            <CgProfile size={25} />
                        </Link>
                    </li>
                    <li>
                        <Button variant={'destructive'}>
                            <Link href={'/logout'}>
                                Logout
                            </Link>
                        </Button>
                    </li>
                </ul>
            </nav>

            {/* user details here and conditional rendering here after connecting to the server and databases*/}

            {/* <Button>
                <Link href={'/login'}>
                    Login
                </Link>
            </Button> */}
        </div >
    )
}
