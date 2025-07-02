import { Card,Button} from 'antd';
import './ItemCard.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

//le llega un producto de la iteracion
function ItemCard({product,onAddToCart }){
    return(
    <Card
        hoverable
        className='card-style'
        cover={<img className="img-card" alt={product.title} src={product.image} />}
    >
        <div style={{ marginBottom: 16 }}>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.price.toLocaleString("es-AR", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2, //decimales
              })}</p>
            
        </div>
        {/* usa la funcion addToCart al hacer click en el boton */}
        <Button type="primary" onClick={onAddToCart}><ShoppingCartOutlined />Añadir al carrito</Button>
    </Card>
    );
}
export default ItemCard;

