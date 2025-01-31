import { useState } from "react";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [HiddenTodo, setHiddenTodo] = useState([])

    const addToDo = (newToDo) => {
        if (newToDo.trim() !== "") {
            setTodos([...todos, { text: newToDo, checked: false }]);
        }
    };

    const supprimerToDo = () => {
        const newTodos = todos.filter((task) => !task.checked);
        setTodos(newTodos);
    };

    const cacherToDo = () => {
        const newTodos = todos.filter((task) => !task.checked);
        const hidden = todos.filter((task) => task.checked);
        setHiddenTodo(hidden)
        setTodos(newTodos)
    };

    const montrerTodo = () => {
        setTodos([...todos, ...HiddenTodo])
        setHiddenTodo([])
    }

    const toggleCheck = (index) => {
        const newTodos = [...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);
    };

    return (
        <>
            <div className="container">
                <h1>TODO LIST.</h1>
                <hr />
                <Form addToDo={addToDo} />
                <ToDo todos={todos} toggleCheck={toggleCheck} />
                <div className="interactifs">
                    <Suppresseur supprimerToDo={supprimerToDo} />
                    <HideToDo cacherToDo={cacherToDo}/>
                    <Show montrerTodo={montrerTodo}/>
                </div>
            </div>
        </>
    );
}

const Button = ({ name, onClick }) => {
    return (
        <a className="button" onClick={onClick} style={{ cursor: "pointer" }}>
            {name}
        </a>
    );
};

const Form = ({ addToDo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        addToDo(inputValue);
        setInputValue("");
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a thing to do."
                />
                <Button name="Ajouter" onClick={handleSubmit} />
            </form>
        </div>
    );
};

const Checkbox = ({ checked, onChange }) => {
    return (
        <div className="checkbox">
            <input type="checkbox" checked={checked} onChange={onChange} />
        </div>
    );
};

const ToDo = ({ todos, toggleCheck }) => {
    return (
        <div className="list">
            {todos.map((task, index) => (
                <div key={index}>
                    <Checkbox
                        checked={task.checked}
                        onChange={() => toggleCheck(index)}
                    />
                    <p style={{ textDecoration: task.checked ? "line-through" : "none" }}>
                        {task.text}
                    </p>
                </div>
            ))}
        </div>
    );
};

const Suppresseur = ({ supprimerToDo }) => {
    const supprimer = () => {
        supprimerToDo();
    };

    return (
        <>
            <Button onClick={supprimer} name="Supprimer" />
        </>
    );
};

const HideToDo = ({cacherToDo}) => {
    const cacher = () => {
        cacherToDo();
    }
    return(
        <>
            <Button onClick={cacher} name="Hide" />
        </>
    )
}

const Show = ({montrerTodo}) => {
    const montrer = () => {
        montrerTodo();
    }
    return(
        <>
            <Button onClick={montrer} name="Show"/>
        </>
    )
}