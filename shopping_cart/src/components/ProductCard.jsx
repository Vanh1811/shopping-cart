import styles from "../styles/ProductCard.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
const ProductCard = (props) => {
  const [quantitySelected, setQuantitySelected] = useState(0);

  function handleQuantityChange(e) {
    setQuantitySelected(Number(e.target.value));
  }
  return (
    <div
      id={props.id}
      onClick={(e) => props.handleClick(e)}
      className={styles.card}
    >
      <Link to="/product">
        <img
          className={styles.cardImg}
          src={props.imgUrl}
          alt={"Image of " + props.title}
        />
      </Link>
      <div className={styles.cardInfo}>
        <div className={styles.cardTitle}>{props.title}</div>
        <div className={styles.cardPrice}>{"$" + props.price}</div>
      </div>
      <div className={styles.addToCart}>
        <input
          type="number"
          name="quantity"
          className={styles.quantitySelector}
          step={1}
          min="0"
          max="99"
          defaultValue={0}
          onChange={(e) => handleQuantityChange(e)}
        />
        <button
          className={styles.addToCartBtn}
          type="button"
          onClick={(e) => props.handleAddToCart(e, quantitySelected)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  handleClick: PropTypes.func,
  handleAddToCart: PropTypes.func,
};

export default ProductCard;