import "./App.css";
import { AppContext } from "./Context/AppContext";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const BASE_URL = "http://localhost:8000";
  const [timeTrackers, setTimeTrackers] = useState(null);
  const [selectedTimeTracker, setSelectedTimeTracker] = useState(null);
  const [notes, setNotes] = useState(null);
  // const [tokens, setTokens] = useState(null);

  //READ
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

  //Going to try and get notes and money implemented before presentation
  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/notes/`);
        setNotes(res.data);
      } catch (error) {
        console.error("Error fetching notes: ", error);
      }
    };
    getNotes();
  }, []);

  // useEffect(() => {
  //   const getTokens = async () => {
  //     try {
  //       const res = await axios.get(`${BASE_URL}/tokens/`);
  //       setTokens(res.data);
  //     } catch (error) {
  //       console.error("Error fetching tokens: ", error);
  //     }
  //   };
  //   getTokens();
  // }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          BASE_URL,
          timeTrackers,
          setTimeTrackers,
          selectedTimeTracker,
          setSelectedTimeTracker,
          notes,
          setNotes,
          // tokens,
          // setTokens,
        }}
      >
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Main />
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
