import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserQuestionDTO } from '../types';



interface ModalContextData {
  isModalOpen: boolean;
  modalData: UserQuestionDTO | null;
  openModal: (data: UserQuestionDTO) => void;
  closeModal: () => void;
}





const ModalContext = createContext<ModalContextData | undefined>(undefined);
interface ModalProviderProps {
  children: ReactNode;
}


export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<UserQuestionDTO | null>(null);

  const openModal = (data: UserQuestionDTO) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);  
    setModalData(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, modalData, openModal, closeModal }}>
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
