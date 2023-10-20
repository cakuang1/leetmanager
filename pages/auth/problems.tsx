import ProgressTracker from "@/components/finished"

const progressData = [
  {
    question: 'Problem 1',
    difficulty: 'Medium',
    topics: ['Array', 'Dynamic Programming'],
    timeTaken: 45,
    dateCompleted: new Date('2023-01-15'),
    codeOrNotes: 'Code and notes for problem 1...',
  },
  {
    question: 'Problem 2',
    difficulty: 'Easy',
    topics: ['String', 'Hashing'],
    timeTaken: 30,
    dateCompleted: new Date('2023-01-20'),
    codeOrNotes: 'Code and notes for problem 2...',
  },
  // Add more ProgressTrackerRow objects as needed
];


export default function Problems() {
  return (
    <div>
      <ProgressTracker progressList={progressData}/>
    </div>
  )
}
