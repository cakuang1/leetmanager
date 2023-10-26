import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserQuestionDTO } from '../types';


// Define the shape of your card
interface Card {
  id: number;
  title: string;
  date: string;
  // Add other properties as needed
}

// Define the shape of your context data
interface KanbanContextData {
  kanbanState: {
    cards: UserQuestionDTO[];
  };
  addCard: (newCard: Card) => void;
  updateCard: (cardId: number, newDate: string) => void;
}

// Create a context
const KanbanContext = createContext<KanbanContextData | undefined>(undefined);

// Create a provider component
export function KanbanProvider({ children }: { children: ReactNode }) {
  const [kanbanState, setKanbanState] = useState({
    cards: [] as Card[], // Initialize the state with an empty array
  });

  // Define functions to update the state
  const addCard = (newCard: Card) => {
    setKanbanState({
      ...kanbanState,
      cards: [...kanbanState.cards, newCard],
    });
  };

  const updateCard = (cardId: number, newDate: string) => {
    // Implement your logic to update a card's date
  };

  // Provide the state and functions to children
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
