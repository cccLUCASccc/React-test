import Button from "./Button";

export default function Show({montrerTodo}){
    const montrer = () => {
        montrerTodo();
    }
    return(
        <>
            <Button onClick={montrer} name="Show all"/>
        </>
    )
}