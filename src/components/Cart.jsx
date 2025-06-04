// filepath: d:\WebWorks\Learn\React\the-guitar-shop\src\components\Cart.js
import '../css/Cart.css';
import Button from './Button';
import { guitarList } from '../datas/guitarList';

function Cart() {
    const total = guitarList.reduce((acc, guitar) => acc + guitar.price, 0);

    return (
        <aside className="cart-box">         
            <h2>Shopping Cart</h2>
            <ul>
                {guitarList.map(guitar => (
                    <li key={guitar.id}>
                        {guitar.name} - {guitar.price}€
                    </li>
                ))}
            </ul>
            <h3>Total: {total}€</h3>
            <Button />
        </aside>  
    );
}

export default Cart;