import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { KanbanProvider } from '@/components/context/Kanbancontext'
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import { Analytics } from '@vercel/analytics/react';



export default function App({ Component, pageProps: {session,...pageProps} }: AppProps) {
  return     (

  <SessionProvider session={session}>
    <KanbanProvider>
    <ToastContainer 
    closeButton={false}  autoClose={1000} transition={Zoom}/>

  <Component {...pageProps} />
  <Analytics />

  </KanbanProvider>

</SessionProvider>
)
}
