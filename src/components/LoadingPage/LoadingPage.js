import "./LoadingPage.css";

const LoadingPage = () => {
    return (
    <div className="loadingPage">
        <img src='./images/pokeball.gif' alt='pokebola girando' className="loadingPage__spinner"/>
        <div className="container">
            <h3 className="loadingPage__msg">Cargando...</h3>
        </div>
    </div>
    )
}

export default LoadingPage;