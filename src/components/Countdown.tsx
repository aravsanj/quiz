import { useEffect } from "react";
import useQuiz from "../services/hooks/useQuiz";

export default function Countdown() {
  const { timeLeft, setTimeLeft, handleClick, isPlaying, handleNext } =
    useQuiz();

  useEffect(() => {
    if (timeLeft < 0) {
      if (isPlaying) {
        handleClick(null);
      } else {
        handleNext();
      }
      setTimeLeft(5);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div
      className={`${isPlaying ? "bg-purple-600" : "bg-gray-500"} bg-opacity-40 ring-2 drop-shadow-md animate-bounce ring-white text-2xl h-16 w-16 sm:text-3xl text-white sm:h-20 sm:w-20 flex justify-center items-center rounded-full`}
    >
      {timeLeft}
    </div>
  );
}
