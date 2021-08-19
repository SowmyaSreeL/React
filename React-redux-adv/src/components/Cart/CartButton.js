import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiSliceActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const cartQuantity = useSelector(cartBadge => cartBadge.cartSliceKey.totalQuantity)
  const dispatch = useDispatch();
  const toggleCarthandler = () => {
    dispatch(uiSliceActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleCarthandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
