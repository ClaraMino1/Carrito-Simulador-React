import { useParams } from "react-router-dom";

export function ItemDetailsPage({products}) {
  const { id } = useParams();
  const productId = parseInt(id); // convierte a int para poder compararlo con los id numéricos del array products

  const product = products.find((product) => product.id === productId); //encuentra el libro que tenga el id que se pasa por ruta

  if (!product) {
    return <p>producto no encontrado 😢</p>;
  }

  return (
   <>
        <p>detalle del producto con id {product.id}</p>
    </>

  );
}