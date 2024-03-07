import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/ProductCards.module.css";
const ProductCards = ({ handleClick, handleAddToCart }) => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const json = await response.json();
      setProductData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const cards = productData.map((item) => {
    return (
      <ProductCard
        id={item.id}
        key={item.id}
        imgUrl={item.image}
        title={item.title}
        price={item.price}
        handleClick={(e) => handleClick(e)}
        handleAddToCart={(e, quantitySelected) =>
          handleAddToCart(e, quantitySelected)
        }
      />
    );
  });

  return <div className={styles.cardsContainer}>{cards}</div>;
};

ProductCards.propTypes = {
  handleClick: PropTypes.func,
  handleAddToCart: PropTypes.func,
};

export default ProductCards;