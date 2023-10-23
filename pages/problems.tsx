import ProgressTracker from "@/components/problems/completed"
import Layout from "@/components/layout";
import Todo from "@/components/problems/todolist";
import { useEffect,useState } from "react";


//As a user I,when I click on the problems page, I am able to see which problems are on my todo list. I am also able to switch between todo and completed tabs
  // API call to grab the entire list of a user and distribute compoleted and non completed
  // Todo list should be ordered by lowest date first, date asc
  // Completed should be ordered by most recently completed, date desc


  /*const progressData = [
  {
    id : 1,
    questionid : 23,
    userid : 432,
    question: 'Problem 1',
    difficulty: 'Medium',
    topics: ['Array', 'Dynamic Programming'],
    timeTaken: 45,
    dateCompleted: new Date('2023-01-15'),
    datePlanned: new Date('2023-02-19'),
    completed : true,
    codeOrNotes: '12342342',
  },
  {
    question: 'Problem 2',
    difficulty: 'Easy',
    topics: ['String', 'Hash Table'],
    timeTaken: 30,
    dateCompleted: new Date('2023-01-20'),
    codeOrNotes: 'Code/Notes',
    id: 2
  },
  // Add more ProgressTrackerRow objects as needed
]; */




export default function Problems() {
  

  
  const [e]


  return (
    <Layout>
      <div className="w-3/5 mx-auto  h-screen max-h-screen overflow-auto">
        
      </div>

      </Layout>
  )
}
