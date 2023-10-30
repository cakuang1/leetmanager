import React from 'react';
import { eachDayOfInterval, format, startOfWeek, endOfWeek, isSameMonth } from 'date-fns';


function WeekRow2({ startDate, month,onDayClick }: any) {
    const weekStartDate = startOfWeek(startDate);
    const weekEndDate = endOfWeek(startDate);
    const daysInWeek = eachDayOfInterval({
      start: weekStartDate,
      end: weekEndDate,
    });

    


    return (
      <div className="flex items-center bg-white " >
        {daysInWeek.map((day) => (
          <div
            key={day.getTime()}
            className={`w-10 text-center text-xs p-3 my-auto transition duration-200 hover:bg-orange-50 hover:cursor-pointer rounded${
              isSameMonth(day, month) ? 'text-gray-500' : 'text-gray-300'
            }`} onClick={() => onDayClick(day)}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    );
  }
  
  export default WeekRow2;