import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

export default function TimeTrackerDetails() {
  const { addictions } = useContext(AppContext);
  const { timeTrackers } = useContext(AppContext);

  // Convert the string values to JavaScript Date objects
  const startTime = new Date(timeTrackers[0].start_time);
  const endTime = new Date(timeTrackers[0].end_time);

  // Calculate the duration in milliseconds
  const durationInMilliseconds = endTime - startTime;

  // Convert the duration to days, hours, minutes, and seconds
  const durationInSeconds = Math.floor(durationInMilliseconds / 1000);
  const days = Math.floor(durationInSeconds / 86400); // 86400 seconds in a day
  const hours = Math.floor((durationInSeconds % 86400) / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  console.log(durationInSeconds);

  return (
    <>
      {timeTrackers && addictions ? (
        <>
          <div>
            <h3>I've been {addictions[0].addiction} free for</h3>
          </div>
          <div>
            <h3>
              {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
            </h3>
          </div>
        </>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
}
