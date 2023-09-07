import Client from "../Services/api";
import { useNavigate, useParams } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context/AppContext";

export default function UpdateTimeTracker() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { timeTrackers } = useContext(AppContext);

  const [formData, setFormData] = useState({
    user: 1,
    addiction: "",
    addiction_description: "",
    start_time: "",
    end_time: "",
    money_per_day: "",
  });

  useEffect(() => {
    const timeTracker = timeTrackers?.find(
      (timeTracker) => timeTracker.id === parseInt(id)
    );
    if (timeTracker) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        addiction: timeTracker.addiction,
        addiction_description: timeTracker.addiction_description,
        start_time: timeTracker.start_time,
        end_time: timeTracker.end_time,
        money_per_day: timeTracker.money_per_day,
      }));
    }
  }, [id, timeTrackers]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleUpdateTimeTracker = () => {
    Client.put(`/time-trackers/${id}/`, formData)
      .then(() => {
        navigate(`/timetrackers`);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTimeTracker();
    navigate(`/timetrackers`);
  };

  return (
    <>
      {timeTrackers ? (
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="addiction"
            >
              Addiction:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="addiction"
              type="text"
              name="addiction"
              value={formData.addiction}
              onChange={handleChange}
              placeholder="Enter addiction"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="addiction_description"
              type="text"
              name="addiction_description"
              value={formData.addiction_description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="start_time"
            >
              Start Time:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="start_time"
              type="text"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="end_time"
            >
              End Time:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="end_time"
              type="text"
              name="end_time"
              value={formData.end_time || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="money_per_day"
            >
              Money per Day:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="money_per_day"
              type="text"
              name="money_per_day"
              value={formData.money_per_day}
              onChange={handleChange}
              placeholder="Enter money per day"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      ) : (
        "loading..."
      )}
    </>
  );
}
