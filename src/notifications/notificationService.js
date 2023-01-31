import { createContext, useState } from "react";

export const Notifications = createContext();

const Notification = ({type, message}) => {

    const notificationStyle = {
        position: "absolute",
        right: "50px",
        top: "100px",
        backgroundColor: type === "success" ? "var(--greenGrass)" : "var(--redFire)",
        color: "white",
        borderRadius: "5px",
        padding: "10px"
    }

    if(!message){
        return null;
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}


export const NotificationsProvider = ({children}) => {

    const [message, setMessage] = useState("");
    const [type, setType] = useState("error");

    const setNotification = (type, message) => {
        setMessage(message);
        setType(type)

        setTimeout(() => {
            setMessage("")
        }, 3000)
    }

    return (
        <Notifications.Provider value={{setNotification}}>
            <Notification message={message} type={type}></Notification>
            {children}
        </Notifications.Provider>
    )
}