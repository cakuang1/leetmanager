import React from 'react';
import { UserQuestionDTO } from '../types';
import CardPopup from '../CardPopup';
import { useState } from 'react';





const userQuestionExample = {
  id: 1,
  githubId: "exampleUser123",
  questionId: 1001,
  title: "Example Question",
  difficulty: "Medium",
  titleSlug: "example-question",
  topicTags: ["arrays", "algorithms", "javascript"],
  categorySlug: "programming",
  completionStatus: true,

  code: "function exampleFunction() {\n  // Your code here\n}",
  notes: "This question involves solving a common algorithm problem.",
  date: "2023-10-25"
};


const Todo = ({ progressList }: { progressList: UserQuestionDTO[] }) => {
  const [modal, setModal] = useState({ show: false, data: userQuestionExample });

  const handleClose = () => {
    setModal({ show: false ,data:userQuestionExample});
  };






  return (
    <div className="">
      {modal.show && modal.data && <CardPopup closeModal={handleClose} data={modal.data} />}
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
      <tr key={index} className='hover:bg-gray-100' onClick={() => setModal({ show: true, data: row })} >
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

    </div>
  );
};

export default Todo;



function extractIsoDate(dateString:string) {
  const dateObject = new Date(dateString);
  const isoDate = dateObject.toISOString().split('T')[0];
  return isoDate;
}

// helpers

  

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