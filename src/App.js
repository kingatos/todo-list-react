import { HashRouter, Switch, Link, Route } from "react-router-dom";
import Author from "./features/author/Author";
import Tasks from "./features/tasks/Tasks";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">zadania</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
