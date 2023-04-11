import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

export default function TimeTracker() {
  let navigate = useNavigate();

  const { addictions } = useContext(AppContext);
  //   const { moneyTrackers } = useContext(AppContext);
  //   const { tokens } = useContext(AppContext);
  //   const goBack = () => {
  //     navigate(-1);
  //   };

  const showTimeTracker = (index) => {
    navigate(`/timetracker/details/${index}`);
  };

  return (
    <div>
      {/* <button onClick={goBack}>go back</button> */}
      <h2>time-tracker page</h2>
      <div>
        <h3>Time Trackers</h3>
        <ul>
          {addictions
            ? addictions.map((addiction, index) => (
                <li
                  key={index}
                  onClick={() => {
                    showTimeTracker(index);
                  }}
                >
                  <h3>{addiction.addiction}</h3>
                  <p>{addiction.description}</p>
                </li>
              ))
            : 
            <div>Loading...</div>}
        </ul>
      </div>
    </div>
  );
}
