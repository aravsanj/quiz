import { useState } from "react";
import useQuiz from "../services/hooks/useQuiz";

type OptionProps = {
  option: string;
  isCorrect: boolean;
  isPlaying: boolean;
  onClick: (option: string) => void;
};

export default function Option(props: OptionProps) {
  const { option, isCorrect } = props;

  const [isSelected, setIsSelected] = useState(false);

  const { isPlaying, handleClick: onClick } = useQuiz();

  const handleClick = () => {
    setIsSelected(true);
    onClick(option);
  };

  let bgColor;

  if (isPlaying) {
    bgColor = "bg-purple-600";
  } else if (!isPlaying && isCorrect) {
    bgColor = "bg-green-500";
  } else if (!isPlaying && isSelected) {
    bgColor = "bg-red-500";
  } else {
    bgColor = "bg-gray-500";
  }

  return (
    <button
      onClick={handleClick}
      className={`py-3 w-[160px] sm:w-[230px] ${bgColor} bg-opacity-60 ring-2 ring-white text-white rounded-lg shadow-md ${isPlaying ? "cursor-pointer hover:bg-opacity-80" : "pointer-events-none"}`}
    >
      {option}
    </button>
  );
}
