import { useParams } from "react-router-dom";
import { books } from "../../data/booksData";

export function BookDetailsPage() {
  const { id } = useParams();
  const bookId = parseInt(id); // convierte a int para poder compararlo con los id numéricos del array books


  const book = books.find((book) => book.id === bookId); //encuentra el libro que tenga el id que se pasa por ruta

  if (!book) {
    return <p>Libro no encontrado 😢</p>;
  }

  return (
   <>
    <p>detalle del libro con id {book.id}</p>
    </>

  );
}