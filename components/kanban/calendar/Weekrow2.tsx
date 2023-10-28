import React from 'react';
import { eachDayOfInterval, format, startOfWeek, endOfWeek, isSameMonth } from 'date-fns';




function WeekRow({ startDate, month,onDayClick }: any) {
    const weekStartDate = startOfWeek(startDate);
    const weekEndDate = endOfWeek(startDate);
    const isoEndDate = format(weekEndDate, 'yyyy-MM-dd');
    const daysInWeek = eachDayOfInterval({
      start: weekStartDate,
      end: weekEndDate,
    });


    const handleChangeState = () => {
      // Call the function passed as a prop to update the parent's state
      onDayClick(isoEndDate)
    };

    return (
      <div className="flex items-center bg-white transition duration-200 hover:bg-orange-50 hover:cursor-pointer rounded" >
        {daysInWeek.map((day) => (
          <div
            key={day.getTime()}
            className={`w-10 text-center text-xs p-3 my-auto ${
              isSameMonth(day, month) ? 'text-gray-500' : 'text-gray-300'
            }`} onClick={onDayClick}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    );
  }
  
  export default WeekRow;