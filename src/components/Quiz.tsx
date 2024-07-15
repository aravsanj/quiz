import Countdown from "./Countdown";
import Question from "./Question";

export default function Quiz() {
  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-900 to-purple-800">
      <div className="p-2 flex -mt-20 flex-col gap-y-10">
        <Countdown />
        <Question />
      </div>
    </div>
  );
}
