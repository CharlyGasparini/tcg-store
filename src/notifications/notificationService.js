import { createContext } from "react";
import Swal from 'sweetalert2'

export const Notifications = createContext();

const alertSuccess = Swal.mixin({
    title: "Success!",
    icon: "success",
    timer: 2000,
    showConfirmButton: false
})

const alertError = Swal.mixin({
    title: "Error!",
    icon: "error"
})

export const NotificationsProvider = ({children}) => {

    const setNotification = (type, message) => {
        
        (type === "success") ? alertSuccess.fire({text:message}) : alertError.fire({text:message});
    }

    return (
        <Notifications.Provider value={{setNotification}}>
            {children}
        </Notifications.Provider>
    )
}