import { books } from '../../data/booksData';
import {Row, Col } from 'antd';
import BookCard from '../../components/BookCard/BookCard';
import SearcherBar from '../../components/SearchBar/SearchBar';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';


function HomePage() {

    const addToCart = () => { 
        console.log("item agregado al carrito")
    };

    return(
        <div  style={{ padding: 20 }}>
            <h1 style={{ margin: 16 }}>Simulador de carrito de compras</h1>

            {/* la searcherBar recibe la simulacion de api como parametro para buscar */}
            <SearcherBar books={books} onAddToCart={addToCart}/>
            <ShoppingCart/>

            <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>

                {/* por cada libro crea una card */}
                {books.map((book,index)=>{
                return(
                    <Col key= {index} xs={24} sm={12} md={12} lg={6} xl={6}>
                        <BookCard title={book.title} author={book.author} image={book.image} price={book.price} onAddToCart={() => addToCart()}/>
                    </Col>
                    )
                })}
            </Row>

        </div>
    )
}
export default HomePage;