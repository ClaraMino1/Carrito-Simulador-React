import { Button, Input, List } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './SearchBar.css';

const { Search } = Input;

const SearcherBar = ({ books, onAddToCart }) => {
  const navigate = useNavigate();

  const handleSearch = () => { //se llama al apretar enter o presionar el boton buscar
    if (filteredBooks.length > 0) { //si hay resultados filtrados(solo toma el primer resultado) entonces redirecciona a la página de detalles con el id del libro filtrado
      navigate(`/BookDetails/${filteredBooks[0].id}`);
    }
  };


  const handleSelect = (bookId) => {//se llama cuando se hace click en un item de la lista de items que coinciden con la busqueda
    navigate(`/BookDetails/${bookId}`);
    setQuery("");// Limpia el input
  };


  //query = lo que el usuario escribe
  const [query, setQuery] = useState('');//inicialmente no hay busqueda 
    
  const filteredBooks = books.filter((book) => //devuelve un array con los libros filtrados 
    book.title.toLowerCase().includes(query.toLowerCase())
    //por cada libro agarra el titulo y busca si la query que se ingresa en la searchbar coincide
  );

  return(
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <Search
        placeholder="Buscar libro"
        enterButton="Buscar"
        size="large"
        onSearch={handleSearch}//cuando el usuario presiona Enter o el botón
        onChange={(e) => setQuery(e.target.value)} //se ejecuta en cada tecla presionada => actualiza query (genera el efecto de busqueda en tiempo real).
        style={{ marginBottom: 20 }}
      />

      {query !== "" ? (// si se escribió algo en la searchbar devuelve los titulos que coinciden
        <List
          bordered
          dataSource={filteredBooks} //libros que coinciden
          // renderItem={(item) => <List.Item>{item.title}</List.Item>}
          renderItem={(item) => {
            return(
              <List.Item
                actions={[  <Button 
                            key="list-loadmore-edit" 
                            color="primary" 
                            variant="filled" 
                            onClick={(e) => {
                              e.stopPropagation(); //cuando se hace click en el boton añadir al carrito desde el buscador, llama a la funcion addToCart y detiene el evento para que no redireccione
                              onAddToCart();}}>
                            <ShoppingCartOutlined />Añadir al carrito</Button>]}

                className='item-filter'
                onClick={() => handleSelect(item.id)}>

                <List.Item.Meta
                  avatar={<img src={item.image} alt={item.title} style={{ width: 50, height: 50, objectFit: "contain" }} />}
                  title={item.title}
                  description={item.author}
                />
              </List.Item>
            )}}
        />
      ) : null}
      </div>
    );
};

export default SearcherBar;

