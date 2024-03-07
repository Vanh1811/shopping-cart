import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import styles from "../styles/Cart.module.css";

const Cart = ({ cartContents, deleteItem }) => {
  const cartItems = cartContents.map((item) => {
    return (
      <div className={styles.cartProductContainer} id={item.id} key={uuid()}>
        <p>{item.title}</p>
        <img
          className={styles.cartProductImage}
          src={item.image}
          alt={item.title}
        />
        <p>Quantity :{item.quantity}</p>
        <p>Price: {item.price / 100}</p>
        <p>Total:{"$" + item.subTotal / 100}</p>
        <button onClick={(e) => deleteItem(e)} type="button">
          Delete
        </button>
      </div>
    );
  });

  let calculatedSubtotal = 0;
  cartContents.forEach((element) => {
    calculatedSubtotal += element.subTotal;
  });

  return (
    <div className={styles.cartContainer}>
      {cartItems}
      <p className={styles.cartSubtotal}>{`Subtotal: $${
        calculatedSubtotal / 100
      }`}</p>
      <button className={styles.checkoutButton} type="button">
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  cartContents: PropTypes.array,
  deleteItem: PropTypes.func,
};

export default Cart;