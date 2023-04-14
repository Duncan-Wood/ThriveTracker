import Client from "../Services/api";
import { useNavigate, useParams } from "react-router-dom";
import { format } from 'date-fns'
import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

export default function UpdateTimeTracker() {
  format(new Date(), 'yyyy-MM-dd HH:mm:ss')

  useParams(selectedTimeTracker.id)

  const { selectedTimeTracker } = useContext(AppContext);

  console.log(selectedTimeTracker)

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    user: 1,
    addiction: selectedTimeTracker.addiction,
    addiction_description: selectedTimeTracker.addiction_description,
    start_time: selectedTimeTracker.start_time,
    end_time: selectedTimeTracker.end_time? selectedTimeTracker.end_time : format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    money_per_day: selectedTimeTracker.money_per_day,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = () => {
    console.log(formData);
    Client.put(`/time-trackers/<int:pk>/`, formData)
      .then(() => {
        navigate(`/timetracker`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    // handleUpdateTimeTracker()
    navigate(`/timetracker`);
    window.location.reload()
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
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
          value={formData.end_time}
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
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="money_per_day_currency"
        >
          Money per Day Currency:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="money_per_day_currency"
          type="text"
          name="money_per_day_currency"
          value={formData.money_per_day_currency}
          onChange={handleChange}
          placeholder="Enter money per day currency"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
