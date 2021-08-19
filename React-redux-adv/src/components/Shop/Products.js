import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 'p1',
    price: 100,
    title: 'Book 1',
    description: 'des 1'
  },
  {
    id: 'p2',
    price: 120,
    title: 'Book 2',
    description: 'des 2'
  },
  {
    id: 'p3',
    price: 500,
    title: 'Book 3',
    description: 'des 3'
  },
  {
    id: 'p4',
    price: 350,
    title: 'Book 4',
    description: 'des 4'
  },
  {
    id: 'p5',
    price: 200,
    title: 'Book 5',
    description: 'des 5'
  },
  {
    id: 'p6',
    price: 150,
    title: 'Book 6',
    description: 'des 6'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_DATA.map((item) => {
            return (
              <ProductItem
                key= {item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            )
          })
        }
      </ul>
    </section>
  );
};

export default Products;
