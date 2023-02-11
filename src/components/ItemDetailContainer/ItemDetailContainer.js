import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

const ItemDetailContainer = () => {
    
    const {productId} = useParams();
    
    const getCard = () => getProductById(productId);

    const {data: product, error, loading} = useAsync(getCard, [productId])

    if(loading){
        return (
            <LoadingPage />
        )
    }

    if(error) {
        return (
            <ErrorMessage messages={["Could not load product detail"]}/>
        )
    }

    return (
        <div className="itemDetailContainer container">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;