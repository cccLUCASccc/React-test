export default function Checkbox({ checked, onChange }) {
    return (
        <div className="checkbox">
            <input type="checkbox" checked={checked} onChange={onChange} />
        </div>
    );
};