import React from 'react';
import Column from './Columns';
import { useState } from 'react';

const daysToShow = 10; // Number of days to show
const today = new Date(); // Get the current date

function generateDateArray(startDate: Date, numberOfDays: number) {
  const dateArray = [];
  for (let i = 0; i < numberOfDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    dateArray.push(currentDate); // Store the Date object
  }
  return dateArray;
}

const dates = generateDateArray(today, daysToShow);

function KanbanBoard() {
    const [activeColumnIndex, setActiveColumnIndex] = useState(null);

    

  // Assuming you have some data for cards, you can structure it as needed

  return (
    <div className="kanban-board whitespace-nowrap mt-10">
      <div className="kanban-scroll-container h-screen overflow-x-auto flex">
        {dates.map((date, index) => (
          <Column key={index} title={date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
