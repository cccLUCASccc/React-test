import Checkbox from "./Checkbox";

export default function ToDo({ todos, toggleCheck }){
    return (
        <div className="list">
            {todos.map((task, index) => (
                <div className="todo" key={index}>
                    <Checkbox
                        checked={task.checked}
                        onChange={() => toggleCheck(index)}
                    />
                    <p style={{ textDecoration: task.checked ? "line-through" : "none" }}>
                        {task.text}
                    </p>
                    <p>
                        {task.checked ? "👌" : "⛔" }
                    </p>
                </div>
            ))}
        </div>
    );
};