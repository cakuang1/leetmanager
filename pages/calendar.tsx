import React from "react"
import Layout from "@/components/layout"
import KanbanBoard from "@/components/kanban/app"
import { KanbanProvider } from "@/components/context/Kanbancontext"





export default function Calender() {
  return (

    <Layout showFooter = {false}>
      <div className="flex border-t">

      <div className=" h-screen max-h-screen ">
    <KanbanBoard/>
</div>
      </div>

      </Layout>
  )
}





