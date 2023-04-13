// import React, { useContext, useEffect, useState } from "react";
import React, { useState } from "react";

// import { AppContext } from "../Context/AppContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

export default function AddTimeTracker() {
  // const navigate = useNavigate();
  // const { timeTrackers, setTimeTrackers, BASE_URL } = useContext(AppContext);

  // const showTimeTracker = (index) => {
  //   navigate(`/timetracker/details/${index}`);
  // };

  const [formData, setFormData] = useState({
    user: 1,
    user_addiction: {
      addiction: null,
      description: null,
      user: 1,
    },
    start_time: new Date(),
    end_time: null,
    savings: {
      user: 1,
      money_per_day: null,
      money_per_day_currency: "USD",
      time_tracker: null,
    },
  });

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  console.log(formData);

  return (
    <form className="max-w-md mx-auto">
      <h2 className="text-lg font-medium mb-4">User Addiction</h2>
      <div className="mb-4">
        <label htmlFor="addiction" className="block text-sm font-medium mb-1">
          Addiction
        </label>
        <input
          type="text"
          id="addiction"
          name="user_addiction.addiction"
          value={formData.user_addiction.addiction || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="user_addiction.description"
          value={formData.user_addiction.description || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>

      <h2 className="text-lg font-medium mb-4">Savings</h2>
      <div className="mb-4">
        <label
          htmlFor="money_per_day"
          className="block text-sm font-medium mb-1"
        >
          Money per day
        </label>
        <input
          type="text"
          id="money_per_day"
          name="savings.money_per_day"
          value={formData.savings.money_per_day || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="money_per_day_currency"
          className="block text-sm font-medium mb-1"
        >
          Currency
        </label>
        <select
          id="money_per_day_currency"
          name="savings.money_per_day_currency"
          value={formData.savings.money_per_day_currency || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="time_tracker"
          className="block text-sm font-medium mb-1"
        >
          Time Tracker
        </label>
        <input
          type="text"
          id="time_tracker"
          name="savings.time_tracker"
          value={formData.savings.time_tracker || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}
