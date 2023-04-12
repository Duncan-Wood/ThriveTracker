import "./App.css";
import { AppContext } from "./Context/AppContext";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {

  const [addictions, setAddictions] = useState(null);
  const [timeTrackers, setTimeTrackers] = useState(null);
  const [Savings, setSavings] = useState(null);
  const [tokens, setTokens] = useState(null);
  const BASE_URL = "http://localhost:8000";
  
  //READ
  useEffect(() => {
    const getAddictions = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/addictions/`);
        setAddictions(res.data);
      } catch (error) {
        console.error("Error fetching addictions: ", error);
      }
    };
    getAddictions();
  }, []);
  
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
  
  useEffect(() => {
    const getSavings = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/savings/`);
        setSavings(res.data);
      } catch (error) {
        console.error("Error fetching savings: ", error);
      }
    };
    getSavings();
  }, []);
  
  useEffect(() => {
    const getTokens = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/tokens/`);
        setTokens(res.data);
      } catch (error) {
        console.error("Error fetching tokens: ", error);
      }
    };
    getTokens();
  }, []);

  console.log("Addictions: ", addictions)
  console.log("Time Trackers: ", timeTrackers)
  console.log("Money Trackers: ", Savings)
  console.log("Tokens: ", tokens)

  return (
    <div className="App">
      <AppContext.Provider
        value={{ addictions, timeTrackers, Savings, tokens, BASE_URL }}
      >
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Main />
        </main>
        {/* <footer>
          <Footer />
        </footer> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;
