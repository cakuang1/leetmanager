import React from 'react';

interface ProgressTrackerRow {
  question: string;
  difficulty: string;
  topics: string[];
  timeTaken: number;
  dateCompleted: Date;
  codeOrNotes: string;
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


const ProgressTracker = ({ progressList }: { progressList: ProgressTrackerRow[] }) => {
  return (
    <div className="w-3/5 mx-auto">
      <h1 className="text-center text-2xl font-bold">Problems</h1>
      <h1 className="font-semibold text-gray-500">Completed</h1>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Solved
         </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Question
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Difficulty
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Topics
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time Taken
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date Completed
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Code/Notes
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {progressList.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{row.question}</td>
              <td className={`px-6 py-4 whitespace-nowrap `}>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getColorClasses(row.difficulty)} text-green-800`}>
                    {row.difficulty}
                </span>

              </td>
              <td className="px-6 py-4 whitespace-nowrap">{row.topics.join(', ')}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.timeTaken} minutes</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.dateCompleted.toDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <pre>
                  <code>{row.codeOrNotes}</code>
                </pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressTracker;
