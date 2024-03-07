import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProductPage = ({ id }) => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await response.json();
      setProductData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="product-container">
      <img src={productData.image} alt={productData.title} />
      <div className="descriptionContainer">
        <h1>{productData.title}</h1>
        <p>{productData.description}</p>
        <p>{productData.price}</p>
      </div>
      <div className="addToCart">
        <input
          type="number"
          name="quantity"
          className="quantitySelector"
          step={1}
          min="0"
          max="99"
          defaultValue={0}
        />
        <button className="addToCartBtn" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  id: PropTypes.number,
};

export default ProductPage;