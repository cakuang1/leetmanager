import React from 'react';
import Column from './Columns';
import { useState,useEffect} from 'react';
import CalNavigator from './Calnavigation';
import { startOfWeek, addDays, format,subWeeks,endOfWeek,eachDayOfInterval, addWeeks, getWeek} from 'date-fns';





function KanbanBoard() { 
  const date = new Date(); // Use your desired date here
  const weekDates = getWeekDatesInISO(date);
  const [columns, setColumns] = useState(weekDates);
  const [columnData,setColumndata] = useState([])



  function handleLeftclick() {
    setColumns(getPreviousWeekInISOList(columns[3]));
  
  }
  function handleRightclick() {
    setColumns(getNextWeekInISOList(columns[3]));
  }

  function handleCalendarClick(isodate:string) {
    setColumns(getCurrentWeekInISOList(isodate));
  }

  useEffect(() => {
    const fetchDataForDateRange = async (startDate:string, endDate:string) => {
      // Make your API request here, using the startDate and endDate as parameters
      // Replace the URL and query parameters with your actual API endpoint
      const apiUrl = `/api/userquestions/fetchdates?startDate=${startDate}&endDate=${endDate}`;      
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setColumndata(data)
        }
      } catch (error) {
        console.error('API request failed:', error);
      }
    };
    // Fetch data for the entire date range
    fetchDataForDateRange(columns[0], columns[columns.length - 1]);
    
  }, [columns]);



  return (
    <div >
    <CalNavigator onPreviousWeek = {handleLeftclick} onNextWeek = {handleRightclick} onWeekClick = {handleCalendarClick}/>

      <div className="kanban-scroll-container h-screen overflow-x-auto flex" >
        {columns.map((date, index) => (
          <Column key={index} id = {date} cards={[]} />
        ))}
      </div>

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





