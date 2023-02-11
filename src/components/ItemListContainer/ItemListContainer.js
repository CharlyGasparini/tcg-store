import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import LoadingPage from '../LoadingPage/LoadingPage';
import "./ItemListContainer.css";
import { useAsync } from '../../hooks/useAsync';
import { useTitle } from '../../hooks/useTitle';
import { getProducts } from '../../services/firebase/firestore/products';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

const ItemListContainer = ({greeting}) => {
    
    const {productCategory} = useParams();
    
    useTitle(!productCategory ? "Pokémon Center | TCG Store" : `Pokémon Center | ${productCategory}`, [productCategory])

    const getProductsByCategory = () => getProducts(productCategory);
    
    const { data: products, error, loading } = useAsync(getProductsByCategory ,[productCategory]);
    
    if(loading){
        return (
            <LoadingPage/>
        )
    }

    if(error) {
        return (
            <ErrorMessage messages={["Could not load products"]} />
        )
    }

    return (
        <div className="itemListContainer container">
            <div className='border-wrap'>
                <h1 className="itemListContainer__greeting">{(!productCategory) ? greeting : productCategory}</h1>
            </div>
            <ItemList  products={products}/>
        </div>
    )
}

export default ItemListContainer;