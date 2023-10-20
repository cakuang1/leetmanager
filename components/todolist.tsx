import React from 'react';


interface ProgressTrackerRow {
  id: number;
  question: string;
  difficulty: string;
  topics: string[];
  timeTaken: number;
  dateCompleted: Date;
  codeOrNotes: string;
}


function Search() {


    return(
        <div className=''>
            <h1 className='font-semibold text-gray-500'>Search</h1>
       <label className="relative text-gray-400 focus-within:text-gray-600 block">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"   className="pointer-events-none w-7 h-7 absolute top-1/2 transform -translate-y-1/2 left-3"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>

      <input type="email" name="email" id="email" placeholder="email@kemuscorp.com" className="form-input  py-2 px-4 bg-gray-100 rounded placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none"/>
</label>


        </div>

    )
}

const Todo = ({ progressList }: { progressList: ProgressTrackerRow[] }) => {
  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold mt-4">Problems</h1>
      <h1 className="font-semibold text-gray-500">Completed</h1>
      <table className="w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Solved
      </th>
      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Id
      </th>
      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Question
      </th>
      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Difficulty
      </th>
      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Topics
      </th>

      <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Code/Notes
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {progressList.map((row, index) => (
      <tr key={index}>
        <td className="px-3 py-2 whitespace-nowrap text-xs flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"/><path fill="currentColor" d="m23 32.4l-8.7-8.7l1.4-1.4l7.3 7.3l11.3-11.3l1.4 1.4z"/></svg></td>
        <td className="px-3 py-2 whitespace-nowrap text-xs ">{row.id}</td>
        <td className="px-3 py-2 whitespace-nowrap text-sm">{row.question}</td>
        <td className={`px-3 py-2 whitespace-nowrap `}>
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getColorClasses(row.difficulty)} text-green-800`}>
            {row.difficulty}
          </span>
        </td>
        <td className={`px-3 py-2 whitespace-nowrap`}>
          {row.topics.map((topic, index) => (
            <span
              key={index}
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTopicClasses(topic)}`}
            >
              {topic}
            </span>
          ))}
        </td>
        
        <td className="px-3 py-2 whitespace-nowrap">
          <pre>
            <code>{row.codeOrNotes}</code>
          </pre>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      <div className='mt-10'>

        <Search/></div>
    </div>
  );
};

export default Todo;

function getTopicClasses(topic: string) {
    switch (topic) {
      case 'Array':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'String':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hash Table':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Dynamic Programming':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Math':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Sorting':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Greedy':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Depth-First Search':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Binary Search':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Database':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Breadth-First Search':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Tree':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Matrix':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Two Pointers':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Bit Manipulation':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Binary Tree':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Heap (Priority Queue)':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Stack':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Prefix Sum':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Graph':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Simulation':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Design':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Counting':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Backtracking':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Sliding Window':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Union Find':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Linked List':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Ordered Set':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Enumeration':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Monotonic Stack':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Trie':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Recursion':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Divide and Conquer':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Number Theory':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Bitmask':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Queue':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Binary Search Tree':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Memoization':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Segment Tree':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Geometry':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Topological Sort':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Binary Indexed Tree':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Game Theory':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hash Function':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Shortest Path':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Combinatorics':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Interactive':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'String Matching':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Data Stream':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Rolling Hash':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Brainteaser':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Randomized':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Monotonic Queue':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Merge Sort':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Iterator':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Concurrency':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Doubly-Linked List':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Probability and Statistics':
        return 'bg-orange-100 text-orange-800 border-orange-200';
        case 'Quickselect':
            return 'bg-gray-100 text-gray-800 border-gray-200';
          case 'Bucket Sort':
            return 'bg-red-100 text-red-800 border-red-200';
          case 'Suffix Array':
            return 'bg-teal-100 text-teal-800 border-teal-200';
          case 'Minimum Spanning Tree':
            return 'bg-green-100 text-green-800 border-green-200';
          case 'Counting Sort':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
          case 'Shell':
            return 'bg-blue-100 text-blue-800 border-blue-200';
          case 'Line Sweep':
            return 'bg-indigo-100 text-indigo-800 border-indigo-200';
          case 'Reservoir Sampling':
            return 'bg-purple-100 text-purple-800 border-purple-200';
          case 'Strongly Connected Component':
            return 'bg-pink-100 text-pink-800 border-pink-200';
          case 'Eulerian Circuit':
            return 'bg-orange-100 text-orange-800 border-orange-200';
          case 'Radix Sort':
            return 'bg-gray-100 text-gray-800 border-gray-200';
          case 'Rejection Sampling':
            return 'bg-red-100 text-red-800 border-red-200';
          case 'Biconnected Component':
            return 'bg-teal-100 text-teal-800 border-teal-200';
          default:
            return ''; // Default styles for other topics
        }
      }
  

      function getColorClasses(difficulty : String) {
        switch (difficulty) {
          case 'Easy':
            return 'bg-green-100 text-green-800 border-green-200';
          case 'Medium':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
          case 'Hard':
            return 'bg-red-100 text-red-800 border-red-200';
          default:
            return ''; 
        }
    }