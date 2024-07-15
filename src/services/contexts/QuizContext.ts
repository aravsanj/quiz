import { createContext, Dispatch, SetStateAction } from "react";

type QuizContextType = {
  startGame: () => void;
  hasGameStarted: boolean;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  timeLeft: number;
  setTimeLeft: Dispatch<SetStateAction<number>>;
  handleClick: (option: string | null) => void;
  handleNext: () => void;
  currentQuestion: {
    question: string;
    options: string[];
    answer: string;
  };
  score: number;
  showResult: boolean;
  playAgain: () => void;
};

const QuizContext = createContext<QuizContextType>({} as QuizContextType);

export default QuizContext;
