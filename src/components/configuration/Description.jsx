export default ({ children, title = "Information" }) => {
    return (
        <details className="Description">
            <summary>{title}</summary>
            { children }
        </details>
    )
}