import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Phone",
    description: "This is a phone",
    price: 6
  },
  {
    id: "p2",
    title: "Ipad",
    description: "This is a ipad",
    price: 7
  },
  {
    id: "p3",
    title: "Laptop",
    description: "This is a laptop",
    price: 9
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
