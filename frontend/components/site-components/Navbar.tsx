"use client";
import React, { useState } from "react";

// import Modal from './Modal'
import Link from "next/link";
import { CgAdd, CgLogOut, CgProductHunt, CgProfile } from "react-icons/cg";
import { BsBoxSeam } from "react-icons/bs";

// State Management
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";

const Navbar = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen w-full gap-10">
      <div className="my-4 text-xl">modal provider</div>

      <ul className="flex flex-col justify-around items-start gap-5">
        <li>
          <Link
            href={"/add-product"}
            className="flex gap-3 justify-center items-center"
          >
            <CgAdd size={23} />
            Add Product
          </Link>
        </li>
        <li>
          <Link
            href={"/profile"}
            className="flex gap-3 justify-center items-center"
          >
            <CgProfile size={25} />
            Profile
          </Link>
        </li>

        <li>
          <Link
            href={"/products"}
            className="flex gap-3 justify-center items-center"
          >
            <BsBoxSeam size={25} />
            Products
          </Link>
        </li>
        <li>
          {isAuthenticated ? (
            <button
              className="danger flex justify-center items-center gap-3"
              onClick={handleLogoutClick}
            >
              <CgLogOut size={23} />
              Logout
            </button>
          ) : (
            <button>
              <Link href={"/login"}>Login</Link>
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
