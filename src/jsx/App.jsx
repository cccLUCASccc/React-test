import { useEffect, useState } from "react";
import Form from "./Form";
import ToDo from "./ToDo";
import Suppresseur from "./Suppressur";
import HideToDo from "./HideToDo";
import Show from "./Show";

export default function App() {
    const LSKEY = "todos"
    const LSKEY2 = "hiddentodos"
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LSKEY)) ?? []);
    const [HiddenTodo, setHiddenTodo] = useState(JSON.parse(localStorage.getItem(LSKEY2)) ?? [])

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

    useEffect(() => {
        localStorage.setItem(LSKEY, JSON.stringify(todos))
        localStorage.setItem(LSKEY2, JSON.stringify(HiddenTodo))
    }, [todos, HiddenTodo])

    return (
        <>
            <div className="container">
                <h1>🚩TODO LIST 🚩</h1>
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






