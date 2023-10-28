import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { KanbanProvider } from '@/components/context/Kanbancontext'
import { ModalProvider } from '@/components/context/Modalcontext'
import Modal from '@/components/kanban/Modal'


export default function App({ Component, pageProps: {session,...pageProps} }: AppProps) {
  return     (
  

  <SessionProvider session={session}>
          <KanbanProvider>
          <ModalProvider>

          <Modal/>
  <Component {...pageProps} />

  </ModalProvider>
  </KanbanProvider> 

</SessionProvider>
)
}
