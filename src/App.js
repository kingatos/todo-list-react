import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage";
import { StyledList } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <StyledList>
        <li>
          <Link to="/zadania">zadania</Link>
        </li>
        <li>
          <Link to="/autor">o autorze</Link>
        </li>
      </StyledList>
      <Switch>
      <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
