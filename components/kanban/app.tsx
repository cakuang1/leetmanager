import React from 'react';
import Column from './Columns';
import { useState,useEffect, useRef } from 'react';
import { DragDropContext, DraggableLocation, DropResult } from 'react-beautiful-dnd';





function KanbanBoard() {  

  const [columns, setColumns] = useState(dates);
  const boardRef = useRef<HTMLDivElement | null>(null);


  const handleScroll = () => {
    const boardElement = boardRef.current;
    if (!boardElement) {
      return;
    }
    if (boardElement.scrollLeft === 0) {
      // Scrolled all the way to the left

      console.log(columns)
    } else if (boardElement.scrollLeft + boardElement.clientWidth >= boardElement.scrollWidth) {
      // Scrolled all the way to the right
      setColumns(loadMoreColumns('right',columns));
      console.log(columns)
    }
  };

useEffect(() => {
  console.log(columns); // Log the updated columns whenever it changes
}, [columns]);


  useEffect(() => {
    const boardElement = boardRef.current;

    if (boardElement) {
      boardElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (boardElement) {
        boardElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);



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
    <DragDropContext onDragEnd={onDragEnd}>

      <div className="kanban-scroll-container h-screen overflow-x-auto flex" ref={boardRef}>
        {dates.map((date, index) => (
          <Column key={index} id = {date} cards={[]} />
        ))}
      </div>

    </DragDropContext>
  );
}

export default KanbanBoard;






















// HELPERS
function generateDateArray(): string[] {
  const dateArray: string[] = [];
  const daysInMilliseconds = 24 * 60 * 60 * 1000;
  const today = new Date();

  for (let i = 0; i < 10; i++) {
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
      newDates.push(formattedDate);
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
      newDates.push(formattedDate);
    }

    dates = dates.concat(newDates); // Combine the existing array with the new dates
  }

  return dates;
};