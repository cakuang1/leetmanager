import React from 'react';
import Calendar from './calendar/Calendar';
import { useRef, useEffect, useState  } from 'react';


function CalNavigator({onPreviousWeek, onNextWeek,onWeekClick} :any) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarContainerRef = useRef<HTMLDivElement | null>(null);
  console.log(isCalendarOpen)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarContainerRef.current) {
        if (!calendarContainerRef.current.contains(event.target as Node)) {
          if (!event.target || !(event.target as HTMLElement).closest('button')) {
            setIsCalendarOpen(false);
          }
        }
      }
    };

    if (isCalendarOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isCalendarOpen]);

  const handleToggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

    return (
        <div className="p-5 bg-white border-b ">
        <div className="flex pl-20 gap-5">
          <button className="hover:text-gray-400" onClick={onPreviousWeek}>
            <div className="leftbutton border-gray-400 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path fill="currentColor" fill-rule="evenodd" d="M7.222 9.897c2.3-2.307 4.548-4.559 6.744-6.754a.65.65 0 0 0 0-.896c-.311-.346-.803-.316-1.027-.08c-2.276 2.282-4.657 4.667-7.143 7.156c-.197.162-.296.354-.296.574c0 .221.099.418.296.592l7.483 7.306a.749.749 0 0 0 1.044-.029c.358-.359.22-.713.058-.881a3407.721 3407.721 0 0 1-7.16-6.988Z" />
              </svg>
            </div>
          </button>
          <button className="hover:text-gray-400 " onClick={onNextWeek}>
            <div className="leftbutton border-gray-400 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path fill="currentColor" fill-rule="evenodd" d="m7.053 2.158l7.243 7.256a.66.66 0 0 1 .204.483a.705.705 0 0 1-.204.497c-2.62 2.556-5.145 5.023-7.575 7.401c-.125.117-.625.408-1.011-.024c-.386-.433-.152-.81 0-.966l7.068-6.908l-6.747-6.759c-.246-.339-.226-.652.06-.939c.286-.287.607-.3.962-.04" />
              </svg>
            </div>
          </button>
          <div>          <button>
          <div className="p-2 hover:text-gray-400"  onClick={handleToggleCalendar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.438 4.954H16.5V3.546c0-.262-.23-.512-.5-.5a.509.509 0 0 0-.5.5v1.408h-7V3.546c0-.262-.23-.512-.5-.5a.509.509 0 0 0-.5.5v1.408H5.562a2.503 2.503 0 0 0-2.5 2.5v11c0 1.379 1.122 2.5 2.5 2.5h12.875c1.379 0 2.5-1.121 2.5-2.5v-11a2.502 2.502 0 0 0-2.499-2.5zm-12.876 1H7.5v.592c0 .262.23.512.5.5c.271-.012.5-.22.5-.5v-.592h7v.592c0 .262.23.512.5.5c.271-.012.5-.22.5-.5v-.592h1.937c.827 0 1.5.673 1.5 1.5v1.584H4.062V7.454c0-.827.673-1.5 1.5-1.5zm12.876 14H5.562c-.827 0-1.5-.673-1.5-1.5v-8.416h15.875v8.416a1.5 1.5 0 0 1-1.499 1.5z" />
            </svg>
          </div>
          </button>
          {isCalendarOpen &&         <div ref={calendarContainerRef}>
          <Calendar onWeekClick={onWeekClick} />
        </div>}
</div>


          </div>
          </div>
    )


}

export default CalNavigator;


