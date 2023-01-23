import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const {productId} = params;

    useEffect(() => {
        getProductsById(productId)
        .then(product => {
            setProduct(product);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [productId])

    if(loading){
        return (
            <LoadingPage />
        )
    }

    return (
        <div className="itemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;