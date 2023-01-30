import { List, Item, Content, Button } from "./styled.js";


const Tasks = ({ tasks, hiddenDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                hidden={task.done && hiddenDone}
                key={task.id}
            >
                <Button
                    onClick={() => toggleTaskDone(task.id)}
                    toggleDone
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content
                    done={task.done}
                >
                    {task.content}
                </Content>
                <Button
                    onClick={() => removeTask(task.id)}
                    remove
                >
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;