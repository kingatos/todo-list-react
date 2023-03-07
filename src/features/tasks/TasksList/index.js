import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled.js";


const TasksList = ({ tasks, hiddenDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                hidden={task.done && hiddenDone}
                key={task.id}
            >
                <ToggleDoneButton
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </ToggleDoneButton>
                <Content
                    done={task.done}
                >
                    {task.content}
                </Content>
                <RemoveButton
                    onClick={() => removeTask(task.id)}
                    remove
                >
                </RemoveButton>
            </Item>
        ))}
    </List>
);

export default TasksList;