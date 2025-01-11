import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Phone",
    description: "This is a phone",
  },
  {
    id: "p2",
    price: 7,
    title: "Ipad",
    description: "This is a ipad",
  },
  {
    id: "p3",
    price: 9,
    title: "Laptop",
    description: "This is a laptop",
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product =>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
         )
        }
        
      </ul>
    </section>
  );
};

export default Products;
