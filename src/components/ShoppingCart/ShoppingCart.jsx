import { Card } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './ShoppingCart.css';

function ShoppingCart({ cartItems, handleClearCart,handleClearItemCart}) {

  // Calcular el total
  const total = cartItems.reduce((acc, cartItem) => acc + (cartItem.item.price * cartItem.quantity), 0);

  return (
    <Card
      title={
        <span>
          <ShoppingCartOutlined style={{ marginRight: 8 }} />
          Carrito de compras
        </span>
      }
      extra={
        <span className="deleteAll-icon">
          <DeleteOutlined onClick={handleClearCart} />
        </span>
      }
      style={{ width: 300 }}
    >
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {/* //se itera cada item del carrito */}
          {cartItems.map((cartItem) => (
            <p key={cartItem.item.id}>
              {cartItem.item.title} ({cartItem.quantity}) —{" "} 
              {(cartItem.item.price * cartItem.quantity).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 3, // Asegura al menos 3 decimales
              })}
            <span className="delete-icon">
                                                {/* se le pasa el id del item a borrar */}
                <DeleteOutlined onClick={() => handleClearItemCart(cartItem.item.id)} />
            </span>
            </p>
          ))}
          {/* //separador de los items y del total */}
          <hr /> 
          <p>
            <strong>Total:</strong>{" "}
            {total.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 3, // Asegura al menos 3 decimales
            })}
          </p>
        </>
      )}
    </Card>
  );
}

export default ShoppingCart;