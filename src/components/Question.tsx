import useQuiz from "../services/hooks/useQuiz";
import Option from "./Option";

export default function Question() {
  const { isPlaying, handleClick, currentQuestion } = useQuiz();

  return (
    <div className="flex flex-col gap-y-10">
      <div className="text-3xl sm:text-4xl text-white tracking-tighter font-bold w-[300px] sm:w-[500px]">
        {currentQuestion.question}
      </div>
      <div className="grid grid-cols-2  gap-x-4 sm:gap-x-2 gap-y-4">
        {currentQuestion.options.map((option) => (
          <Option
            key={option}
            option={option}
            isCorrect={option === currentQuestion.answer}
            isPlaying={isPlaying}
            onClick={() => handleClick(option)}
          />
        ))}
      </div>
    </div>
  );
}
