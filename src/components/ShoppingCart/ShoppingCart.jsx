import { Collapse, Badge, Button } from "antd"; // Asegúrate de importar Button
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './ShoppingCart.css';

function ShoppingCart({ cartItems, handleClearCart, handleClearItemCart }) {

  // Calcular el total
  const total = cartItems.reduce((acc, cartItem) => acc + (cartItem.item.price * cartItem.quantity), 0);

  // Calcula la cantidad total de items en el carrito para el badge
  const totalItemsInCart = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  const collapseItems = [
    {
      key: '1', // La clave única para este panel
      // encabezado
      label: (
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
      ),
      children: ( 
        <>
          
          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <>
              {cartItems.map((cartItem) => (
                //div para organizar mejor los elementos dentro del map
                <div key={cartItem.item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span>
                    {cartItem.item.title} ({cartItem.quantity}) —{" "}
                    {(cartItem.item.price * cartItem.quantity).toLocaleString("EN-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2, //decimales
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span style={{ color: "#d54244", marginLeft: 8 }}>
                    <DeleteOutlined className="delete-icon" onClick={() => handleClearItemCart(cartItem.item.id)} />
                  </span>
                </div>
              ))}
              <hr style={{ margin: '12px 0' }} />
              <p>
                <strong>Total:</strong>{" "}
                {total.toLocaleString("EN-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2, //decimales
                  maximumFractionDigits: 2,
                })}
              </p>
            </>
          )}
        </>
      ),className: "panel-cart"
    },
  ];

  return (
    <Collapse
      style={{backgroundColor:"#fff", marginLeft:15}}
      className="panel-container-cart"
      size="large"
      defaultActiveKey={['1']}
      expandIconPosition="end" // icono de expansión al final
      items={collapseItems} //se le pasa el array
    />
  );
}

export default ShoppingCart;