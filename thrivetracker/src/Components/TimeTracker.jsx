import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

export default function TimeTracker() {
  let navigate = useNavigate();

  const { addictions, timeTrackers } = useContext(AppContext);

  const showTimeTracker = (index) => {
    navigate(`/timetracker/details/${index}`);
  };

  return (
    <>
      <div>
        <h3 className="text-2xl font-bold mb-4">Time Trackers</h3>
        {timeTrackers && addictions ? (
          timeTrackers.map((timeTracker, index) => {
            const matchingAddiction = addictions.find(
              (addiction) => addiction.id === timeTracker.user_addiction
            );

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
              >
                <div>
                  <h4 className="text-lg font-semibold">
                    {matchingAddiction ? matchingAddiction.addiction : "Unknown"}
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
