import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const {productId} = params;

    useEffect(() => {

        const docRef = doc(db, "products", productId);

        getDoc(docRef)
        .then(response => {
            const data = response.data();
            const productAdapted = { id: response.id, ...data};
            setProduct(productAdapted);
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