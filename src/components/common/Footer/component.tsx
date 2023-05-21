import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.menu }>
        <h3>Menu</h3>
        <ul>
          <li><a href="#">Appetizers</a></li>
          <li><a href="#">Main Courses</a></li>
          <li><a href="#">Desserts</a></li>
          <li><a href="#">Beverages</a></li>
        </ul>
      </div>
      <div className={ styles.cart }>
        <h3>Cart</h3>
        <ul className={ styles.cart__items }>
          <li>Soup x1</li>
          <li>Soup x2</li>
          <li>Soup x3</li>
        </ul>
        <button>Place Order</button>
      </div>
    </footer>
  );
};

export default Footer;