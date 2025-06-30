import { Card } from "antd";
import { DeleteOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import './ShoppingCart.css'

function ShoppingCart(){
    return(
    <>
        <Card
        title={<span><ShoppingCartOutlined style={{ marginRight: 8}} />Carrito de compras</span>}
        extra={<span className="delete-icon"><DeleteOutlined /></span>} 
        style={{ width: 300 }}>

            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    </>
    )
}
export default ShoppingCart;