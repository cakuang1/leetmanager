import React from "react"
import Layout from "@/components/layout"
import KanbanBoard from "@/components/kanban/app"



export default function Calender() {
  return (
    <Layout showFooter = {false}>
<div className=" h-screen max-h-screen ">
    <KanbanBoard/>
</div>
      </Layout>
  )
}
