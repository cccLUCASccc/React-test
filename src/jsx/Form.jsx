import { useState } from "react";
import Button from "./Button";
import './../style/form.css'
export default function Form({addToDo}){
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        addToDo(inputValue);
        setInputValue("");
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit} className="form">
                <input
                    className="textinput"
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