import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate, Link } from "react-router-dom";

export default function TimeTracker() {
  let navigate = useNavigate();

  const { addictions } = useContext(AppContext);
//   const { TimeTrackers } = useContext(AppContext);
//   const { moneyTrackers } = useContext(AppContext);
//   const { tokens } = useContext(AppContext);
console.log(addictions)
  const goBack = () => {
    navigate(-1);
  };

  const showTimeTracker = (index) => {
    navigate(`/time-trackers/details/${index}`);
  };

  return (
    <div>
      <button onClick={goBack}>go back</button>
      <h2>time-tracker page</h2>
      <div>
        <h3>addictions</h3>
        <ul>
          {addictions.length > 0 ? (
            addictions.map((addiction, index) => (
              <li key={index}>
                <Link to={`/addictions/details/${index}`}>
                  {addiction.addiction}
                </Link> - {addiction.description}
              </li>
            ))
          ) : (
            <li>Loading addictions...</li>
          )}
        </ul>
      </div>
    </div>
  );
}
