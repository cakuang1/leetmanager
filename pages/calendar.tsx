import React from "react"
import Layout from "@/components/layout"
import KanbanBoard from "@/components/kanban/app"
const daysToShow = 10; // Number of days to show
const today = new Date(); // Get the current date




function generateDateArray(startDate: Date, numberOfDates: number): string[] {
  const dateArray: string[] = [];
  const daysInMilliseconds = 24 * 60 * 60 * 1000;
  for (let i = -numberOfDates; i <= numberOfDates; i++) {
    const currentDate = new Date(startDate.getTime() + i * daysInMilliseconds);
    const formattedDate = `${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
    dateArray.push(formattedDate);
  }

  return dateArray;
}



const dates = generateDateArray(today, daysToShow);



export default function Calender() {
  return (
    <Layout showFooter = {false}>
<div className=" h-screen max-h-screen ">
    <KanbanBoard dates = {dates}/>
</div>
      </Layout>
  )
}
