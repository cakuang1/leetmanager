import React from "react"
import Layout from "@/components/layout"
import KanbanBoard from "@/components/kanban/app"
import { KanbanProvider } from "@/components/kanban/Kanbancontext"





export default function Calender() {
  return (
    <KanbanProvider>

    <Layout showFooter = {false}>
<div className=" h-screen max-h-screen ">
    <KanbanBoard/>
</div>
      </Layout>
          </KanbanProvider>
  )
}





