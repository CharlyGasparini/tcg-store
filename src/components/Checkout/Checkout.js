import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutTable from "../CheckoutTable/CheckoutTable";
import LoadingPage from "../LoadingPage/LoadingPage";
import "./Checkout.css";


const Checkout = () => {

    const {cart, totalPrice, clearCart} = useContext(CartContext);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");    
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const setters = [setName, setLastName, setPhone, setEmail, setAddress, setCity];
    
    const createOrder = async (e) => {
        e.preventDefault();
        setLoading(true)
        
        try{
            const order = {
                buyer: {
                    name,
                    lastName,
                    phone,
                    email,
                    address,
                    city
                },
                cart,
                totalPrice
            }
    
            const batch = writeBatch(db);
    
            const ids = cart.map(item => item.id);
    
            const productRef = query(collection(db, "products"), where(documentId(), "in", ids));
            
            const productsFromDb = await getDocs(productRef);
            const { docs } = productsFromDb;
            
            const productsOutStock = [];
    
            docs.forEach(doc => {
                const dataDoc = doc.data();
                const productStock = dataDoc.stock;
                const productAddedToCart = cart.find(item => item.id === doc.id);
                const itemQuantity = productAddedToCart.quantity;
    
                if(productStock >= itemQuantity){
                    batch.update(doc.ref, {stock: productStock - itemQuantity})
                } else {
                    productsOutStock.push({id: doc.id, ...dataDoc});
                }
    
            })
            
            if(productsOutStock.length === 0) {
                await batch.commit();
    
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, order);
                const { id } = orderAdded;
                setOrderId(id);
                clearCart();
            }
    
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    if(cart.length === 0) {
        return (
            <div>
            <h1>No hay productos en el carrito</h1>
            <button onClick={() => navigate("/")}>Volver a la página principal</button>       
        </div>
        )
    }
    
    if(orderId) {
        return (
            <div>
                <h1>El ID de su compra es {orderId}</h1>
                <button onClick={() => navigate("/")}>Volver a la página principal</button>       
            </div>
        )
    }
    
    if(loading) {
        return <LoadingPage />
    }

    return (
        <div className="checkout">
            <div className="border-wrap">
                <h1 className="checkout__title">Checkout</h1>
            </div>
            <div className="checkout-body">
                <CheckoutForm handleSubmit={createOrder} setters={setters} />
                <CheckoutTable cart={cart} totalPrice={totalPrice} />
            </div>
        </div>
    )
}

export default Checkout;