import './App.css';
import Todo from './Todo.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Activitylog from './Activitylog.js';
import CalendarSchedule from './Calendar.js';
import Project from './Project';
import Home from './Home.js';
import { TbListCheck } from "react-icons/tb";
import { BsCalendarEvent} from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { AiOutlineDesktop } from "react-icons/ai";
import {BiHome} from "react-icons/bi";
import { IconContext } from "react-icons";

function App() {
  return (
    <>
      <Router>
      <div className="router">
        <nav>
          <div className="navigation">
            <ul>
            <IconContext.Provider value={{ className: "icon" }}>
              <li>
                <Link to="/"><BiHome size='2rem'/></Link>
              </li>
              <li>
                <Link to="/todo"><TbListCheck size='2rem'/></Link>
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
              </IconContext.Provider>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div>
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/calendar">
            <CalendarSchedule />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/log">
            <Activitylog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
