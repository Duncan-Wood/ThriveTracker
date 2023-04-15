import TimeTracker from "./TimeTracker";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/createtimetracker");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to ThriveTracker!</h1>
      <p className="text-lg text-gray-600 mb-8">
        ThriveTracker is a new way to help you in your addiction recovery.
      </p>
      <div className="w-150">
        <TimeTracker />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          What can you do with ThriveTracker?
        </h2>
        <ul className="list-disc list-inside">
          <li className="text-lg text-gray-600 mb-2">
            Create a time tracker for your addiction recovery.
          </li>
          <li className="text-lg text-gray-600 mb-2">
            Track your progress and earn tokens every 30 days. (in development)
          </li>
          <li className="text-lg text-gray-600 mb-2">
            Add notes to your time tracker to help you stay on track. (in
            development)
          </li>
          <li className="text-lg text-gray-600 mb-2">
            Calculate your savings from not using your addiction. (in
            development)
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <button
          onClick={handleGetStarted}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          style={{ marginBottom: "2rem" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
