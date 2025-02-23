export default function Container({children}) {
    const className = "ui-container";
    return <div className={className}>{children}</div>;
}