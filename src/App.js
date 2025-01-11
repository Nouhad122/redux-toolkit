import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, sendData } from './store/cart-actions';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.ui.cartOpened);
  const cart = useSelector(state => state.cart.items);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchData());
  });
  useEffect(() =>{
    if(isInitial){
      isInitial = false;
      return;
    }
    dispatch(sendData(cart));
  },[cart, dispatch]);

  return (
    <>
      {
        notification &&
         <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
          />
      }
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
