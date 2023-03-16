import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTasks, selectHideDone, selectTasksbyQuery } from "../.././tasksSlice";
import { Link, useLocation } from "react-router-dom";
import searchQueryParamName from "././../searchQueryParamName";

const TasksList = () => {
    const location = useLocation(); 
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksbyQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    
    const dispatch = useDispatch();

    return (
        <List>
        {tasks.map(task => (
            <Item
                hidden={task.done && hideDone}
                key={task.id}
            >
                <ToggleDoneButton
                    onClick={() => dispatch(toggleTaskDone(task.id))}
                >
                    {task.done ? "✔" : ""}
                </ToggleDoneButton>
                <Content
                    done={task.done}
                >
                <Link to={`/zadania/${task.id}`}>{task.content} </Link>
                </Content>
                <RemoveButton
                    onClick={() => dispatch(removeTasks(task.id))}
                >
                </RemoveButton>
            </Item>
        ))}
    </List>
    );
};

export default TasksList;