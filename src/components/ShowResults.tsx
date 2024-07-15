import useQuiz from "../services/hooks/useQuiz";

export default function ShowResults() {
  const { score, playAgain } = useQuiz();
  return (
    <div className="flex h-screen justify-center items-center flex-col gap-y-10 bg-gradient-to-r from-purple-900 to-purple-800">
      <div className="text-center text-3xl sm:text-4xl text-white  tracking-tight">
        Your total score is <span className="font-semibold">{score}/4</span>
      </div>
      <button
        className="bg-purple-600 p-3 rounded-xl text-white bg-opacity-60 font-medium ring-1 ring-white"
        onClick={playAgain}
      >
        Play again
      </button>
    </div>
  );
}
