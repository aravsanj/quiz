import "./App.css";
import Countdown from "./components/Countdown";
import Question from "./components/Question";
import useQuiz from "./services/hooks/useQuiz";

function App() {
  const { showResult, score, playAgain, hasGameStarted, startGame } = useQuiz();

  if (!hasGameStarted) {
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

  if (showResult) {
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

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-900 to-purple-800">
      <div className="p-2 flex -mt-20 flex-col gap-y-10">
        <Countdown />
        <Question />
      </div>
    </div>
  );
}

export default App;
