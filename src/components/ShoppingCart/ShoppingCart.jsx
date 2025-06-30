import { Card } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './ShoppingCart.css';

function ShoppingCart({ cartItems, handleClearCart,handleClearItemCart}) {

  // Calcular el total
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

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
          {cartItems.map((item, index) => ( //si el carrito no está vacio itera los items y muestra el titulo y precio
            <p key={index}>
            {item.title} —{" "}
            {item.price.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
            })}
            <span className="delete-icon">
                <DeleteOutlined onClick={handleClearItemCart}/>
            </span>
            </p>
          ))}
          {/* //divide los items del total */}
          <hr /> 
          <p>
            <strong>Total:</strong>{" "}
            {total.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </p>
        </>
      )}
    </Card>
  );
}

export default ShoppingCart;