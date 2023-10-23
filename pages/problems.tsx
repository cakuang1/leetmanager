import ProgressTracker from "@/components/problems/completed"
import Layout from "@/components/layout";
import Todo from "@/components/problems/todolist";
import { useEffect,useState } from "react";


//As a user I,when I click on the problems page, I am able to see which problems are on my todo list. I am also able to switch between todo and completed tabs
  // API call to grab the entire list of a user and distribute compoleted and non completed
  // Todo list should be ordered by lowest date first, date asc
  // Completed should be ordered by most recently completed, date desc

  interface ProgressTrackerRow {
    id: number;
    question: string;
    difficulty: string;
    topics: string[];
    timeTaken: number;
    dateCompleted: Date | null;
    datePlanned: Date | null;
    codeOrNotes: string;
  }



export default function Problems() {

  const [todo,settodo ] = useState<boolean>(true); 
  const [todoList, setTodoList] = useState<ProgressTrackerRow[]>([]);
  const [completedList, setCompletedList] = useState<ProgressTrackerRow[]>([]);





  function handletabclicks(){
    
  }





  useEffect(() => {
    // Distribute questions into todo and completed lists
    const transformedQuestionsList = questionsList.map((question) => {
      return {
        id: question.id,
        question: question.question,
        difficulty: question.difficulty,
        topics: question.topics,
        timeTaken: question.timeTaken,
        dateCompleted: question.dateCompleted,
        datePlanned: question.datePlanned,
        codeOrNotes: question.codeOrNotes,
      };
    });
  
    const newTodoList = transformedQuestionsList.filter((question) => !question.dateCompleted);
    const newCompletedList = transformedQuestionsList.filter((question) => question.dateCompleted);
    setTodoList(newTodoList);
    setCompletedList(newCompletedList);
  }, [questionsList]);
  


  return (
    <Layout>
      <div className="w-3/5 mx-auto  h-screen max-h-screen overflow-auto">
        <div className="tab section navigation"></div>
      </div>

      </Layout>
  )
}





// helpers ignore
const questionsList = [
  {
    id: 1,
    questionid: 23,
    userid: 432,
    question: 'Problem 1',
    difficulty: 'Medium',
    topics: ['Array', 'Dynamic Programming'],
    timeTaken: 45,
    dateCompleted: new Date('2023-01-15'),
    datePlanned: new Date('2023-02-19'),
    completed: true,
    codeOrNotes: '12342342',
  },
  {
    id: 2,
    questionid: 42,
    userid: 432,
    question: 'Problem 2',
    difficulty: 'Hard',
    topics: ['Graphs', 'Backtracking'],
    timeTaken: 60,
    dateCompleted: new Date('2023-03-05'),
    datePlanned: new Date('2023-02-28'),
    completed: true,
    codeOrNotes: '56785678',
  },
  {
    id: 3,
    questionid: 55,
    userid: 432,
    question: 'Problem 3',
    difficulty: 'Easy',
    topics: ['String', 'HashMap'],
    timeTaken: 30,
    dateCompleted: new Date('2023-02-10'),
    datePlanned: new Date('2023-02-14'),
    completed: true,
    codeOrNotes: '78907890',
  },
  {
    id: 4,
    questionid: 78,
    userid: 432,
    question: 'Problem 4',
    difficulty: 'Medium',
    topics: ['Array', 'Sorting'],
    timeTaken: 40,
    dateCompleted: null, // Not completed yet
    datePlanned: new Date('2023-02-25'),
    completed: false,
    codeOrNotes: '22445353', // No code or notes
  },
  {
    id: 5,
    questionid: 91,
    userid: 432,
    question: 'Problem 5',
    difficulty: 'Hard',
    topics: ['Dynamic Programming', 'Tree'],
    timeTaken: 75,
    dateCompleted: new Date('2023-02-21'),
    datePlanned: new Date('2023-02-20'),
    completed: true,
    codeOrNotes: '23452345',
  },
];
