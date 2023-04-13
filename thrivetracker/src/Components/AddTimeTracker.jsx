// import React, { useContext, useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import Client from "../Services/api";
import { BASE_URL } from "../Services/api";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AddTimeTracker() {
  const [timeTrackers, setTimeTrackers] = useState([]);
  let { index } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getTimeTrackers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/time-trackers/`);
        setTimeTrackers(res.data);
      } catch (error) {
        console.error("Error fetching time trackers: ", error);
      }
    };
    getTimeTrackers();
  }, []);

  const [formData, setFormData] = useState({
    user: 1,
    addiction: "",
    addiction_description: "",
    start_time: '',
    end_time: '',
    money_per_day: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = () => {
    console.log(formData);
    Client.post(`/time-trackers/`, formData)
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
      {/* <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="start_time"
        >
          Start Time:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="start_time"
          type="datetime-local"
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
          type="datetime-local"
          name="end_time"
          value={formData.end_time}
          onChange={handleChange}
        />
      </div> */}
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
      {/* <div className="mb-4">
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
      </div> */}

      {/* <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time_tracker">
      {/* <label>
        Time Tracker:
        <input
          type="text"
          name="savings.time_tracker"
          value={formData.savings.time_tracker}
          onChange={handleChange}
        />
      </label> */}
      <button type="submit">Submit</button>
    </form>
  );
}
