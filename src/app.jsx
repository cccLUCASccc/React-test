import { useState } from "react";
import Form from "./Form";
import ToDo from "./ToDo";
import Suppresseur from "./Suppressur";
import HideToDo from "./HideToDo";
import Show from "./Show";

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
                <h1>🚩TODO LIST🚩  </h1>
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






