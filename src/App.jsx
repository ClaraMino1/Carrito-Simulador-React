import './App.css'
import {Row, Col } from 'antd';
import BookCard from './components/BookCard/BookCard';
import SearcherBar from './components/SearchBar/SearchBar';

//simula la api
const books = [
    {"id": 1,
     "title":"Libertad y cuerpo",
     "author": "Cecilia Abdo Ferez",
     "price": 23.200,
     "image": "https://minoydavila.com.ar/wp-content/uploads/2025/05/Libertad-y-cuerpo_1600-400x623.jpg"
    },
    {"id": 2,
     "title":"Pedagogia integral por niveles de profundidad",
     "author": "Rafael Eduardo Micheletti",
     "price": 27.400,
     "image": "https://minoydavila.com.ar/wp-content/uploads/2025/02/Pedagogia-integral-por-niveles-de-profundidad_1600-400x636.jpg"
    },
    {"id": 3,
     "title":"La anti-vida y el destino cósmico",
     "author": "Fabián Ludueña Romandini",
     "price": 23.100,
     "image": "https://minoydavila.com.ar/wp-content/uploads/2025/03/HP-Lovecraft_1600-400x621.jpg"
    },
    {"id": 4,
     "title":"Teología verde",
     "author":"Trees van Montfoort",
     "price": 33.300,
     "image": "https://minoydavila.com.ar/wp-content/uploads/2025/03/Teologia-verde_1600-1-400x619.jpg"
    },
    {"id": 5,
     "title":"Educacion critica e inclusion",
     "author":"Miguel López Melero",
     "price": 16.200,
     "image": "https://minoydavila.com.ar/wp-content/uploads/2025/01/Educacion-critica-e-inclusion_1600-400x617.jpg"
    }
];

function App() {
  return (
    <div  style={{ padding: 20 }}>
      <h1 style={{ margin: 16 }}>Simulador de carrito de compras</h1>
      {/* la searcherBar recibe la simulacion de api como parametro para buscar */}
      <SearcherBar books={books}/>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>

        {/* por cada libro crea una card */}
        {books.map((book,index)=>{
          return(
            <Col key= {index} xs={24} sm={12} md={12} lg={6} xl={6}>
              <BookCard title={book.title} author={book.author} image={book.image} price={book.price}/>
            </Col>
            )
          })}
      </Row>
    </div>
  );
}

export default App;
