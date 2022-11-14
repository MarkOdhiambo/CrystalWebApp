import './App.css';
import Todo from './Todo.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Activitylog from './Activitylog.js';
import Calendar from './Calendar.js';
import Project from './Project';
import { TbListCheck } from "react-icons/tb";
import { BsCalendarEvent} from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { AiOutlineDesktop } from "react-icons/ai";

function App() {
  return (
    <>
      <Router>
      <div className="router">
        <nav>
          <ul>
            <li>
              <Link to="/"><TbListCheck size='2rem' /></Link>
            </li>
            <li>
              <Link to="/calendar"><BsCalendarEvent size='2rem'/></Link>
            </li>
            <li>
              <Link to="/project"><AiOutlineDesktop size='2rem'/></Link>
            </li>
            <li>
              <Link to="/log"><FiActivity size='2rem'/></Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div>
        <Switch>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/log">
            <Activitylog />
          </Route>
          <Route path="/">
            <Todo />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
