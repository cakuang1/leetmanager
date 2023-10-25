import React, { ChangeEvent } from 'react';
import {  } from './types';
import { useState,useEffect } from 'react';

  export type UserQuestionDTO = {
    id: number;
    githubId: string;
    questionId: number;
    title: string;
    difficulty:string;
    titleSlug: string;
    topicTags: string[];
    categorySlug: string;
    completionStatus: boolean;
    timeTaken?: string | null;
    code: string;
    notes: string;
    date: string; 
  };

const example = {
  "id": 1,
  "githubId": "cakuang123",
  "questionId": 2,
  "title": "Add Two Numbers",
  "titleSlug": "add-two-numbers",
  "topicTags": [
    "linked-list",
    "math",
    "recursion"
  ],
  "difficulty": "Medium",
  "completionStatus": false,
  "timeTaken": null,
  "code": "",
  "notes": "",
  "date": "2023-10-23T00:00:00.000Z"
}


const CardPopup = (card:UserQuestionDTO) => {
  const [currprops, setQuestion] = useState(card);
  const [isModalOpen, setIsModalOpen] = useState(true);
    const handleAttributeChange = (attribute:string, value:any) => {
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        [attribute]: value,
      }));
      fetch(`/api/update?id=${card.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attribute: value }),
      });
    };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


// added ref
  useEffect(() => {
    if (isModalOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        const modal = document.getElementById('authentication-modal');

        if (modal && !modal.contains(event.target as Node)) {
          closeModal();
        }
      };

      window.addEventListener('click', handleClickOutside);

      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isModalOpen]);


  return (
    <div>
          {isModalOpen &&  (
          <>
          <div id = "blur"className="fixed inset-0 z-25 bg-black bg-opacity-50 blur-md overflow-hidden pointer-events-none"></div>
            <div  tabIndex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-25 w-full p-4 md:inset-0 h-[calc(100%-5rem)] max-h-full flex items-center justify-center  ">
                <div className="">
                    <div id="authentication-modal" className=" bg-white rounded-lg shadow text-sm w-[600px]">  
                        <div className="px-6 py-4  rounded-t text-gray-400">
                            <h3 className="text-base font-semibold text-gray-600 lg:text-xl dark:text-white mb-5">
                                {currprops.questionId + ' . ' + currprops.title}
                            </h3>
                            <div className='flex flex-col gap-5'>
                            <div className='flex '>
                              <div className='flex gap-5 items-center w-1/2'>
                                <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" className = "w-5 h-5" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m199.066 456l-7.379-7.514l-3.94-3.9l-86.2-86.2l.053-.055l-83.664-83.666l97.614-97.613l83.565 83.565L398.388 61.344L496 158.958L296.729 358.229l-11.26 11.371ZM146.6 358.183l52.459 52.46l.1-.1l.054.054l52.311-52.311l11.259-11.368l187.963-187.96l-52.358-52.358l-199.273 199.271l-83.565-83.565l-52.359 52.359l83.464 83.463Z"/></svg></div>
                                <div className=''>Solved</div>
                              </div>
                              <div className="flex items-center rounded pl-1 ">
                                  <input
                                    id="bordered-checkbox-1"
                                    type="checkbox"
                                    value=""
                                    name="bordered-checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded   hover:shadow-lg"
                                  />
                                </div>
                            </div>
                            <div className='flex '>
                              <div className='flex gap-5 items-center w-1/2'>
                                <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" className = "w-5 h-5"width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/></svg></div>
                                <div className=''>Difficulty</div>
                              </div>
                              <div className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getColorClasses(currprops.difficulty)}`}>{currprops.difficulty}</div>

                            </div>
                            <div className='flex'>
                              <div className='flex gap-5 items-center w-1/2'>
                                <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" className = "w-5 h-5" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h3a1 1 0 0 0 1-1V5a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 0 0-4 0v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a2 2 0 0 0 0-4H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"/></svg></div>
                                <div className=''>Topics</div>
                              </div>

                              <div className={``}> 
                              {currprops.topicTags.map((topic, index) => (
                                        <span
                                          key={index}
                                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 ${topic}`}
                                        >
                                          {topic}
                                        </span>
                                      ))}
                              </div>
                              <div className='place holder'></div>
                            </div>
                            <div className='flex'>
                              <div className='flex gap-5 items-center w-1/2'>
                                <div className='logo'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12h5v5h-5v-5m7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5h14M5 19V9h14v10H5Z"/></svg></div>
                                <div className=''>Date</div>
                              </div>
                              <div className='p-2 hover:bg-gray-100 rounded-sm'>{extractIsoDate(currprops.date)}</div>
                              <div className='place holder'></div>
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
                                    className="py-3 px-4 block w-full  rounded-md text-sm  h-[400px] focus:outline-none focus:border"

                                  />

                              </div>

                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </>)}
</div>
  );
};



export default CardPopup;


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