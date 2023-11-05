import React, { ChangeEvent } from 'react';
import Calendar from './calendar/Calendar2';
import { useState,useEffect } from 'react';
import { useKanban } from '../context/Kanbancontext';
import { UserQuestionDTO } from '../types';


const Modal = ({ isOpen, closeModal, cardData,updatefunction,calendar }:any) => {

  const {update} = useKanban()
  const [calendaropen,setCalendar] = useState<boolean>(false)
  const [currprops, setModalData] = useState<UserQuestionDTO >(cardData);
  
  useEffect(() => {
    // Use the useEffect hook to update currprops when cardData changes
    setModalData(cardData);
  }, [cardData]);

  const handleAttributeChange = (attribute: string, value: any) => {
    setModalData((prevData: UserQuestionDTO) => ({
      ...prevData,
      [attribute]: value,
    }) as UserQuestionDTO);
  };
  

  function handleCalendarClick() {
    setCalendar(!calendaropen)
  }
  const handleTimeRangeSelection = (timeRange:string) => {
    handleAttributeChange("timeTaken", timeRange); // Update the "timeTaken" attribute
  };
  const handleBoolean = (boolean:boolean) => {
    handleAttributeChange("completionStatus",boolean); // Update the "timeTaken" attribute
  };


  const handleDateSelection = (date:string) => {
    handleAttributeChange("date", date);
    setCalendar(!calendaropen)
  }


  const handledeletecard = async () => {
    try {
      await handleDelete();
      if (calendar) {
        update()
      } else {
        // Use the updatefunction passed in as a prop
        updatefunction();
      }


    } catch (error) {
      // Handle any errors that may occur during deletion or update
      console.error('Error during deletion or update:', error);
    }
    closeModal()
  };

  const handleDelete = async () => {
    try {
      // Send a DELETE request to delete the data
      const response = await fetch(`/api/userquestions/delete?id=${currprops.id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // Handle the response, e.g., show a success message
        console.log('Data deleted successfully');
      } else {
        // Handle errors if the response is not OK
        console.error('Error deleting data:', response.statusText);
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error deleting data:', error);
    }
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click is outside the modal
    if (e.target instanceof HTMLDivElement && e.target.classList.contains('modal-overlay')) {
      handleClose();
    }
  };
  const handleClose = async () => {
    // Check if any changes have been made
    if (JSON.stringify(currprops) !== JSON.stringify(cardData)) {
      try {
        // Send a PUT request to update the data
        const response = await fetch(`/api/userquestions/update?id=${currprops.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(currprops),
        });
  
        if (response.ok) {
          // Handle the response, e.g., show a success message
          console.log('Data updated successfully');
  
          // After a successful update, you can call the update function
          updatefunction();
  
          // Close the modal
          closeModal();
        } else {
          // Handle errors if the response is not OK
          console.error('Error updating data:', response.statusText);
        }
      } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error updating data:', error);
      }
    } else {
      // No changes were made, simply close the modal
      closeModal();
    }
  };
  
  

  return (
    <>
    <div className={` ${isOpen? 'z-20' : 'hidden'}` } >
<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"></div>
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto " >
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 modal-overlay" onClick={handleOutsideClick}>
                    <div id="authentication-modal" className=" bg-white rounded-lg shadow text-sm w-[600px]">  

                        <div className="px-6 py-4  rounded-t text-gray-400">
                            <h3 className="text-base font-semibold text-gray-600 lg:text-xl  mb-5">
                                {currprops.questionId + ' . ' + currprops.title}
                            </h3>
                            <div className='flex flex-col gap-5'>
                            <div className='flex solved'>
                              <div className='flex gap-5 items-center w-1/2'>
                                <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" className = "w-5 h-5" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m199.066 456l-7.379-7.514l-3.94-3.9l-86.2-86.2l.053-.055l-83.664-83.666l97.614-97.613l83.565 83.565L398.388 61.344L496 158.958L296.729 358.229l-11.26 11.371ZM146.6 358.183l52.459 52.46l.1-.1l.054.054l52.311-52.311l11.259-11.368l187.963-187.96l-52.358-52.358l-199.273 199.271l-83.565-83.565l-52.359 52.359l83.464 83.463Z"/></svg></div>
                                <div className=''>Status</div>
                              </div>
                              <div className="flex items-center rounded pl-1 gap-2">
                              <button
                                  className={`${ 
                                    currprops.completionStatus === false ? ` font-semibold rounded-sm  bg-gray-50 items-center border ` : 'bg-gray-300'
                                  } rounded px-2 py-1 flex items-center text-xs`}
                                  onClick={() => handleBoolean(false)}
                                > <div className='flex'>        <svg xmlns="http://www.w3.org/2000/svg" className = {'w-4 h-4 mr-2'} width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"/></svg></div>
                          <p>In Progress</p>
                                </button>
                                <button
                                  className={`${ 
                                    currprops.completionStatus === true ? ` font-semibold rounded-sm  bg-green-50 items-center border ` : 'bg-gray-300'
                                  } rounded px-2 py-1 flex items-center text-xs`}
                                  onClick={() => handleBoolean(true)}
                                >
                                              <div className='flex '>        <svg xmlns="http://www.w3.org/2000/svg" className = {'w-4 h-4 mr-2'}  width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415l-7.071 7.07Z"/><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18Z" clip-rule="evenodd"/></g></svg></div>
                          <p>Solved</p>
                                </button>
                                </div>
                            </div>
                            <div className='flex difficulty'>
                              <div className='flex gap-5 items-center w-1/2'>
                                <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" className = "w-5 h-5"width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/></svg></div>
                                <div className=''>Difficulty</div>
                              </div>
                              <div className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getColorClasses(currprops.difficulty)}`}>{currprops.difficulty}</div>

                            </div>
                            <div className='flex topics'>
                              <div className='flex gap-5 items-center w-1/2'>
                                <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" className = "w-5 h-5" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h3a1 1 0 0 0 1-1V5a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 0 0-4 0v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a2 2 0 0 0 0-4H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"/></svg></div>
                                <div className=''>Topics</div>
                              </div>
                              <div className={`flex  flex-wrap gap-2  w-1/2 text-xs`}> 
                              {currprops.topicTags.map((topic:any, index:any) => (
                                        <span
                                          key={index}
                                          className={`px-2  text-xs leading-5 font-semibold rounded-full bg-gray-100 ${topic}`}
                                        >
                                          {topic}
                                        </span>
                                      ))}
                              </div>
                            </div>
                            <div className='flex '>
        <div className='flex gap-5 items-center w-1/2'>
          <div className='logo'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm1-8h4v2h-6V7h2v5Z"
              />
            </svg>
          </div>
          <div className=''>Time Taken</div>
        </div>
        <div className="flex  flex-wrap gap-2  w-1/2 text-xs">
        <button
            className={`${ 
              currprops.timeTaken === '' ? 'bg-gray-50 border font-semibold' : 'bg-gray-200'
            } rounded px-2 py-1 w-16`}
            onClick={() => handleTimeRangeSelection('')}
          >
            
          </button>
          <button
            className={`${ 
              currprops.timeTaken === '0-15' ? 'bg-gray-50 border font-semibold' : 'bg-gray-200'
            } rounded px-2 py-1 `}
            onClick={() => handleTimeRangeSelection('0-15')}
          >
            0-15 mins
          </button>
          <button
            className={`${
              currprops.timeTaken === '15-30' ? 'bg-gray-50 border font-semibold' : 'bg-gray-200'
            } rounded px-2 py-1  `}
            onClick={() => handleTimeRangeSelection('15-30')}
          >
            15-30 mins
          </button>
          <button
            className={`${
              currprops.timeTaken === '30-45' ? 'bg-gray-50 border font-semibold' : 'bg-gray-200'
            } rounded px-2 py-1   `}
            onClick={() => handleTimeRangeSelection('30-45')}
          >
            30-45 mins
          </button>
          <button
            className={`${
              currprops.timeTaken === '45-60' ? 'bg-gray-50 border font-semibold' : 'bg-gray-200'
            } rounded px-2 py-1  `}
            onClick={() => handleTimeRangeSelection('45-60')}
          >
            45-60 mins
          </button>
          <button
            className={`${
              currprops.timeTaken === '60+' ? 'bg-gray-50 border font-semibold' : 'bg-gray-200'
            } rounded px-2 py-1  `}
            onClick={() => handleTimeRangeSelection('60+')}
          >
            60+ mins
          </button>

        </div>
    </div>
    <div className='flex difficulty'>
                              <div className='flex gap-5 items-center w-1/2'>
                                <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17H7q-2.075 0-3.538-1.463T2 12q0-2.075 1.463-3.538T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4v2Zm-3-4v-2h8v2H8Zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17h-4Z"/></svg></div>
                                <div className=''>Link</div>
                              </div>
                              <div className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}><a href={`https://www.leetcode.com/problems/` + currprops.titleSlug} target="_blank">{currprops.titleSlug}</a></div>

                            </div>
                            <div className='flex'>
                              <div className='flex gap-5 items-center w-1/2'>
                                <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12h5v5h-5v-5m7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5h14M5 19V9h14v10H5Z"/></svg></div>
                                <div className=''>Date</div>
                              </div>
                              <div>                              <div className='p-2 hover:bg-gray-100 rounded-sm' onClick={handleCalendarClick} >{extractIsoDate(currprops.date)}
                              </div>
                              {calendaropen && <Calendar handleDateClick = {handleDateSelection} value = {extractIsoDate(currprops.date)}/>}
</div>




                            </div>
                            <div className='border'></div>
                            <div className='flex'>
                              <div className='flex gap-5 items-center w-1/2'>
                                <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" className = "w-5 h-5" width="16" height="16" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 1.75h10.5v12.5H2.75zm3 6h4.5m-4.5 3h2.5m-2.5-6h4.5"/></svg></div>
                                <div className=''>Code/Notes</div>
                              </div>
                            </div>
                            <div className="p-2 codesegment">
                                  <textarea
                                    className="py-3 px-4 w-full rounded-md text-sm h-[300px] focus:border-gray-300 focus:border resize-none focus:ring-0"
                                    value={currprops.notes}
                                    onChange={(e) => handleAttributeChange("notes", e.target.value)}
                                    style={{ outline: 'none' }}
                                  />
                                </div>
                                </div>
                                <div className='flex justify-center mt-3'>
                                <div className='delete section '>
                                  <button className='flex items-center hover:bg-gray-200 rounded p-2 mx-auto' onClick={handledeletecard}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"/></svg>

                                  <span className='  text-gray-400 '>
                                    Delete </span></button>   </div>
                                    <div className='delete section '>
  </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>

</div>
</>
  );
};



export default Modal;


function getColorClasses(difficulty : String) {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Hard':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return ''; 
  }
}



function extractIsoDate(dateString:string) {
  const dateObject = new Date(dateString);
  const isoDate = dateObject.toISOString().split('T')[0];
  return isoDate;
}



