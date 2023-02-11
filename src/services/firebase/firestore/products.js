import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { createAdaptedProductFromFirestore } from "../../../adapters/productAdapter";


export const getProducts = (productCategory) => {

    return new Promise((resolve, reject) => {
        
        const collectionRef = productCategory ? query(collection(db, "products"), where("supertype", "==", productCategory)) : collection(db, "products");
        
        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(
                doc => {
                    return createAdaptedProductFromFirestore(doc)
                })
            resolve(productsAdapted);
        })
        .catch(error => {
            reject(error);
        })

    })
}


export const getProductById = (id) => {

    return new Promise((resolve, reject) => {
        
        const docRef = doc(db, "products", id);

        getDoc(docRef)
        .then(response => {
            const productAdapted = createAdaptedProductFromFirestore(response);
            resolve(productAdapted);
        })
        .catch(error => {
            reject(error);
        })

    })
}