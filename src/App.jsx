import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {BookDetailsPage} from './pages/BookDetailsPage/BookDetailsPage';
import { books } from './data/booksData';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BookDetails/:id" element={<BookDetailsPage books={books} />} />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
