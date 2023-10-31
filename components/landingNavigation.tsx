import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";



export default function Navigation() {
  const router = useRouter();
  const linkStyle = (pathname: string) => ({
    textDecoration: router.pathname === pathname ? "underline" : "none",
    color: router.pathname === pathname ? "text-leetcode" : "text-black", // Use Tailwind CSS color classes
  });
  const { data: session, status } = useSession()
  // Check if the user is authenticated
  const [isLogin, setIsLogin] = useState(false);


  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="">
    <nav className="bg-white  text-gray-600 ">
      
      <div className="flex gap-3 justify-center p-6">
        <div>
  <div className={`  `}>
        <div className="flex gap-4 ">
          <Link href="/problems" className={`hover:text-gray-500 ${linkStyle("/problems")} flex gap-4 bg-gray-100 p-2 rounded`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6`} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20V4h16v16H4ZM5 9.154h14V5H5v4.154Zm4.998 4.923h4.004v-3.923H9.998v3.923Zm0 4.923h4.004v-3.923H9.998V19ZM5 14.077h3.998v-3.923H5v3.923Zm10.002 0H19v-3.923h-3.998v3.923ZM5 19h3.998v-3.923H5V19Zm10.002 0H19v-3.923h-3.998V19Z"/></svg> Tabular
          </Link>

          <Link href="/calendar" className={`hover:text-gray-500 ${linkStyle("/problems")} flex gap-4 p-2`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5`} width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M2 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm6 0H3v2h5V3ZM2 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Zm6 0H3v2h5V9Zm-5 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3Zm0 1h5v2H3v-2Zm8-12a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V3Zm6 0h-5v2h5V3Zm-5 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5Zm0 1h5v2h-5V9Z"/></svg>
             Kanban

          </Link>
          <Link href="/dashboard" className={`hover:text-gray-500 ${linkStyle("/problems")} flex gap-4 p-2`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5`} width="24" height="24" viewBox="0 0 32 32"><g fill="currentColor"><path d="M29 17.518a.5.5 0 0 0-.5-.5H15V3.5a.5.5 0 0 0-.5-.5C6.505 3 0 9.495 0 17.479C0 25.757 6.243 32 14.521 32C22.234 32 29 25.232 29 17.518zm-28-.039c0-7.266 5.787-13.206 13-13.47v13.509c0 .276.224.5.5.482h13.49c-.283 6.99-6.455 13-13.469 13C6.813 31 1 25.188 1 17.479z"/><path d="M17.5 15h13.999c.276.018.501-.224.501-.5C32 6.505 25.495 0 17.5 0a.5.5 0 0 0-.5.5v14.018c0 .276.224.5.5.482zM18 1.009c7.063.259 12.759 5.97 12.994 13.009H18V1.009z"/></g></svg>              Dashboard
          </Link>
        </div>
  </div>
        </div>


          </div>
          <div className="flex items-center ">          
          <div className={`${
          isLogin     ? ' opacity-100'
          : ' opacity-0'
        }   bg-white hover:bg-gray-100  p-1 mr-2 border rounded-lg shadow-lg transition-opacity ease-in-out duration-200 transform scale-100`} style={{ pointerEvents: isLogin ? 'auto' : 'none' }}>
          {session ? <button className="flex" onClick={() => signOut()}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"/></svg>Logout</button> : <button className="flex" onClick={() => signIn()}> Log in</button> }</div>
        <div className="profile mr-24">
          <div className="w-8 h-8  border rounded-lg hover:bg-gray-500" onClick={toggleLogin}>
            {status === "authenticated" && session.user?.image ? <img src={session.user?.image} ></img> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1ZM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12Zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21Z"/></g></svg>}
            </div>
            </div>
        </div>
        

    
    </nav>

    </div>
  );
}
