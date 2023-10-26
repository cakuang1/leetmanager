import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserQuestionDTO } from '../types';
import { useEffect } from 'react';
import { startOfWeek, addDays, format,subWeeks,endOfWeek,eachDayOfInterval, addWeeks, getWeek} from 'date-fns';


const KanbanContext = createContext<KanbanContextData | undefined>(undefined);


export function KanbanProvider({ children }: { children: ReactNode }) {
  const date = new Date(); // Use your desired date here
  const [columns, setColumns] = useState<string[]>(getWeekDatesInISO(date))
  const [columnData, setColumndata] = useState<UserQuestionDTO[]>([]);

  function handleLeftclick() {
    setColumns(getPreviousWeekInISOList(columns[3]));
  
  }
  function handleRightclick() {
    setColumns(getNextWeekInISOList(columns[3]));
  }

  function handleCalendarClick(isodate:string) {
    setColumns(getCurrentWeekInISOList(isodate));
  }

  const addCard = (newCard: UserQuestionDTO) => {
    const updatedColumnData = [...columnData, newCard];
    setColumndata(updatedColumnData);
  };


  const updateCard = (cardId: number, updatedCard: UserQuestionDTO) => {
    setColumndata((prevData) => {
      const cardIndex = prevData.findIndex((card) => card.id === cardId);
      if (cardIndex !== -1) {
        const updatedData = [...prevData];
        updatedData[cardIndex] = updatedCard;
        return updatedData;
      }
      return prevData;
    });
  };


  useEffect

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
    fetchDataForDateRange(columns[0], columns[columns.length - 1]);
    console.log(fetchDataForDateRange)
  }, [columns]);


  return (     <KanbanContext.Provider value={{
    columnData,
    columns,
    addCard,
    updateCard,
    handleCalendarClick,
    handleLeftclick,
    handleRightclick,
  }}>
    {children}
  </KanbanContext.Provider>
  );
}



interface KanbanContextData {
  columns : string[],
  columnData : UserQuestionDTO[],
  addCard: (newCard: UserQuestionDTO) => void;
  updateCard: (cardId: number, newcard:UserQuestionDTO) => void;
  handleRightclick : () => void;
  handleLeftclick : () => void;
  handleCalendarClick : (isodate:string) => void;
}

// Create a custom hook to access the context
export function useKanban() {
  const context = useContext(KanbanContext);
  if (context === undefined) {
    throw new Error('useKanban must be used within a KanbanProvider');
  }
  return context;
}



//HELPERS 




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






