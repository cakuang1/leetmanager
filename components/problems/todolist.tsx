import React from 'react';
import { UserQuestionDTO } from '../types';
import { useState,useEffect } from 'react';
import Modalproblems from '../Modalpt2';



const Todo = () => {
  const [page, setPage] = useState(1);
  const [progressList, setListofCards] = useState<UserQuestionDTO[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10; 


  
  useEffect(() => {
    // Define a function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/userquestions/notcompleted?page=${page}`);
        if (!response.ok) {
          throw new Error('API request failed');
        }
        const data = await response.json();
        setListofCards(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [page]); 

  return (
    <div className="">
      <h1 className="font-semibold text-gray-500">Todo</h1>
      <table className="w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
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
        <span>Date Planned</span>
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200 ">
    {progressList.map((row, index) => (
      <tr key={index} className='hover:bg-gray-100' >
        <td className="px-3 py-2 whitespace-nowrap text-xs ">{row.id}</td>
        <td className="px-3 py-2 whitespace-nowrap text-sm">{row.title}</td>
        <td className={`px-3 py-2 whitespace-nowrap `}>
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getColorClasses(row.difficulty)} text-green-800`}>
            {row.difficulty}
          </span>
        </td>
        <td className={`px-3 py-2 whitespace-nowrap`}>
          {row.topicTags.map((topic, index) => (
            <span
              key={index}
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 ${topic}`}
            >
              {topic}
            </span>
          ))}
        </td>

        <td className="px-3 py-2 whitespace-nowrap font-semibold">
            {extractIsoDate(row.date)}
        </td>
      </tr>
    ))}
  </tbody>
</table>
    <div className='flex justify-center gap-3 text-gray-400 items-center'>

      <div><svg xmlns="http://www.w3.org/2000/svg" className = {'w-6 h-6'} width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281l360-281.1c3.8-3 6.1-7.7 6.1-12.6z"/></svg></div>
            <div className='text-xl'>{page}</div>
            <div><svg xmlns="http://www.w3.org/2000/svg" className = {'w-6 h-6'}width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"/></svg></div>
    </div>
    </div>
  );
};

export default Todo;


function extractIsoDate(dateString:string) {
  const dateObject = new Date(dateString);
  const isoDate = dateObject.toISOString().split('T')[0];
  return isoDate;
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