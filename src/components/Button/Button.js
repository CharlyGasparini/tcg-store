import "./Button.css";

const Button = ({children, handleOnClick}) => {
    return (
        <button onClick={handleOnClick} className="button">
            {children}
        </button>
    )
}

export default Button;