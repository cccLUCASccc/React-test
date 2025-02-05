import Button from "./Button";
export default function Suppresseur({ supprimerToDo }){
    const supprimer = () => {
        supprimerToDo();
    };

    return (
        <>
            <Button onClick={supprimer} name="Supprimer" />
        </>
    );
};