import React from 'react';
import { UserQuestionDTO } from '../types';
import { useState,useRef,useEffect} from 'react';
import { useKanban } from '../context/Kanbancontext';


function Card({ card ,modalfunction}: { card: UserQuestionDTO,modalfunction:any}) {
  const {update} = useKanban()
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const tooltipRef = useRef(null);
  const handleCardRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setTooltipVisible(true);
  };

  const handledeletecard = async () => {
    try {
      setTooltipVisible(false)
      await handleDelete();
      update()
    } catch (error) {
      // Handle any errors that may occur during deletion or update
      console.error('Error during deletion or update:', error);
    }
  };

  const handleDelete = async () => {
    try {
      // Send a DELETE request to delete the data
      const response = await fetch(`/api/userquestions/delete?id=${card.id}`, {
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




  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setTooltipVisible(false);
      }
    };

    if (isTooltipVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isTooltipVisible]);



  


  return (
    <>
      <div className='flex'>
      <div
        className={`${
          card.completionStatus ? 'bg-opacity-30 text-opacity-30 bg-green-50' : 'bg-white'
        }  kanban-card  justify-between rounded-lg text-gray-500 mt-2  w-full flex border hover:border-leetcode hover:shadow cursor-pointer flex items-center p-2 cursor-pointer text-sm font-semibold`}
        onContextMenu={handleCardRightClick}
        onClick={() => modalfunction(card)} // Add this onContextMenu event handler
      >
        <div className="flex">
          <p>{card.questionId}.&nbsp;</p>
          <p>{card.title}&nbsp;</p>
        </div>
        <p className={`${getColorClasses(card.difficulty)} px-2 text-xs font-semibold rounded-full `}>
          {card.difficulty}
        </p>
      </div>
      <div className='flex items-center relative hover:cursor-pointer'>     
        <div
          ref={tooltipRef}
          id="tooltip-right"
          role="tooltip"
          style={{ pointerEvents: isTooltipVisible ? 'auto' : 'none' }}
          className={`${
            isTooltipVisible ? 'opacity-100' : 'opacity-0'
          } absolute z-10   bg-white ml-3 text-sm font-medium w-28 text-gray-700  rounded border shadow-sm  mt-2 transition-opacity ease-in-out duration-200 transform `}
        >
          {card.completionStatus ?
                    <div className='flex items-center gap-2 p-2 hover:bg-gray-100 '>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z" clip-rule="evenodd"/></svg></div>
                    <p>Unsolve</p>
                  </div> :
          
          <div className='flex items-center gap-2 p-2 hover:bg-gray-100 '>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg></div>
          <p>Solved</p>
        </div>}          
        
        <div className='flex items-center gap-2 p-2 hover:bg-gray-100 ' onClick={handledeletecard}>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"/></svg></div>
            <p>Delete</p>
          </div>

          <div className="tooltip-arrow" data-popper-arrow></div>
        </div></div>
  
        </div>
    </>
  );
}






export default Card;

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




