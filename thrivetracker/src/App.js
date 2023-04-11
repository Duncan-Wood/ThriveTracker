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
  const [moneyTrackers, setMoneyTrackers] = useState(null);
  const [tokens, setTokens] = useState(null);
  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const getAddictions = async () => {
      const res = await axios.get(`${BASE_URL}/addictions/`);
      console.log(res.data);
      setAddictions(res.data);
    };
    getAddictions();
  }, []);
  useEffect(() => {
    const gettimeTrackers = async () => {
      const res = await axios.get(`${BASE_URL}/time-trackers/`);
      console.log(res.data);
      setTimeTrackers(res.data);
    };
    gettimeTrackers();
  }, []);
  useEffect(() => {
    const getmoneyTrackers = async () => {
      const res = await axios.get(`${BASE_URL}/money-trackers/`);
      console.log(res.data);
      setMoneyTrackers(res.data);
    };
    getmoneyTrackers();
  }, []);
  useEffect(() => {
    const getTokens = async () => {
      const res = await axios.get(`${BASE_URL}/tokens/`);
      console.log(res.data);
      setTokens(res.data);
    };
    getTokens();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ addictions, timeTrackers, moneyTrackers, tokens, BASE_URL }}
      >
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </AppContext.Provider>
    </div>
  );
}

export default App;
