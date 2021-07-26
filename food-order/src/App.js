import { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import  CartProvider  from "./Store/CartProvider";


function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  }

  const hideCartHandler = () => {
    setIsCartShown(false);
  }

  return (
   <CartProvider>
      {isCartShown && <Cart onHide={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
   </CartProvider>
  );
}

export default App;
