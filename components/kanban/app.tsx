import React from 'react';
import Column from './Columns';


const days = ["Day 1", "Day 2", "Day 3", /* Add more days as needed */];

function KanbanBoard() {
  // Assuming you have some data for cards, you can structure it as needed

  return (
    <div className="kanban-board h-[500px] overflow-hidden">
      <div className="kanban-scroll-container flex overflow-x-auto whitespace-nowrap">
        {days.map((day, index) => (
          <Column key={index} title={day}  />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
