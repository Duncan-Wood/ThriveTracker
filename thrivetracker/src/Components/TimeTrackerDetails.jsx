import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

export default function TimeTrackerDetails() {
    const { addictions, timeTrackers } = useContext(AppContext);
    let { index } = useParams();
    const navigate = useNavigate();

    if (timeTrackers) {
        console.log(index)
    }

    //get a live count of the time tracker
    

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
      const endTime = new Date(timeTrackers[index].end_time);

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

      // Update progress percentage every second
      const interval = setInterval(() => {
        setDaysProgress((days * 100) / 30); // Assuming 30 days as the goal
        setHoursProgress((hours * 100) / 24);
        setMinutesProgress((minutes * 100) / 60);
        setSecondsProgress((seconds * 100) / 60);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeTrackers, index]);

  return (
    <>
      {timeTrackers && addictions ? (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            I've been {addictions[0].addiction} free for
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
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
