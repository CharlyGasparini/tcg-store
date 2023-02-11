import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../firebaseConfig"


export const createOrder = (cart, totalPrice, removeItem, clearCart, buyer) => {

    return new Promise((resolve, reject) => {

        const order = {
            buyer,
            cart,
            totalPrice
        }

        const batch = writeBatch(db);

        const ids = cart.map(item => item.id);

        const productRef = query(collection(db, "products"), where(documentId(), "in", ids));

        const productsOutStock = [];

        getDocs(productRef)
        .then(response => {
            response.docs.forEach( doc => {
                const data = doc.data();
                const productStock = data.stock;
                const productAddedToCart = cart.find(item => item.id === doc.id);
                const itemQuantity = productAddedToCart.quantity;

                if(productStock >= itemQuantity){
                    batch.update(doc.ref, {stock: productStock - itemQuantity})
                } else {
                    productsOutStock.push({id: doc.id, ...data});
                }
            })

            if(productsOutStock.length === 0) {
                batch.commit();
                const orderRef = collection(db, "orders");
                const orderAdded = addDoc(orderRef, order);
                const { id } = orderAdded;
                resolve(id);
                clearCart();

            } else {

                productsOutStock.forEach( product => {
                    const itemFromCart = cart.find( item => item.id === product.id);
                    if(product.stock > 0){
                        itemFromCart.quantity = product.stock;

                    } else {
                        removeItem(product.id);
                    }
                })

                // setNotification("error", "Not enough stock of some products. Your cart has been updated.");
            }
        })
        .catch(error => {
            reject(error);
        })
    })
}