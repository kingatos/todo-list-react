import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage";
import { ItemA, StyledList, ItemLi } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <StyledList>
        <ItemLi>
          <ItemA to="/zadania">zadania</ItemA>
        </ItemLi>
        <ItemLi>
          <ItemA to="/autor">o autorze</ItemA>
        </ItemLi>
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
