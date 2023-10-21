import React from 'react';
import Column from './Columns';

const daysToShow = 10; // Number of days to show
const today = new Date(); // Get the current date

function generateDateArray(startDate: Date, numberOfDays: number) {
  const dateArray = [];
  for (let i = 0; i < numberOfDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    dateArray.push(currentDate.toDateString()); // You can format the date as needed
  }
  return dateArray;
}

const dates = generateDateArray(today, daysToShow);

function KanbanBoard() {
  // Assuming you have some data for cards, you can structure it as needed

  return (
    <div className="kanban-board whitespace-nowrap">
      <div className="kanban-scroll-container  h-screen overflow-x-auto flex">
        {dates.map((date, index) => (
          <Column key={index} title={date} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
