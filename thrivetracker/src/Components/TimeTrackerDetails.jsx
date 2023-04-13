import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";


export default function TimeTrackerDetails() {
  const { timeTrackers } = useContext(AppContext);

  let { index } = useParams();
  const navigate = useNavigate();


  // State to hold progress percentage
  const [daysProgress, setDaysProgress] = useState(0);
  const [hoursProgress, setHoursProgress] = useState(0);
  const [minutesProgress, setMinutesProgress] = useState(0);
  const [secondsProgress, setSecondsProgress] = useState(0);

  // State to hold days, hours, minutes, and seconds
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (timeTrackers && timeTrackers.length > 0) {
      // Check if timeTrackers data is loaded
      // Convert the string values to JavaScript Date objects
      const startTime = new Date(timeTrackers[index].start_time);
      let endTime = timeTrackers[index].end_time
        ? new Date(timeTrackers[index].end_time)
        : null;

      // If end_time is null, update it to current time
      if (!endTime) {
        endTime = new Date();
      }

      // Calculate the duration in milliseconds
      const durationInMilliseconds = endTime - startTime;

      // Convert the duration to days, hours, minutes, and seconds
      const durationInSeconds = Math.floor(durationInMilliseconds / 1000);
      const days = Math.floor(durationInSeconds / 86400); // 86400 seconds in a day
      const hours = Math.floor((durationInSeconds % 86400) / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);
      const seconds = durationInSeconds % 60;

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // Update progress percentage every second if endTime is null
      if (!timeTrackers[index].end_time) {
        const interval = setInterval(() => {
          setDaysProgress((days * 100) / 30); // Assuming 30 days as the goal
          setHoursProgress((hours * 100) / 24);
          setMinutesProgress((minutes * 100) / 60);
          setSecondsProgress((seconds * 100) / 60);
        }, 1000);
        return () => clearInterval(interval);
      } else {
        setDaysProgress((days * 100) / 30); // Assuming 30 days as the goal
        setHoursProgress((hours * 100) / 24);
        setMinutesProgress((minutes * 100) / 60);
        setSecondsProgress((seconds * 100) / 60);
      }
    }
  }, [timeTrackers, index]);

  // // Function to handle deleting a time tracker
  // const handleDeleteTimeTracker = () => {
  //   // Call the deleteTimeTracker function from your context to delete the time tracker
  //   deleteTimeTracker(/* Pass the index or ID of the time tracker to be deleted */);
  //   // Navigate to the appropriate page, e.g., list of time trackers
  //   navigate(/* Pass the appropriate path for the list of time trackers */);
  // };

  return (
    <>
      {timeTrackers ? (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            I've been {timeTrackers[index].addiction} free for
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-24">
                <div className="relative h-3 bg-gray-300 rounded-lg">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
                    style={{ width: `${daysProgress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-lg">{days} days / 30 days</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24">
                <div className="relative h-3 bg-gray-300 rounded-lg">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
                    style={{ width: `${hoursProgress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-lg">{hours} hours / 24 hours</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24">
                <div className="relative h-3 bg-gray-300 rounded-lg">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
                    style={{ width: `${minutesProgress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-lg">{minutes} minutes / 60 minutes</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24">
                <div className="relative h-3 bg-gray-300 rounded-lg">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
                    style={{ width: `${secondsProgress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-lg">{seconds} seconds / 60 seconds</span>
            </div>
          </div>
          {/* onClick={handleUpdateTimeTracker} */}
          <button>Update Time Tracker</button>
          {/* onClick={handleDeleteTimeTracker} */}
          <button>Delete Time Tracker</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
