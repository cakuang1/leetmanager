import ProgressTracker from "@/components/completed"
import Layout from "@/components/layout";
import Todo from "@/components/todolist";




const progressData = [
  {
    question: 'Problem 1',
    difficulty: 'Medium',
    topics: ['Array', 'Dynamic Programming'],
    timeTaken: 45,
    dateCompleted: new Date('2023-01-15'),
    codeOrNotes: 'Code/Notes',
    id : 1
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
];




export default function Problems() {
  return (
    <Layout>
      <ProgressTracker progressList={progressData}/>
      <Todo progressList={progressData}/>
      </Layout>
  )
}
