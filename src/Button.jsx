export default function Button({name, onClick}){
    return (
        <a className="button" onClick={onClick} style={{ cursor: "pointer" }}>
            {name}
        </a>
    );
};