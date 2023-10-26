import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserQuestionDTO } from '../types';
import { useEffect } from 'react';


interface KanbanContextData {
  kanbanState: {
    cards: UserQuestionDTO[];
    dates : string[]
  };
  addCard: (newCard: UserQuestionDTO) => void;
  updateCard: (cardId: number, newDate: string) => void;


}



const KanbanContext = createContext<KanbanContextData | undefined>(undefined);
export function KanbanProvider({ children }: { children: ReactNode }) {
  const date = new Date(); // Use your desired date here
  const weekDates = getWeekDatesInISO(date);
  const [columns, setColumns] = useState(weekDates);
  const [columnData, setColumndata] = useState<UserQuestionDTO[]>([]);

  const addCard = (newCard: UserQuestionDTO) => {
    const updatedColumnData = [...columnData, newCard];
    // Update the state with the new array
    setColumndata(updatedColumnData);
  };

  const updateCard = (cardId: number, updatedCard: UserQuestionDTO) => {
    // Find the index of the card with the specified ID
    const cardIndex = columnData.findIndex((card) => card.id === cardId);

    if (cardIndex !== -1) {
      // If the card with the specified ID is found, replace it with the updated card
      const updatedCards = [...columnData];
      updatedCards[cardIndex] = updatedCard;
      // Update the state with the updated list of cards
      setKanbanState({
        ...kanbanState,
        cards: updatedCards,
      });
    }
  };
  




  useEffect(() => {
    // Fetch data from your API and update the state
    fetch('/api/userquestions/fetchdates') // Replace with the actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setKanbanState({ cards: data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect once


  return (
    <KanbanContext.Provider value={{ kanbanState, addCard, updateCard }}>
      {children}
    </KanbanContext.Provider>
  );
}



// Create a custom hook to access the context
export function useKanban() {
  const context = useContext(KanbanContext);
  if (context === undefined) {
    throw new Error('useKanban must be used within a KanbanProvider');
  }
  return context;
}





function getWeekDatesInISO(date: Date) {
  throw new Error('Function not implemented.');
}

