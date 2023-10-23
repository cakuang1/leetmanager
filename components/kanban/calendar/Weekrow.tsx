import React from 'react';
import { eachDayOfInterval, format, startOfWeek, endOfWeek, isSameMonth } from 'date-fns';

function WeekRow({ startDate, month }: any) {
    const weekStartDate = startOfWeek(startDate);
    const weekEndDate = endOfWeek(startDate);
    const daysInWeek = eachDayOfInterval({
      start: weekStartDate,
      end: weekEndDate,
    });
  
    return (
      <div className="flex items-center hover:bg-orange-50">
        {daysInWeek.map((day) => (
          <div
            key={day.getTime()}
            className={`w-10 text-center text-xs p-3 my-auto ${
              isSameMonth(day, month) ? 'text-gray-500' : 'text-gray-300'
            }`}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    );
  }
  
  export default WeekRow;