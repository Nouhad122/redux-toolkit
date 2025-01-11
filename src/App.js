import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const showCart = useSelector(state => state.ui.cartOpened);
  const cart = useSelector(state => state.cart.items);

  useEffect(() =>{
    const fetchCartItems = async () =>{
      try{
        const response = await fetch("https://react-http-3f0d9-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify(cart)
              });

        if(!response.ok){
        throw new Error("Something went wrong! Cannot fetch data.");
      }
      }
      catch(error){
        //error
      }
    }
    fetchCartItems();
  },[cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
