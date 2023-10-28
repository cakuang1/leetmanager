import React from 'react';
import Column from './Columns';
import CalNavigator from './Calnavigation';
import { UserQuestionDTO } from '../types';
import { useKanban } from '../context/Kanbancontext';
import { useEffect } from 'react';

function KanbanBoard() { 

  const { columns,  columnData, isLoading,handleCalendarClick, handleLeftclick, handleRightclick} = useKanban();
  useEffect(() => {

  }, [columnData]);
  console.log('rerendered')

  return (
    <div >
    <CalNavigator onPreviousWeek = {handleLeftclick} onNextWeek = {handleRightclick} onWeekClick = {handleCalendarClick}/>
      <div className="kanban-scroll-container h-screen overflow-x-auto flex" >
      {isLoading ? (
          <p></p> // Show a loading message while data is being fetched
        ) : (
          columns.map((date, index) => (
            <Column key={index} id={date} cards={columnData[date]} />
          ))
        )}
      </div>

    </div>
  );
}

export default KanbanBoard;


// HELPERS

















  // Format the dates in ISO format (yyyy-MM-dd)





