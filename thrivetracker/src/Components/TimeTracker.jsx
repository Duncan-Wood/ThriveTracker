import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TimeTracker() {
  const navigate = useNavigate();
  const { timeTrackers, BASE_URL } = useContext(AppContext);
  const [selectedTimeTrackerIndex, setSelectedTimeTrackerIndex] =
    useState(null);

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
  
  // // Function to handle adding a new time tracker
  // const handleAddTimeTracker = () => {
  //   // Call the addTimeTracker function from your context to add a new time tracker
  //   addTimeTracker(/* Pass the necessary data for a new time tracker */);
  //   // Navigate to the appropriate page, e.g., list of time trackers
  //   navigate(/* Pass the appropriate path for the list of time trackers */);
  // };

  return (
    <>
      <div>
        <h3 className="text-2xl font-bold mb-4">Time Trackers</h3>
        {/* onClick={handleAddTimeTracker} */}
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
}
