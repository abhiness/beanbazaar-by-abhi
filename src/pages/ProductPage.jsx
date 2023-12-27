import { createContext, useContext, useState } from "react";
import "../components/ProductPage.css";
import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router";

export const CartContext = createContext();

function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item[0].img);

  const { addToCart } = useContext(CartContext);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * item[0].price;
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>

      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{item[0].description}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
              <div className="small-imgs">
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">{item[0].specs}</p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className="product-price">${calcPrice(quantity)}</p>
              </div>
              <div className="atc-buy">
                <button
                  onClick={() => {
                    addToCart(item[0]);
                    showNotify();
                  }}
                  className="atc-btn"
                >
                  add to cart
                </button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>

          <div className="specifications">
            {item[0].profile && (
              <div className="spec">
                <p className="spec-title">Profile:</p>
                <p className="title-desc">{item[0].profile}</p>
              </div>
            )}
            {item[0].weight && (
              <div className="spec">
                <p className="spec-title">Weight:</p>
                <p className="title-desc">{item[0].weight}</p>
              </div>
            )}
            {item[0].size && (
              <div className="spec">
                <p className="spec-title">Size:</p>
                <p className="title-desc">{item[0].size}</p>
              </div>
            )}
            {item[0].author && (
              <div className="spec">
                <p className="spec-title">Author:</p>
                <p className="title-desc">{item[0].author}</p>
              </div>
            )}
            {item[0].material && (
              <div className="spec">
                <p className="spec-title">Material:</p>
                <p className="title-desc">{item[0].material}</p>
              </div>
            )}
            {item[0].roast && (
              <div className="spec">
                <p className="spec-title">Roast:</p>
                <p className="title-desc">{item[0].roast}</p>
              </div>
            )}
            {item[0].taste && (
              <div className="spec">
                <p className="spec-title">Taste:</p>
                <p className="title-desc">{item[0].taste}</p>
              </div>
            )}
          </div>
        </div>

        <TrendingSlider />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
