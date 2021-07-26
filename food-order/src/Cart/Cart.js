import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../Store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const crtCtxt = useContext(CartContext);
    const totalAMount = `$${crtCtxt.totalAmount.toFixed(2)}`;
    const hasItems = crtCtxt.items.length > 0;

    const onAddHandler = (item) => {
        crtCtxt.addItem(item);
    }

    const onRemoveHandler = (id) => {
        crtCtxt.removeItem(id)
    }
    return (
        <Modal onClick={props.onHide}>
            <ul className={classes['cart-items']}>
                {
                    crtCtxt.items.map((item) => {
                        return <CartItem key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={onRemoveHandler.bind(null, item.id)}
                        onAdd={onAddHandler.bind(null, item)}
                        />
                    })
                }
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAMount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHide}>close</button>
                {hasItems && <button className={classes.button}>order</button> }
            </div>
        </Modal>
    )
}

export default Cart;