import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserQuestionDTO } from '../types';
import { useEffect } from 'react';
import { startOfWeek, addDays, format,subWeeks,endOfWeek,eachDayOfInterval, addWeeks, getWeek} from 'date-fns';

export const KanbanContext = createContext<KanbanContextData | undefined>(undefined);

export function KanbanProvider({ children }: { children: ReactNode }) {
  const date = new Date(); // Use your desired date here
  const [columns, setColumns] = useState<string[]>(getWeekDatesInISO(date))
  const [columnData, setColumndata] = useState<Record<string, UserQuestionDTO[]>>({});
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading to true

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
    const fetchData = async () => {
      setIsLoading(true);
      await update();
      console.log(columnData)
      setIsLoading(false); // Set isLoading to false when the data is loaded
    };

    fetchData();
  }, [columns]);



  const update = async () => {
    const startDate = columns[0];
    const endDate  = columns[columns.length - 1]
    const apiUrl = `/api/userquestions/fetchdates?startDate=${startDate}&endDate=${endDate}`;      
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        const newdata = groupDataByDate(columns,data)
        setColumndata(newdata)

      }       
    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  
  


  return (     <KanbanContext.Provider value={{
    columnData,
    columns,
    isLoading,
    update,
    handleCalendarClick,
    handleLeftclick,
    handleRightclick,
  }}>
    {children}
  </KanbanContext.Provider>
  );
}

export interface KanbanContextData {
  columns : string[],
  columnData : Record<string, UserQuestionDTO[]>,
  isLoading : boolean,
  update : () => void,
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

