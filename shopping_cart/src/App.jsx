import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import { v4 as uuid } from "uuid";
import "./App.css";

function App() {
  const [clickedProductId, setClickedProductId] = useState();
  const [cartCount, setCartCount] = useState(0);
  const [cartContents, setCartContents] = useState([]);
  const [cartClicked, setCartClicked] = useState(false);

  function handleClick(e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") {
      return;
    }
    let target = e.target;
    while (!target.id) {
      target = target.parentNode;
    }
    setClickedProductId(Number(target.id));
  }

  const handleAddToCart = (e, quantitySelected) => {
    let target = e.target;
    while (!target.id) {
      target = target.parentNode;
    }

    if (quantitySelected === 0) {
      return;
    }
    const addedProductInfo = target.children;
    const addedProductTitle = addedProductInfo[1].firstElementChild.innerHTML;
    const addedProductImage = addedProductInfo[0].firstElementChild.src;
    const unitPrice =
      addedProductInfo[1].children[1].innerHTML.replace(/[^0-9.]/g, "") * 100;
    const subTotal = Number(unitPrice) * Number(quantitySelected);

    const addedProductObj = {
      title: addedProductTitle,
      image: addedProductImage,
      quantity: quantitySelected,
      price: unitPrice,
      subTotal: subTotal,
      id: uuid(),
    };
    setCartContents((prevCart) => {
      return [...prevCart, addedProductObj];
    });
    console.log(cartContents);

    setCartCount((prevCount) => prevCount + Number(quantitySelected));
  };

  function handleCartClick() {
    setCartClicked((prevState) => !prevState);
  }

  function deleteItem(e) {
    console.log(e.target.parentNode.id);

    function findObjectById(array, id) {
      return array.find((obj) => obj.id === id);
    }
    const id = e.target.parentNode.id;
    const found = findObjectById(cartContents, id);
    const tempCart = cartContents.filter((item) => item !== found);
    setCartContents(tempCart);
  }

  return (
    <>
      <Navbar cartCount={cartCount} handleCartClick={handleCartClick} />
      {cartClicked && (
        <Cart cartContents={cartContents} deleteItem={(e) => deleteItem(e)} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleClick={(e) => handleClick(e)}
              handleAddToCart={(e, quantitySelected) =>
                handleAddToCart(e, quantitySelected)
              }
            />
          }
        />
        <Route path="product" element={<ProductPage id={clickedProductId} />} />
      </Routes>
    </>
  );
}

export default App;