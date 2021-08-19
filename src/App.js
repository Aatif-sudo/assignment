import './App.css';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Documentation from './components/Documentation/Documentation';
import Account from './components/Account/Account';

function App() {
  return (
      <Router>
    <div className="App">
      <Navbar />
        <Switch>
            <Route path="/" exact>
            <Landing />
          </Route>
            <Route path="/documentation">
            <Documentation />
          </Route>
            <Route path="/account">
            <Account />
          </Route>
        </Switch>
    </div>
      </Router>
  );
}

export default App;
