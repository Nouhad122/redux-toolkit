import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/ui';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCartOpening = () =>{
    dispatch(uiSliceActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={toggleCartOpening}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
