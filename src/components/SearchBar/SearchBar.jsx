import { Button, Input, List } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './SearchBar.css';

const { Search } = Input;

const SearcherBar = ({ products, onAddToCart }) => {

  const navigate = useNavigate();

  const handleSearch = () => { //se llama al apretar enter o presionar el boton buscar
    if (filteredProducts.length > 0) { //si hay resultados filtrados(solo toma el primer resultado) entonces redirecciona a la página de detalles con el id del producto filtrado
      navigate(`/ItemDetails/${filteredProducts[0].id}`);
    }
  };

  const handleSelect = (itemId) => {//se llama cuando se hace click en un item de la lista de items que coinciden con la busqueda
    navigate(`/ItemDetails/${itemId}`);
    setQuery("");// Limpia el input
  };

  //query = lo que el usuario escribe
  const [query, setQuery] = useState('');//inicialmente no hay busqueda 
    
  //filtrado de productos por searchbar
  const filteredProducts = products.filter((product) =>{ 
    const titleMatches = product.title.toLowerCase().includes(query.toLowerCase())    //por cada producto agarra el titulo y busca si la query que se ingresa en la searchbar coincide. devuelve un booleano
    const categoryMatches  = product.category.toLowerCase().includes(query.toLowerCase()) //por cada producto agarra la categoria y busca si la query que se ingresa en la searchbar coincide. devuelve un booleano
    return titleMatches || categoryMatches; //devuelve un array si coincide un nombre o una categoria (o ambos)
  }
  );

  return(
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <Search
        placeholder="Buscar Producto"
        enterButton="Buscar"
        size="large"
        onSearch={handleSearch}//cuando el usuario presiona Enter o el botón
        onChange={(e) => setQuery(e.target.value)} //se ejecuta en cada tecla presionada => actualiza query (genera el efecto de busqueda en tiempo real).
        style={{ marginBottom: 20 }}
      />

      {query !== "" ? (// si se escribió algo en la searchbar devuelve los titulos que coinciden
        <List
          bordered
          dataSource={filteredProducts} //productos que coinciden
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
                              onAddToCart(item);}}>
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

