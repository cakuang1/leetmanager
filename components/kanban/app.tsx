import React from 'react';
import Column from './Columns';
import { useState } from 'react';
import { DragDropContext, DraggableLocation, DropResult } from 'react-beautiful-dnd';




function KanbanBoard(dates:string[]) {  
  
  return (
    <div className="kanban-board whitespace-nowrap mt-10">
      <div className="kanban-scroll-container h-screen overflow-x-auto flex">
        {dates.map((date, index) => (
          <Column key={index} id = {date} cards={[]} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
