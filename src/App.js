import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Coffee from "./components/Categories-pages/Coffee";
import Literature from "./components/Categories-pages/Literature";
import Mugs from "./components/Categories-pages/Mugs";
import Apparel from "./components/Categories-pages/Apparel";
import Stickers from "./components/Categories-pages/Stickers";
import Equipment from "./components/Categories-pages/Equipment";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="coffee" element={<Coffee />} />
          <Route path="literature" element={<Literature />} />
          <Route path="mugs" element={<Mugs />} />
          <Route path="apparel" element={<Apparel />} />
          <Route path="stickers" element={<Stickers />} />
          <Route path="equipment" element={<Equipment />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
