import React from 'react';
import { UserQuestionDTO } from '../types';
import { useState } from 'react';
import { useModal } from '../context/Modalcontext';
import Modal from './Modal';
import { useKanban } from '../context/Kanbancontext';

function Card({ card }: { card: UserQuestionDTO }) {
  const { openModal,} = useModal();
  const {update} = useKanban();


  const deletecard = async () => {
    try {
      // Call handleDelete to delete the record and wait for it to complete
      await handleDelete();
  
      // After successful deletion, update the data
      update();
  
      // Finally, set the modal data to a placeholder
  
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
  const handleEditClick = () => {
    // Open the modal and pass the card data for editing
    openModal(card);
  };
  return (
    <div className="" onClick={deletecard}>
      <div
        className={`${
          card.completionStatus ? 'bg-opacity-30 text-opacity-30 bg-green-100' : ''
        }  kanban-card flex justify-between rounded-lg text-gray-500 mt-2 border hover:border-leetcode hover:shadow cursor-pointer flex items-center p-2 cursor-pointer text-sm font-semibold`}
      >
        <div className="flex">
          <p>{card.questionId}.&nbsp;</p>
          <p>{card.title} &nbsp;</p>
        </div>
        <p className={`${getColorClasses(card.difficulty)} px-2 text-xs font-semibold rounded-full `}>
          {card.difficulty}
        </p>
      </div>

    </div>
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




