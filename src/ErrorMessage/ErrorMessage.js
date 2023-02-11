import { useNavigate } from "react-router-dom";
import "./ErrorMessage.css";

const ErrorMessage = ({messages}) => {

    const navigate = useNavigate();
    let count = 0;

    return (
        <div  className="errorMessage">
            <h1>Error!</h1>
            {messages.map( msg => {
                count+=1;
                return (
                    <h2 key={count}>{msg}</h2>
                )
            })}
            <img src='../images/pokeball.gif' alt='pokebola girando'/>
            <button onClick={() => navigate("/")}>To item list</button>
        </div>
    )
}

export default ErrorMessage;