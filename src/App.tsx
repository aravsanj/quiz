import "./App.css";
import GettingStarted from "./components/GettingStarted";
import Quiz from "./components/Quiz";
import ShowResults from "./components/ShowResults";
import useQuiz from "./services/hooks/useQuiz";

function App() {
  const { showResult, hasGameStarted } = useQuiz();

  if (!hasGameStarted) {
    return <GettingStarted />;
  }

  if (showResult) {
    return <ShowResults />;
  }

  return <Quiz />;
}

export default App;
