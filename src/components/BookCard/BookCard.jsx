import { Card,Button} from 'antd';
import './BookCard.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

function BookCard({title,author,image,price,onAddToCart }){

    return(
   <Card
        hoverable
        className='card-style'
        cover={<img className="img-card" alt={title} src={image} />}
    >
        <div style={{ marginBottom: 16 }}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{price.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 3, // Asegura al menos 3 decimales
              })}</p>
            
        </div>
        {/* usa la funcion addToCart al hacer click en el boton */}
        <Button type="primary" onClick={onAddToCart}><ShoppingCartOutlined />Añadir al carrito</Button>
    </Card>
    );
}
export default BookCard;

