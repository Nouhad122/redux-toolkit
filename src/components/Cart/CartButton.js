import { useDispatch } from 'react-redux';
import { uiSliceActions } from '../../store/ui';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartOpening = () =>{
    dispatch(uiSliceActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={toggleCartOpening}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
