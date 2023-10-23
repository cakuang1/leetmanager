import React from 'react';
import Column from './Columns';
import { useState } from 'react';
import { DragDropContext, DraggableLocation, DropResult } from 'react-beautiful-dnd';
import CalNavigator from './Calnavigation';
import { startOfWeek, addDays, format,subWeeks,endOfWeek,eachDayOfInterval, addWeeks, getWeek} from 'date-fns';
import WeekRow from './calendar/Weekrow';


function KanbanBoard() { 
  const date = new Date(); // Use your desired date here
  const weekDates = getWeekDatesInISO(date);
  const [columns, setColumns] = useState(weekDates);
  console.log(columns)
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

  function handleLeftclick() {
    setColumns(getPreviousWeekInISOList(columns[3]));
  
  }
  function handleRightclick() {
    setColumns(getNextWeekInISOList(columns[3]));
  }

  function handleCalendarClick(isodate:string) {
    setColumns(getCurrentWeekInISOList(isodate));
  }





  return (
    <div >
    <CalNavigator onPreviousWeek = {handleLeftclick} onNextWeek = {handleRightclick}/>
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




function getWeekDatesInISO(date:Date) {
  const weekStart = startOfWeek(date, { weekStartsOn: 0 }); // 0 means Sunday
  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = addDays(weekStart, i);
    const isoDate = format(currentDate, 'yyyy-MM-dd');
    weekDates.push(isoDate);
  }
  return weekDates;
}


function getPreviousWeekInISOList(isoDateString:string) {
  const currentDate = new Date(isoDateString); // Convert the input ISO string to a Date object

  // Calculate the start and end of the previous week
  const previousWeekStart = startOfWeek(subWeeks(currentDate, 1), { weekStartsOn: 0 }); // 0 indicates Sunday as the first day of the week
  const previousWeekEnd = endOfWeek(subWeeks(currentDate, 1), { weekStartsOn: 0 });

  // Generate an array of dates for the entire previous week
  const daysInPreviousWeek = eachDayOfInterval({
    start: previousWeekStart,
    end: previousWeekEnd,
  });

  // Format the dates in ISO format (yyyy-MM-dd)
  const isoDates = daysInPreviousWeek.map((date) => format(date, 'yyyy-MM-dd'));
  return isoDates;
}


function getCurrentWeekInISOList(isoDateString:string) {
  const currentDate = new Date(isoDateString); // Convert the input ISO string to a Date object

  // Calculate the start and end of the current week
  const currentWeekStart = startOfWeek(currentDate, { weekStartsOn: 0 }); // 0 indicates Sunday as the first day of the week
  const currentWeekEnd = endOfWeek(currentDate, { weekStartsOn: 0 });

  // Generate an array of dates for the entire current week
  const daysInCurrentWeek = eachDayOfInterval({
    start: currentWeekStart,
    end: currentWeekEnd,
  });

  // Format the dates in ISO format (yyyy-MM-dd)
  const isoDates = daysInCurrentWeek.map((date) => format(date, 'yyyy-MM-dd'));
  return isoDates;
}


function getNextWeekInISOList(isoDateString:string) {
  const currentDate = new Date(isoDateString); // Convert the input ISO string to a Date object

  // Calculate the start and end of the next week
  const nextWeekStart = startOfWeek(addWeeks(currentDate, 1), { weekStartsOn: 0 }); // 0 indicates Sunday as the first day of the week
  const nextWeekEnd = endOfWeek(addWeeks(currentDate, 1), { weekStartsOn: 0 });

  // Generate an array of dates for the entire next week
  const daysInNextWeek = eachDayOfInterval({
    start: nextWeekStart,
    end: nextWeekEnd,
  });

  // Format the dates in ISO format (yyyy-MM-dd)
  const isoDates = daysInNextWeek.map((date) => format(date, 'yyyy-MM-dd'));

  return isoDates;
}