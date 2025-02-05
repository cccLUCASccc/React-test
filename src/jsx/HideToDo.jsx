import Button from "./Button";

export default function HideToDo({cacherToDo}){
    const cacher = () => {
        cacherToDo();
    }
    return(
        <>
            <Button onClick={cacher} name="Hide" />
        </>
    )
}