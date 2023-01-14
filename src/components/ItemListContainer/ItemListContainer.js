import {useState, useEffect} from 'react';
import { getProducts } from '../../asyncMock';
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import LoadingPage from '../LoadingPage/LoadingPage';
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        getProducts()
        .then(products => {
            setProducts(products);
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
            <LoadingPage/>
        )
    }

    return (
        <div className="itemListContainer">
            <div className='border-wrap'>
                <h1 className="itemListContainer__greeting">{greeting}</h1>
            </div>
            <ItemList  products={products}/>
        </div>
    )
}

export default ItemListContainer;