


interface ProgressTrackerRow {
    question: string;
    difficulty: string;
    topics: string[];
    timeTaken: number; // You can use a numeric data type to represent time taken (e.g., minutes)
    dateCompleted: Date;
    codeOrNotes: string; // You may use a string to store code or notes
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
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                <div className="text-sm text-gray-500">Optimization</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
            </td>
        </tr>

    </tbody>
</table>  
      </div>

    )
}
  
export default ProgressTracker