import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Launch from "./Launch/Launch"
import Nav from "./Navigation/Nav"

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Launch />
      </Route>
      <Route path="/home">
        <Nav />
        <></>
      </Route>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </Router>
  );
}

export default App;
