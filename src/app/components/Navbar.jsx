"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" py-4 px-6 shadow flex items-center justify-between bg-white">

      <h1 className="text-2xl font-bold">GadgetShop</h1>

      <div className="hidden md:flex items-center gap-6">
        <a href="/" className="hover:opacity-70">Home</a>
        <a href="/items" className="hover:opacity-70">Items</a>
        <a href="/about" className="hover:opacity-70">About</a>
        <a href="/contact" className="hover:opacity-70">Contact</a>
        <a 
          href="/login" 
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </a>
      </div>

      <button 
        className="block md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoClose /> : <IoMenu />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col gap-4 md:hidden px-6">
          <Link href="/" className="hover:opacity-70">Home</Link>
          <Link href="/items" className="hover:opacity-70">Items</Link>
          <Link href="/about" className="hover:opacity-70">About</Link>
          <Link href="/contact" className="hover:opacity-70">Contact</Link>
          <Link 
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded text-center hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
