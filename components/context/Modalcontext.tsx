import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserQuestionDTO } from '../types';
import { useKanban } from './Kanbancontext';

const placeholderUserQuestion: UserQuestionDTO = {
  id: 0, // Default values for the properties
  githubId: '',
  questionId: 0,
  title: '',
  difficulty: '',
  titleSlug: '',
  topicTags: [],
  categorySlug: '',
  completionStatus: false,
  timeTaken: null, // Optional property
  code: '',
  notes: '',
  date: '2023-10-27T14:30:00Z',
};

interface ModalContextData {
  isModalOpen: boolean;
  currprops: UserQuestionDTO ;
  handleTimeRangeSelection : (timeRange:string) => void;
  handleSaveAndClose : () => void;
  handleAttributeChange : (attribute: string,value:any) => void;
  openModal: (data: UserQuestionDTO) => void;
  closeModal: () => void;
  deletecard: () => void;
}


const ModalContext = createContext<ModalContextData | undefined>(undefined);
interface ModalProviderProps {
  children: ReactNode;
}
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {

  const {update} = useKanban()


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currprops, setModalData] = useState<UserQuestionDTO >(placeholderUserQuestion);

  const handleAttributeChange = (attribute: string, value: any) => {
    console.log(attribute, value);
    setModalData((prevData) => ({
      ...prevData,
      [attribute]: value,
    }) as UserQuestionDTO);
  };
  
  const handleTimeRangeSelection = (timeRange:string) => {
    handleAttributeChange("timeTaken", timeRange); // Update the "timeTaken" attribute
  };
  const openModal = (data: UserQuestionDTO) => {
    setIsModalOpen(true);
    setModalData(data);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    handleSaveAndClose()
    setModalData(placeholderUserQuestion);
  };


  const deletecard = () => {
      setIsModalOpen(false);
      handleDelete();
      setModalData(placeholderUserQuestion);
      update();
  }




  const handleDelete = () => {
    // Send a POST request to update the data
    fetch(`/api/userquestions/delete?id=${currprops.id}`, {
      method: 'DELETE',

    })
      .then((response) => {
        // Handle the response, e.g., show a success message
        console.log('Data deleted successfully');
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Error deleting data:', error);
      });
  };
  



  const handleSaveAndClose = () => {
    // Send a POST request to update the data
    fetch(`/api/userquestions/update?id=${currprops.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currprops),
    })
      .then((response) => {
        // Handle the response, e.g., show a success message
        console.log('Data updated successfully');
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Error updating data:', error);
      });
  };


  return (
    <ModalContext.Provider value={{ isModalOpen, currprops, openModal, closeModal,deletecard,handleAttributeChange,handleSaveAndClose,handleTimeRangeSelection}}>
      {children}
    </ModalContext.Provider>
  );
};



export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
