import CompletedQuestions from "@/components/problems/completed";
import Layout from "@/components/layout";
import Todo from "@/components/problems/todolist";
import { useEffect,useState } from "react";

export default function Problems() {
  const [activeTab, setActiveTab] = useState('todo');



  return (
    <Layout>
      <div className="w-4/6 mx-auto h-screen max-h-screen overflow-auto">
        <div className="mt-20">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 justify-center gap-2">
            <button
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === 'todo' ? 'border-orange-300' : 'border-transparent'
              } rounded-t-lg hover:text-gray-600 group`}
              onClick={() => setActiveTab('todo')} // Handle click to switch to Todo tab
            >
              <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2v2Zm0 2v2h-2V4H9v2H7V4H5v16h14V4h-2ZM7 8h10v2H7V8Zm0 4h10v2H7v-2Z"/></svg>
              Todo
            </button>
            <button
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === 'completed' ? 'border-orange-300' : 'border-transparent'
              } rounded-t-lg hover:text-gray-600 group`}
              onClick={() => setActiveTab('completed')} // Handle click to switch to Completed tab
            >
      <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1491 595l90 90l-749 749l-365-365l90-90l275 275l659-659zM1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37zm0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32z"/></svg>
              Completed
            </button>
          </ul>
        </div>
        <div className="mt-5">

        {activeTab === 'todo' ? (
          <Todo />
        ) : (
          <CompletedQuestions />
        )}

        </div>

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
