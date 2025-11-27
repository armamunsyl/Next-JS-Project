"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav className="py-4 px-6 shadow flex items-center justify-between bg-white">

      <h1 className="text-2xl font-bold">GadgetShop</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:opacity-70">Home</Link>
        <Link href="/items" className="hover:opacity-70">Items</Link>
        <Link href="/about" className="hover:opacity-70">About</Link>
        <Link href="/contact" className="hover:opacity-70">Contact</Link>

        {session ? (
          <>
            <Link
              href="/manage-products"
              className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Manage
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <Link 
            href="/login" 
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="block md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col gap-4 md:hidden px-6">
          <Link href="/" onClick={() => setOpen(false)} className="hover:opacity-70">Home</Link>
          <Link href="/items" onClick={() => setOpen(false)} className="hover:opacity-70">Items</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:opacity-70">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:opacity-70">Contact</Link>

          {session ? (
            <>
              <Link
                href="/manage-products"
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-green-600 text-white rounded text-center hover:bg-green-700"
              >
                Manage
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded text-center hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              href="/login"
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded text-center hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
