import React from 'react';
import Column from './Columns';
import { useState,useEffect, useRef } from 'react';
import { DragDropContext, DraggableLocation, DropResult } from 'react-beautiful-dnd';





function KanbanBoard() {  

  const [columns, setColumns] = useState(dates  );
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const source: DraggableLocation = result.source;
    const destination: DraggableLocation = result.destination;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // Implement logic to update the order of cards within the same column or move between columns based on the source and destination indices.

    // Update the columns state based on your logic.
    // You will need to reorder cards within the same column or move cards between columns.
    // Ensure you handle this logic carefully based on your specific requirements.
    const updatedColumns = [...columns];
    // Implement your logic here to update the 'updatedColumns' array.

    setColumns(updatedColumns);
  };


  return (
    <div >
    <nav className="bg-white flex border-b">
      <div className="flex items-center  p-5">
        <div className="flex space-x-4 pl-20">
            <div className='border px-3 py-2 rounded-lg'>
                Today
            </div>

            <button className="hover:text-gray-400  ">
  <div className="leftbutton  border-gray-400  p-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >

      <path fill="currentColor" fill-rule="evenodd" d="M7.222 9.897c2.3-2.307 4.548-4.559 6.744-6.754a.65.65 0 0 0 0-.896c-.311-.346-.803-.316-1.027-.08c-2.276 2.282-4.657 4.667-7.143 7.156c-.197.162-.296.354-.296.574c0 .221.099.418.296.592l7.483 7.306a.749.749 0 0 0 1.044-.029c.358-.359.22-.713.058-.881a3407.721 3407.721 0 0 1-7.16-6.988Z" />
    </svg>
  </div>
</button>
         

<button className="hover:text-gray-400  ">
  <div className="leftbutton  border-gray-400  p-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="m7.053 2.158l7.243 7.256a.66.66 0 0 1 .204.483a.705.705 0 0 1-.204.497c-2.62 2.556-5.145 5.023-7.575 7.401c-.125.117-.625.408-1.011-.024c-.386-.433-.152-.81 0-.966l7.068-6.908l-6.747-6.759c-.246-.339-.226-.652.06-.939c.286-.287.607-.3.962-.04Z"/></svg>
  </div>
</button>            
            <div className="calendar">
</div>
        </div>
      </div>
    </nav>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-scroll-container h-screen overflow-x-auto flex" >
        {columns.map((date, index) => (
          <Column key={index} id = {date} cards={[]} />
        ))}
      </div>

    </DragDropContext>
    </div>
  );
}

export default KanbanBoard;
















// HELPERS
function generateDateArray(): string[] {
  const dateArray: string[] = [];
  const daysInMilliseconds = 24 * 60 * 60 * 1000;
  const today = new Date();

  for (let i = 0; i < 6; i++) {
    const currentDate = new Date(today.getTime() + i * daysInMilliseconds);
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed
    const day = currentDate.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    dateArray.push(formattedDate);
  }

  return dateArray;
}

const dates = generateDateArray();



const loadMoreColumns = (direction: string, dates: string[]) => {
  if (direction === 'left') {
    const newDates = [];
    const daysInMilliseconds = 24 * 60 * 60 * 1000;
    const firstDate = new Date(dates[0]); // Convert the first date in the array to a Date object

    // Add 7 dates to the front (left) of the array
    for (let i = 1; i <= 7; i++) {
      const currentDate = new Date(firstDate.getTime() - i * daysInMilliseconds);
      const formattedDate = currentDate.toISOString().split('T')[0];
      newDates.unshift(formattedDate); // Use unshift to add to the front
    }

    dates = newDates.concat(dates); // Combine the new dates with the existing array
  } else if (direction === 'right') {
    const newDates = [];
    const daysInMilliseconds = 24 * 60 * 60 * 1000;
    const lastDate = new Date(dates[dates.length - 1]); // Convert the last date in the array to a Date object

    // Add 7 dates to the end (right) of the array
    for (let i = 1; i <= 7; i++) {
      const currentDate = new Date(lastDate.getTime() + i * daysInMilliseconds);
      const formattedDate = currentDate.toISOString().split('T')[0];
      newDates.push(formattedDate); // Use push to add to the end
    }

    dates = dates.concat(newDates); // Combine the existing array with the new dates
  }

  return dates;
};
