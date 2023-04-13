import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

export default function TimeTracker() {
  const navigate = useNavigate();
  const { timeTrackers } = useContext(AppContext);

  const [selectedTimeTrackerIndex, setSelectedTimeTrackerIndex] = useState(null);


  // Function to fetch time trackers from the API
  useEffect(() => {
    // Update the selectedTimeTrackerIndex state when timeTrackers change
    // to ensure that the correct index is selected
    if (timeTrackers && selectedTimeTrackerIndex === null) {
      const matchingIndex = timeTrackers.findIndex(
        (timeTracker) =>
          timeTracker.user_addiction.id ===
          (timeTrackers[selectedTimeTrackerIndex]?.user_addiction.id || null)
      );
      setSelectedTimeTrackerIndex(matchingIndex);
    }
  }, [timeTrackers, selectedTimeTrackerIndex]);

  const showTimeTracker = (index) => {
    navigate(`/timetracker/details/${index}`);
  };

  
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold mb-4">Time Trackers</h3>

        <button>Add Time Tracker</button>

        {timeTrackers ? (
          timeTrackers.map((timeTracker, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
              >
                <div>
                  <h4 className="text-lg font-semibold">
                    {timeTracker.user_addiction.addiction}
                  </h4>
                  <p className="text-gray-500">{timeTracker.description}</p>
                </div>
                <button
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
                  onClick={() => showTimeTracker(index)}
                >
                  View Details
                </button>
              </div>
            );
          })
        ) : (
          <p>Loading time trackers...</p>
        )}
      </div>
    </>
  );
};