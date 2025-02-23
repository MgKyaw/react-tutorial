export default function Input({type, placeholder, name}) {
    const className = "ui-textfield";
    const typeValue = type || "text";
    return <input type={typeValue} className={className} placeholder={placeholder} name={name} />;
}
