import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTasks } from "../tasksSlice.js";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
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
                    {task.content}
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