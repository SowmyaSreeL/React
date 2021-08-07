import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../Store/cart-context';
import React, { useContext, useState } from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
    const [checkoutEnable, setCheckoutEnable] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const crtCtxt = useContext(CartContext);
    const totalAMount = `$${crtCtxt.totalAmount.toFixed(2)}`;
    const hasItems = crtCtxt.items.length > 0;

    const onAddHandler = (item) => {
        crtCtxt.addItem(item);
    }

    const onRemoveHandler = (id) => {
        crtCtxt.removeItem(id)
    }

    const orderHandler = () => {
        setCheckoutEnable(true)
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-http-req-cd094-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedIitems: crtCtxt.items
            })
        });

        setIsSubmitting(false);
        setDidSubmit(true);
        crtCtxt.clearCart();
    }

    const modalActions = 
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHide}>close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>order</button> }
    </div>

    const cartModalContent = <React.Fragment>
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
            {checkoutEnable && <Checkout onCancel={props.onHide} onConfirmOrder={submitOrderHandler}/>}
            {!checkoutEnable && modalActions}
    </React.Fragment>

    const isSubmittingModalContent = 
    <React.Fragment>
        <p> Sending Order data </p>
        <div className={classes.actions}>
            <button className={classes.button} onClick={props.onHide}>close</button>
        </div>
    </React.Fragment>
    
    const didSubmitModalContent = 
    <React.Fragment>
        <p>Succesfully sent the order</p>
        <div className={classes.actions}>
            <button className={classes.button} onClick={props.onHide}>close</button>
        </div>
    </React.Fragment>
    

    return (
        <Modal onClick={props.onHide}>
            { !isSubmitting && !didSubmit && cartModalContent}
            { isSubmitting && isSubmittingModalContent}
            { didSubmit && didSubmitModalContent}
        </Modal>
    )
}

export default Cart;