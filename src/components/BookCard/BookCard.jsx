import { Card,Button} from 'antd';
import './BookCard.css';

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

        <Button type="primary">Añadir al carrito</Button>
    </Card>
    );
}
export default BookCard;