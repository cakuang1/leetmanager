import React from 'react';
import Column from './Columns';
import CalNavigator from './Calnavigation';
import { UserQuestionDTO } from '../types';
import { useKanban } from '../context/Kanbancontext';

function KanbanBoard() { 

  const { columns,  columnData, addCard, updateCard, handleCalendarClick, handleLeftclick, handleRightclick } = useKanban();


   let dateBuckets = groupDataByDate(columns,columnData)




  return (
    <div >
    <CalNavigator onPreviousWeek = {handleLeftclick} onNextWeek = {handleRightclick} onWeekClick = {handleCalendarClick}/>
      <div className="kanban-scroll-container h-screen overflow-x-auto flex" >
        {columns.map((date, index) => (
          <Column key={index} id = {date} cards={dateBuckets[date]} />
        ))}
      </div>

    </div>
  );
}

export default KanbanBoard;


// HELPERS

const groupDataByDate = (columns:string[], columnData:UserQuestionDTO[]) => {
  // Create an empty object to hold the buckets
  const dateBuckets: Record<string, UserQuestionDTO[]> = {};
  // Initialize the buckets with empty arrays for each date
  columns.forEach((date) => {
    dateBuckets[date] = [];
  });
  // Group the columnData into the date buckets
  columnData.forEach((item) => {
    const { date } = item;
    const formattedDate = date.substring(0, 10);

    // Check if the date exists in columns (assuming it's in the same format)
    if (dateBuckets[formattedDate]) {
      dateBuckets[formattedDate].push(item);
    }
  });
  return dateBuckets;
};
















  // Format the dates in ISO format (yyyy-MM-dd)





