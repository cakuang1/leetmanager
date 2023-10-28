import React from 'react';
import Column from './Columns';
import CalNavigator from './Calnavigation';
import { useKanban } from '../context/Kanbancontext';

function KanbanBoard() { 
  const { columns,  columnData, isLoading,handleCalendarClick, handleLeftclick, handleRightclick} = useKanban();
  return (
    <div>
      <CalNavigator onPreviousWeek={handleLeftclick} onNextWeek={handleRightclick} onWeekClick={handleCalendarClick} />
      <div className="kanban-scroll-container h-screen overflow-x-auto flex">
        {isLoading ? (
          <p>Loading...</p>
        ) : columnData && Object.keys(columnData).length > 0 ? (
          columns.map((date, index) => (
            <Column key={index} id={date} cards={columnData[date]} />
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}





export default KanbanBoard;


// HELPERS

















  // Format the dates in ISO format (yyyy-MM-dd)





