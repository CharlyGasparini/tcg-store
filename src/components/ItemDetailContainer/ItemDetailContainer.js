import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingPage from "../LoadingPage/LoadingPage";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        getProducts()
        .then(products => {
            setProducts(products[0]);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    if(loading){
        return (
            <LoadingPage />
        )
    }

    return (
        <div className="itemDetailContainer">
            <ItemDetail card={products}/>
        </div>
    )
}

export default ItemDetailContainer;