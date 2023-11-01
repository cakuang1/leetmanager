import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";




export default function LandingNavigation() {
  const router = useRouter();
  const { data: session, status } = useSession()
    const [isLogin, setIsLogin] = useState(false);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };


  return (
    <div className="w-full ">
    <nav className="bg-white ">
      <div className="flex gap-3 justify-between p-4  ">
        <div className="Title font-bold text-lg ml-10">LeetTracker</div>
        <div className="flex items-center hover:cursor-pointer">          
          <div className={`${
          isLogin     ? ' opacity-100'
          : ' opacity-0'
        }   bg-white hover:bg-gray-100  p-2 mr-2 border  shadow-lg transition-opacity ease-in-out duration-200 transform scale-100`} style={{ pointerEvents: isLogin ? 'auto' : 'none' }}>
          {session ? <button className="flex" onClick={() => signOut()}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"/></svg>Sign Out</button> :
                
    <button className="flex" onClick={() => signIn('github',{ callbackUrl: '/tabular' })}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21v-2h7V5h-7V3h9v18h-9Zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5l-5 5Z"/></svg>Sign in</button> }</div>
        <div className="profile mr-24">
          <div className="w-10 h-10  border rounded hover:bg-gray-100 flex items-center justify-center" onClick={toggleLogin}>
            {status === "authenticated" && session.user?.image ? <img src={session.user?.image} ></img> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1ZM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12Zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21Z"/></g></svg>}
            </div>
            </div>
        </div>
          </div>
    </nav>
    </div>
  );
}
