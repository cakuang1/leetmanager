import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { useSession} from "next-auth/react";

export default function Navigation() {
  const router = useRouter();
  const linkStyle = (pathname: string) => {
    if  (router.pathname === pathname) {
      return "text-gray-500 bg-gray-100"
    }
  }

  const { data: session, status } = useSession()
  return (
    <div className="">
    <nav className="bg-white  text-gray-600 ">
      <div className="flex gap-3 justify-center p-6">
        <div>
  <div className={` `}>
        <div className="flex gap-4 ">
          <Link href="/tabular" className={`hover:text-gray-600 ${linkStyle("/tabular")} flex gap-4 p-2 rounded `}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6`} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20V4h16v16H4ZM5 9.154h14V5H5v4.154Zm4.998 4.923h4.004v-3.923H9.998v3.923Zm0 4.923h4.004v-3.923H9.998V19ZM5 14.077h3.998v-3.923H5v3.923Zm10.002 0H19v-3.923h-3.998v3.923ZM5 19h3.998v-3.923H5V19Zm10.002 0H19v-3.923h-3.998V19Z"/></svg> Tabular
          </Link>
          <Link href="/kanban" className={`hover:text-gray-500 ${linkStyle("/kanban")} flex gap-4 p-2`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5`} width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M2 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm6 0H3v2h5V3ZM2 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Zm6 0H3v2h5V9Zm-5 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3Zm0 1h5v2H3v-2Zm8-12a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V3Zm6 0h-5v2h5V3Zm-5 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5Zm0 1h5v2h-5V9Z"/></svg>
             Kanban
          </Link>
          <Link href="/dashboard" className={`hover:text-gray-500 ${linkStyle("/dashboard")} flex gap-4 p-2`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5`} width="24" height="24" viewBox="0 0 32 32"><g fill="currentColor"><path d="M29 17.518a.5.5 0 0 0-.5-.5H15V3.5a.5.5 0 0 0-.5-.5C6.505 3 0 9.495 0 17.479C0 25.757 6.243 32 14.521 32C22.234 32 29 25.232 29 17.518zm-28-.039c0-7.266 5.787-13.206 13-13.47v13.509c0 .276.224.5.5.482h13.49c-.283 6.99-6.455 13-13.469 13C6.813 31 1 25.188 1 17.479z"/><path d="M17.5 15h13.999c.276.018.501-.224.501-.5C32 6.505 25.495 0 17.5 0a.5.5 0 0 0-.5.5v14.018c0 .276.224.5.5.482zM18 1.009c7.063.259 12.759 5.97 12.994 13.009H18V1.009z"/></g></svg>              Dashboard
          </Link>

        </div>
  </div>
        </div>
          </div>
    
    
    </nav>

    </div>
  );
}

