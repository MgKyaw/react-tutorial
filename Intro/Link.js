// export default function Link() {
//     return <a>Link text</a>;
// }

export default function Link({ href, children}) {
    const className = "ui-link";
    return <a href={href} className={className}>{children}</a>;
}
