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
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="">
    <nav className="bg-white  border-b font-semibold text-gray-700 ">
      
      <div className="flex items-center h-20 justify-between p-2 ">

      <div className="flex gap-3">
        <div>
        <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" onClick = {toggleNav} className=" ml-20 hover:bg-gray-200 h-7 w-7 rounded-lg transition-all duration-300" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14M5 12h14M5 7h14"/></svg>
        </div>

  <div className={`${
          isNavOpen     ? 'h-32 opacity-100 transition-all' 
          : 'opacity-0 transition-all'
        }  absolute ml-10 bg-white p-4 mt-3  border rounded-lg shadow-lg transition-opacity ease-in-out duration-200 transform scale-100`} style={{ pointerEvents: isNavOpen ? 'auto' : 'none' }}>
        <div className="flex  flex-col gap-2">
          <Link href="/problems" className={`hover:text-gray-500 ${linkStyle("/problems")} flex gap-4`}>
          <svg xmlns="http://www.w3.org/2000/svg"className={`h-6 w-6`}  width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M29 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2Zm-2 0v4H5V5Zm0 22H5v-4h22Zm0-6H5v-4h22Zm0-6H5v-4h22Z"/></svg>
              Problems
          </Link>

          <Link href="/calendar" className={`hover:text-gray-500 ${linkStyle("/problems")} flex gap-4`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6`} width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.438 4.954H16.5V3.546c0-.262-.23-.512-.5-.5a.509.509 0 0 0-.5.5v1.408h-7V3.546c0-.262-.23-.512-.5-.5a.509.509 0 0 0-.5.5v1.408H5.562a2.503 2.503 0 0 0-2.5 2.5v11c0 1.379 1.122 2.5 2.5 2.5h12.875c1.379 0 2.5-1.121 2.5-2.5v-11a2.502 2.502 0 0 0-2.499-2.5zm-12.876 1H7.5v.592c0 .262.23.512.5.5c.271-.012.5-.22.5-.5v-.592h7v.592c0 .262.23.512.5.5c.271-.012.5-.22.5-.5v-.592h1.937c.827 0 1.5.673 1.5 1.5v1.584H4.062V7.454c0-.827.673-1.5 1.5-1.5zm12.876 14H5.562c-.827 0-1.5-.673-1.5-1.5v-8.416h15.875v8.416a1.5 1.5 0 0 1-1.499 1.5z" />
            </svg>
             Calendar

          </Link>
          <Link href="/dashboard" className={`hover:text-gray-500 ${linkStyle("/problems")} flex gap-4`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6`} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/></svg>
              Dashboard
          </Link>
        </div>
  </div>

        </div>
        <Link href={'/'}>          <div className="flex items-center font-bold" >LeetTracker</div></Link>

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
        
      </div>
    
    </nav>

    </div>
  );
}
