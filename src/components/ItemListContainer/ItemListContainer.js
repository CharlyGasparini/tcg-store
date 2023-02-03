import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, where, query } from 'firebase/firestore';
import ItemList from "../ItemList/ItemList";
import LoadingPage from '../LoadingPage/LoadingPage';
import "./ItemListContainer.css";
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const {productCategory} = params;
    
    useEffect(() => {
        
        setLoading(true);
        document.title = !productCategory ? "Pokémon Center | TCG Store" : `Pokémon Center | ${productCategory}`;
        
        const collectionRef = productCategory ? query(collection(db, "products"), where("supertype", "==", productCategory)) : collection(db, "products");

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data();
                return { id: doc.id, ...data}
            })

            setProducts(productsAdapted);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })

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