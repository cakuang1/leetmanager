import React from 'react';
import Column from './Columns';
import CalNavigator from './Calnavigation';
import { useKanban } from '../context/Kanbancontext';

function KanbanBoard() { 
  const { columns,  columnData, isLoading,handleCalendarClick, handleLeftclick, handleRightclick} = useKanban();
  return (
    <div className=''>
      <CalNavigator onPreviousWeek={handleLeftclick} onNextWeek={handleRightclick} onWeekClick={handleCalendarClick} />
      <div className="kanban-scroll-container h-screen overflow-x-auto flex w-screen">
        {isLoading ? (
          <p></p>
        ) :  (
          columns.map((date, index) => (
            <Column key={index} id={date} cards={columnData[date]} />
          ))
        ) }
      </div>
    </div>
  );
}





export default KanbanBoard;


// HELPERS

















  // Format the dates in ISO format (yyyy-MM-dd)





