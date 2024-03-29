import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./common/Navigation/index";
import { toTask, toAuthor, toTasks } from "./routes";

const App = () => (
  <HashRouter>
    <nav>
      <Navigation />
      <Switch>
        <Route path={toTask()}>
          <TaskPage />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toAuthor()}>
          <AuthorPage />
        </Route>
        <Route>
          <Redirect to={toTasks()} />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
