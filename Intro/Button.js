// export default function Button() {
//     return <button>Button text</button>;
// }

export default function Button({ type, disabled, children}) {
    const className = "ui-button";
    return <button type={type} disabled={disabled} className={className}>{children}</button>;
}
