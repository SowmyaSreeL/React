import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData } from './store/cart-slice';
import { uiSliceActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const toggleCart = useSelector(cartState => cartState.uiSliceKey.cartIsVisible);
  const cart = useSelector(state => state.cartSliceKey);
  const notification = useSelector(state => state.uiSliceKey.notification);
  
  //GET
  useEffect(() => {
    dispatch(fetchCartData)
  }, [dispatch])

  //PUT
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiSliceActions.setNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data...'
      }))
      const response = await fetch('https://fetch-react-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      if(!response.ok) {
        throw new Error("Error while sending data");
      }
      dispatch(uiSliceActions.setNotification({
        status: 'success',
        title: 'Successfull!!!',
        message: 'Sent cart data successfully...'
      }))
    }

    if(isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(e => {
      dispatch(uiSliceActions.setNotification({
        status: 'error',
        title: 'ERROR OCCURED',
        message: 'Sending cart data failed...'
      }))
    });
  }, [cart, dispatch]);
  
  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message} 
        />
      }
      <Layout>
        {toggleCart && <Cart /> }
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
