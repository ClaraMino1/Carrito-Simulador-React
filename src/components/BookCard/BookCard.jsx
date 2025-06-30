import { Card,Button} from 'antd';
import './BookCard.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

function BookCard({title,author,image,price}){
    return(
   <Card
        hoverable
        className='card-style'
        cover={<img className="img-card" alt={title} src={image} />}
    >
        <div style={{ marginBottom: 16 }}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
        </div>

        <Button type="primary"><ShoppingCartOutlined />Añadir al carrito</Button>
    </Card>
    );
}
export default BookCard;