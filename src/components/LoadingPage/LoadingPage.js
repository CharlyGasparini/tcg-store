import "./LoadingPage.css";

const LoadingPage = () => {
    return (
    <div className="loadingPage">
        <img src='../images/pokeball.gif' alt='pokebola girando' className="loadingPage__spinner"/>
        <div className="msgContainer">
            <p className="loadingPage__msg">Loading...  </p>
        </div>
    </div>
    )
}

export default LoadingPage;