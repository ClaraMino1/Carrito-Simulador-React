import { Input, List } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

const SearcherBar = ({books}) => {
  const navigate = useNavigate();

const handleSearch = () => {
  if (filteredBooks.length > 0) {
    navigate(`/BookDetails/${filteredBooks[0].id}`);
  }
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
            renderItem={(item) => <List.Item>{item.title}</List.Item>}
        />
    ) : null}
    </div>
  );
};

export default SearcherBar;