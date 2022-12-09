import "./style.css";

const Tasks = ({ tasks, hiddenDone, removeTask }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`list__item${task.done && hiddenDone ? " list__item--hidden" : ""}`}
                key={task.id}
            >
                <button className="button__list">
                    {task.done ? "✔" : ""}
                </button>
                <p className={`list__form${task.done ? " list__itemDone" : ""}`}>
                    {task.content}
                </p>
                <button onClick={() => removeTask(task.id)} className="button__listRemove">
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;