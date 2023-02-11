import "./LoadingPage.css";

const LoadingPage = () => {
    return (
    <div className="loadingPage">
        <img src='../images/pikachu.gif' alt='pikachu running' className="loadingPage__spinner"/>
        <div className="msgContainer">
            <p className="loadingPage__msg">Loading...  </p>
        </div>
    </div>
    )
}

export default LoadingPage;