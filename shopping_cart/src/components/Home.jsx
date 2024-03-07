import ProductCards from "./ProductCards";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";
import headphonesHero from "../assets/images/headphones-hero.png";

const Home = ({ handleClick, handleAddToCart }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroImageContainer}>
        <img
          className={styles.heroImg}
          src={headphonesHero}
          alt="Headphones hero image"
        />
        <div className={styles.heroTitleTextContainer}>
          <p className={styles.brandname}>Sonic Aura</p>
          <p className={styles.wireless}>Wireless</p>
          <p className={styles.headphones}>HEADPHONES</p>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>Description</p>
          <p className={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <button type="button" className={styles.categoryButton}>
          Shop By Category
        </button>
      </div>
      <h2 className={styles.bestSellers}>Best Sellers</h2>
      <ProductCards
        handleClick={(e) => handleClick(e)}
        handleAddToCart={(e, quantitySelected) =>
          handleAddToCart(e, quantitySelected)
        }
      />
    </div>
  );
};

Home.propTypes = {
  handleClick: PropTypes.func,
  handleAddToCart: PropTypes.func,
};

export default Home;