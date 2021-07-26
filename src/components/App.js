import { useState, useEffect } from 'react';
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import '../styles/Layout.css'

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")))

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart={cart} setCart={setCart}/>
        <ShoppingList cart={cart} setCart={setCart}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
