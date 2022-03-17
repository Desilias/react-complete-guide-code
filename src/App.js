import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {

  const[cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler =()=>{
    setCartIsShow(true);
  }
  const hideCartHandler =()=>{
    setCartIsShow(false);
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart hideCart = {hideCartHandler} />}
      <Header onshowCart ={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
