import { IconChevronLeft } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <IconChevronLeft /> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="coffee">
              <button onClick={() => handleBtnName("coffee")}>Coffee</button>
            </Link>
            <Link to="literature">
              <button onClick={() => handleBtnName("literature")}>
                Literature
              </button>
            </Link>
            <Link to="mugs">
              <button onClick={() => handleBtnName("mugs")}>Mugs</button>
            </Link>
            <Link to="apparel">
              <button onClick={() => handleBtnName("apparel")}>Apparel</button>
            </Link>
            <Link to="stickers">
              <button onClick={() => handleBtnName("stickers")}>
                Stickers
              </button>
            </Link>
            <Link to="equipment">
              <button onClick={() => handleBtnName("equipment")}>
                Equipment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
