import { Input, List } from 'antd';
import React, { useState } from 'react';

const { Search } = Input;

const SearcherBar = ({books}) => {
  const [query, setQuery] = useState('');//inicialmente no hay busqueda 
  
  const filteredBooks = books.filter((book) => //devuelve un true o false
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <Search
        placeholder="Buscar libro"
        enterButton="Buscar"
        size="large"
        onSearch={(value) => setQuery(value)}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: 20 }}
      />

      <List
        bordered
        dataSource={filteredBooks}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />
    </div>
  );
};

export default SearcherBar;