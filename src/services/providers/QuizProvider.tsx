import { useState } from "react";
import QuizContext from "../contexts/QuizContext";
import { questions } from "../../data/data";

type QuizProviderProps = {
  children: React.ReactNode;
};

export default function QuizProvider({ children }: QuizProviderProps) {
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState(5);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function startGame() {
    setHasGameStarted(true);
  }

  function handleClick(option: string | null) {
    if (option === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setIsPlaying(false);
    setTimeLeft(5);
  }

  function handleNext() {
    if (questions.indexOf(currentQuestion) === questions.length - 1) {
      setShowResult(true);
      return;
    }

    setIsPlaying(true);
    setCurrentQuestion((prevQuestion) => {
      const nextIndex = questions.indexOf(prevQuestion) + 1;
      return questions[nextIndex];
    });
  }

  function playAgain() {
    setScore(0);
    setShowResult(false);
    setCurrentQuestion(questions[0]);
    setIsPlaying(true);
  }

  return (
    <QuizContext.Provider
      value={{
        startGame,
        hasGameStarted,
        isPlaying,
        setIsPlaying,
        timeLeft,
        setTimeLeft,
        handleClick,
        handleNext,
        currentQuestion,
        score,
        showResult,
        playAgain,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
