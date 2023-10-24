import React, { ChangeEvent } from 'react';
import { UserQuestionDTO } from './types';
import { useState } from 'react';





const CardPopup = (card:UserQuestionDTO) => {
  const [formData, setFormData] = useState({
    categorySlug: card.categorySlug,
    completionStatus: card.completionStatus,
    timeTaken: card.timeTaken || '',
    code: card.code,
    notes: card.notes,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <form>
      <div>
        <label>Category Slug:</label>
        <input
          type="text"
          name="categorySlug"
          value={formData.categorySlug}
          onChange={handleChange}
          disabled
        />
      </div>
      <div>
        <label>Completion Status:</label>
        <input
          type="checkbox"
          name="completionStatus"
          checked={formData.completionStatus}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Time Taken:</label>
        <input
          type="text"
          name="timeTaken"
          value={formData.timeTaken}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Code:</label>
        <textarea
          name="code"
          value={formData.code}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Notes:</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>
    </form>
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