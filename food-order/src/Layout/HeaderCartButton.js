import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from 'react';
import CartContext from '../Store/cart-context';

const HeaderCartButton = props => {
    const  cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    useEffect(() => {
        if(items.length === 0)
            return
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        },300)

        return() => {
            clearTimeout(timer)
        }
    }, [items])
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : '' } `


    const nOfCartItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0)
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{nOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;