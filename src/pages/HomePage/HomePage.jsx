import {Row, Col } from 'antd';
import ItemCard from '../../components/ItemCard/ItemCard';
import SearcherBar from '../../components/SearchBar/SearchBar';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import { useState } from "react";
import "./HomePage.css"

function HomePage({products}) {

    //cartitems = contenido actual del carrito
    const [cartItems, setCartItems] = useState([]); //inicialmente el carrito está vacío

    // Función para agregar un ítem al carrito
    const addToCart = (item) => {
        //Cuando React ejecuta la funcion, le pasa como argumento el valor actual de cartItems
        setCartItems(currentCartItems => {
            const existingItemIndex = currentCartItems.findIndex( //ejecuta una funcion por cada elemento.Si ningún elemento cumple la condición, findIndex retorna -1 . sino, devuelve el indice del primer elemento que devuelva true
                //cartItem = elemento actual que findIndex está iterando. estructura: { item: { id, title, price }, quantity }
                //compara el id del elemento actual que ya está en el carrito con el id del item agregado en addToCart
                (cartItem) => cartItem.item.id === item.id 
            );

            // Si el ítem ya existe se actualiza su cantidad
            // > -1 porque si el item no estaba en el carrito findIndex devuelve -1
            if (existingItemIndex > -1) {
                //copia del carrito actual
                const updatedItems = [...currentCartItems];

                //carrito en la posicion del item duplicado
                updatedItems[existingItemIndex] = {
                    //desempaqueta todas las propiedades del objeto del producto existente
                    ...updatedItems[existingItemIndex],
                    //se sobreescribe la cantidad
                    quantity: updatedItems[existingItemIndex].quantity + 1,
                };
                return updatedItems; //nuevo array del carrito, que es una copia del array original, pero el producto duplicado se  reemplaza por una nueva versión de sí mismo con su cantidad incrementada.
            } else {
                // Si el ítem no existe, se agrega con su cantidad
                return [...currentCartItems, { item: item, quantity: 1 }];
            }
        });
    };  

    //funcion para limpiar todo el carrito
    const handleClearCart = () => {
        setCartItems([])
    };

    //funcion para borrar solo un item del carrito
     const handleClearItemCart = (itemToRemoveId) => { // id del item a eliminar
        //Cuando React ejecuta la funcion, le pasa como argumento el valor actual de cartItems

        setCartItems(currentCartItems => {
            //itera el carrito actual
            const updatedItems = currentCartItems.map(cartItem => {
                if (cartItem.item.id === itemToRemoveId) {
                    // Si la cantidad es mayor a 1, solo la decrementamos
                    if (cartItem.quantity > 1) {
                        //se sobreescribe la cantidad
                        return { ...cartItem, quantity: cartItem.quantity - 1 };
                    } else {
                        // Si la cantidad es 1, retorna null para filtrarlo después
                        return null;
                    }
                }
                return cartItem; // items sin cambios
            }).filter(Boolean); // filtra los `null` para eliminarlos del array

            return updatedItems;
        });
    };

    return(
        <div  style={{ padding: 20}}>
            
            <h1 style={{ margin: 16 }}>Simulador de carrito de compras usando Fake Store API</h1>
            
            <SearcherBar products={products} onAddToCart={addToCart}/>

            <div style={{display:"flex"}}>

                <Row gutter={[16, 16]} className='grid-container'>

                    {/* por cada producto crea una card */}
                    {products.map((product)=>{
                    
                        return(
                        <Col key= {product.id}  xs={24} sm={12} md={8} lg={8} xl={8}>
                           <ItemCard product={product} onAddToCart={() => addToCart(product)}/>
                        </Col>)
                    
                    })} 
                </Row>

                <ShoppingCart cartItems={cartItems} handleClearCart={handleClearCart} handleClearItemCart={handleClearItemCart}/>

            </div>
        </div>
    )
}
export default HomePage;