import React, { useState } from "react";
import Amazon from "./compannets/Amozing";
import Footer from "./compannets/Footer";
import NavbarPage from "./compannets/NavbarPage";
import Cart from "./compannets/ShopingCard";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return alert("Cart is added");
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    // console.log(indx);
    // console.log(arr[indx].amount);
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }
  return (
    <React.Fragment>
        <NavbarPage setShow={setShow} size={cart.length}  />
        { show ? (
          <Amazon handleClick={handleClick} />
          ):(
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )}
            <Footer/>
      </React.Fragment>
  );
};

export default App;
