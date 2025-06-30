import { books } from '../../data/booksData';
import {Row, Col } from 'antd';
import BookCard from '../../components/BookCard/BookCard';
import SearcherBar from '../../components/SearchBar/SearchBar';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import React, { useState } from 'react';

function HomePage() {
    //cartitems = contenido actual del carrito
    const [cartItems, setCartItems] = useState([]); //inicialmente el carrito está vacío

    //función para agregar un item al carrito
    const addToCart = (item) => {

        //prevItems = el carrito antes de agregar un item nuevo
        setCartItems((prevItems) => [...prevItems, item]); //crea una nueva copia del array agregando item al final
    };  

    return(
        <div  style={{ padding: 20 }}>
            <h1 style={{ margin: 16 }}>Simulador de carrito de compras</h1>

            {/* la searcherBar recibe la simulacion de api como parametro para buscar */}
            <SearcherBar books={books} onAddToCart={addToCart}/>
            <ShoppingCart cartItems={cartItems}/>

            <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>

                {/* por cada libro crea una card */}
                {books.map((book,index)=>{
                return(
                    <Col key= {index} xs={24} sm={12} md={12} lg={6} xl={6}>
                        <BookCard title={book.title} author={book.author} image={book.image} price={book.price} onAddToCart={() => addToCart(book)}/>
                    </Col>
                    )
                })}
            </Row>

        </div>
    )
}
export default HomePage;