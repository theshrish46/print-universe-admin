"use client";
import React, { useState } from "react";

// import Modal from './Modal'
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

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
    <div className="flex justify-between items-center">
      <div>modal provider</div>

      <ul className="flex justify-around items-center gap-5">
        <li>
          <Link href={"/add-product"}>Add Product</Link>
        </li>
        <li>
          <Link href={"/profile"}>
            <CgProfile size={25} />
          </Link>
        </li>
        <li>
          {isAuthenticated ? (
            <button className="danger" onClick={handleLogoutClick}>Logout</button>
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
