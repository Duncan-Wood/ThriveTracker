
import './App.css';
import {AppContext} from './Context/AppContext'

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="App">
      <AppContext.Provider value> 
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
      </AppContext.Provider>
    </div>
  );
}

export default App;
