import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();
  const linkStyle = (pathname: string) => ({
    textDecoration: router.pathname === pathname ? "underline" : "none",
    color: router.pathname === pathname ? "text-leetcode" : "text-black", // Use Tailwind CSS color classes
  });



  return (
    <nav className="bg-white flex justify-between border-b">
      <div className="p-4">
        <div className="hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-20"></div>
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="flex space-x-4">
          <Link href="/problems" className={`hover:underline ${linkStyle("/problems")}`}>

              Problems

          </Link>

          <Link href="/calendar" className={`hover:underline ${linkStyle("/calendar")}`}>

             Calendar

          </Link>
          <Link href="/metrics" className={`hover:underline ${linkStyle("/metrics")}`}>

              Metrics

          </Link>
        </div>
      </div>
      <div className="p-2">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
