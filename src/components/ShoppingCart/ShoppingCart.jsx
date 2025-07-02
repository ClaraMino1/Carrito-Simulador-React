import { Collapse, Badge } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './ShoppingCart.css';

const { Panel } = Collapse;

function ShoppingCart({ cartItems, handleClearCart, handleClearItemCart }) {

  // Calcular el total
  const total = cartItems.reduce((acc, cartItem) => acc + (cartItem.item.price * cartItem.quantity), 0);

  // Calcula la cantidad total de items en el carrito para el badge
  const totalItemsInCart = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  return (
    <Collapse
      style={{backgroundColor:"#fff",marginLeft:15}}
      className="panel-container-cart"
      size="large"
      defaultActiveKey={['1']}
      expandIconPosition="end"//icono de expansión al final
    >
      <Panel
        className="panel-cart"
        key="1" // clave única para el panel
        header={ // El contenido que siempre se muestra, sea colapsado o expandido
          <span className="header-cart-content">
            <span>
              {/* Envuelve el ícono del carrito con Badge */}
              <Badge
                count={totalItemsInCart} // Usa la cantidad total de items
                size="small"
                offset={[-30, -5]} //[x, y]
              >
                <ShoppingCartOutlined style={{ marginRight: 8, fontSize: '18px'}} />
              </Badge>
              Carrito de compras
            </span>

            {/* El icono de borrar todo, solo si hay ítems */}
            {cartItems.length > 0 && (
              <span className="deleteAll-icon" onClick={(e) => e.stopPropagation()}>
                <DeleteOutlined onClick={handleClearCart} />
              </span>
            )}
          </span>
        }
      >
        {/* El contenido del carrito que se expande */}
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <>
            {cartItems.map((cartItem) => (
              <p key={cartItem.item.id}>
                
                  {cartItem.item.title} ({cartItem.quantity}) —{" "}
                  {(cartItem.item.price * cartItem.quantity).toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 3,
                  })}
                
                <span style={{ color: "#d54244", marginLeft: 8 }}>
                  <DeleteOutlined className="delete-icon" onClick={() => handleClearItemCart(cartItem.item.id)} />
                </span>
              </p>
            ))}
            <hr style={{ margin: '12px 0' }} />
            <p>
              <strong>Total:</strong>{" "}
              {total.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 2, //decimales
              })}
            </p>
          </>
        )}
      </Panel>
    </Collapse>
  );
}

export default ShoppingCart;