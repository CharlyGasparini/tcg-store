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
            <h1 className="itemListContainer__greeting">{greeting}</h1>
            <ItemList  products={products}/>
            <ItemCount initial={1} stock={4} onAdd={(count) => console.log("Se agregaron " + count + " productos")}/>
        </div>
    )
}

export default ItemListContainer;