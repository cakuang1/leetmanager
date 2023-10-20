import ProgressTracker from "@/components/finished"

const progressData = [
  {
    question: 'Problem 1',
    difficulty: 'Medium',
    topics: ['Array', 'Dynamic Programming'],
    timeTaken: 45,
    dateCompleted: new Date('2023-01-15'),
    codeOrNotes: 'Code/Notes',
  },
  {
    question: 'Problem 2',
    difficulty: 'Easy',
    topics: ['String', 'Hash Table'],
    timeTaken: 30,
    dateCompleted: new Date('2023-01-20'),
    codeOrNotes: 'Code/Notes',
  },
  // Add more ProgressTrackerRow objects as needed
];




export default function Problems() {
  return (
    <div className="w-3/5 mx-auto ">
      <ProgressTracker progressList={progressData}/>
    </div>
  )
}
