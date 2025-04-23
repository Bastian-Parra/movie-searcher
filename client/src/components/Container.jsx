import "../assets/styles/container.css"

function Container({ children }) {
    return (
        <div className="principal-container">
            {children}
        </div>
    )
}

export default Container
