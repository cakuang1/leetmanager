import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { KanbanProvider } from '@/components/context/Kanbancontext'



export default function App({ Component, pageProps: {session,...pageProps} }: AppProps) {
  return     (
  

  <SessionProvider session={session}>
    <KanbanProvider>


  <Component {...pageProps} />

  </KanbanProvider>

</SessionProvider>
)
}
