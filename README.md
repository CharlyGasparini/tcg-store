<p align="center">
  <img src="public/images/pokeball-logo.png" alt="Logo pokeball" width="200px" align="center"/>
</p>
<h1 align="center">Pokémon Center | TCG - Store</h1>


## Introducción
Repositorio creado como trabajo final del curso de ReactJS de [Coderhouse](https://www.coderhouse.com/?utm_term=coderhouse&utm_campaign=0&utm_source=google_search_brand&utm_medium=cpc&gclid=CjwKCAiA85efBhBbEiwAD7oLQDa2bBKPj4BztPY282V0YGgnCs_sgm_DUaBYQsFKtX5AK2YMS8BFyhoC0tMQAvD_BwE).

Es un e-commerce de cartas de [Pokémon-TCG](https://www.pokemon.com/el/jcc-pokemon) inicializado con [Create React App](https://github.com/facebook/create-react-app).


## Tecnologías
- HTML
- CSS
- React JS
- Node JS:
  - npm
- Firebase:
  - Firestore

## Instalación

1. Clonar el repositorio desde **GitHub** a un directorio local. Ejecutando la siguiente linea en la consola.
```
$ git clone https://github.com/CharlyGasparini/tcg-store.git
```

2. Posicionarse en la raiz del proyecto.
```
$ cd tcg-store
```

3. Instalar las dependencias desde el directorio del proyect.
```
$ npm install
```

4. Configurar las variables de entorno para conectar a la base de datos FireStore. (El template del archivo *.env* con los nombres de las key a configurar se encuentran en archivo *.env.example*).
```
REACT_APP_apiKey=
REACT_APP_authDomain=
REACT_APP_projectId=
REACT_APP_storageBucket=
REACT_APP_messagingSenderId=
REACT_APP_appId=
```

5. Ejecutar la aplicación
```
$ npm start
```

## Rutas

En el proyecto hay rutas a 4 Componentes.
-  ### `ItemListContainer`
  - Ruta: (/)  
    - Maneja la lógica para mostrar los productos disponibles cargados en la DB Firestore.
  - Ruta: (/:productCategory)
    - Filtra según los 3 tipos de cartas del juego: Pokémon, Trainer, Energy.
- ### `ItemDetailContainer` 
  - Ruta: (/detail/:productId)
  - Maneja la lógica para mostrar el detalle del producto seleccionado filtrando por el ID del producto en la DB Firestore.
- ### `CartContainer` 
  - Ruta: (/cart)
  - Contiene el carrito de compras. Consume los datos del Context `CartContext` del componente `CartProvider`.
- ### `Checkout` 
  - Ruta: (/checkout)
  - Maneja la lógica para capturar los datos del comprador y generar una orden de compra en la DB Firestore.   


### Navigation

![navigation](https://user-images.githubusercontent.com/109870143/218226289-61fd2c8e-decc-4e4c-9ba0-20f4a92e3cd2.gif)




## Datos

Proyecto realizado por Carlos Roberto Gasparini
- Comisión 34860 del curso de React JS de CoderHouse

### Deploy en Vercel

[Vercel](https://tcg-store-charlygasparini.vercel.app)