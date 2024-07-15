import useQuiz from "../services/hooks/useQuiz";

export default function GettingStarted() {
  const { startGame } = useQuiz();
  return (
    <div className="h-screen flex flex-col text-center  gap-y-20 justify-center items-center bg-gradient-to-r from-purple-900 to-purple-800">
      <div className="-mt-10">
        <span className="text-4xl text-center font-extrabold tracking-tight text-slate-100">
          4 questions, 4 options,{" "}
          <span className="underline decoration-wavy opacity-90	text-yellow-200 underline-offset-8 leading-normal	">
            5 seconds each.
          </span>
        </span>
      </div>
      <button
        className="bg-purple-600 p-3 rounded-xl text-white bg-opacity-60 font-medium ring-1 ring-white"
        onClick={startGame}
      >
        Start the quiz
      </button>
    </div>
  );
}
