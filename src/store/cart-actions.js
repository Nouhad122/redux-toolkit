import { uiSliceActions } from './ui';
import { cartSliceActions } from './cart';

export const fetchData = () =>{
    return async (dispatch) =>{
        const fetchRequest = async () =>{
            const response = await fetch("https://react-http-3f0d9-default-rtdb.firebaseio.com/cart.json");
            
            if(!response.ok){
                throw new Error("Failed to fetch data.");
            }

            const resData = await response.json();
            return resData;
        }

        try{
            const cartData = await fetchRequest();
            dispatch(cartSliceActions.replaceCart(cartData));
        }
        catch(error){
            dispatch(uiSliceActions.handleNotification({
                status: "error",
                title: "Error",
                message: "An Error is occured, Failed to fetch cart data."
            }));
        }
        
    }
}

export const sendData = (cart) =>{
    return async (dispatch) =>{

        dispatch(uiSliceActions.handleNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending items in cart."
                }));

        const sendRequest = async () =>{
            try{
                const response = await fetch("https://react-http-3f0d9-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify(cart)
                });

                if(!response.ok){
                throw new Error("Something went wrong! Cannot fetch data.");
                }

                dispatch(uiSliceActions.handleNotification({
                status: "success",
                title: "Successful",
                message: "Cart data is sent successfully!"
                }));
            }

            catch(error){
                dispatch(uiSliceActions.handleNotification({
                    status: "error",
                    title: "Error",
                    message: "An Error is occured, Failed to send cart data."
                }));
            }
        }
        await sendRequest();
            
    }
}