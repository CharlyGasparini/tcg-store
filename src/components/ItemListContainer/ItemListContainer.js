import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from "../ItemList/ItemList";
import LoadingPage from '../LoadingPage/LoadingPage';
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const {productCategory} = params;
    
    useEffect(() => {
        
        const asyncFunction = (!productCategory) ? getProducts : getProductsByCategory; 
        
        setLoading(true);
        
        asyncFunction(productCategory)
        .then(products => {
            setProducts(products);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })
        
        document.title = !productCategory ? "Pokémon Center | TCG Store" : `Pokémon Center | ${productCategory}`;

    }, [productCategory])
    
    if(loading){
        return (
            <LoadingPage/>
        )
    }

    return (
        <div className="itemListContainer">
            <div className='border-wrap'>
                <h1 className="itemListContainer__greeting">{(!productCategory) ? greeting : productCategory}</h1>
            </div>
            <ItemList  products={products}/>
        </div>
    )
}

export default ItemListContainer;