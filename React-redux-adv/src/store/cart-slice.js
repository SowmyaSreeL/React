import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from './ui-slice';

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity ++;
            
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItem(state, action) {
            const itemToRemove = action.payload;
            const existingItem = state.items.find(item => item.id === itemToRemove.id);
            state.totalQuantity--;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== itemToRemove.id)
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})

//custom action creator for fetching data.

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchdata = async () => {
            const response =  await fetch('https://fetch-react-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok) {
                throw new Error('something wrong in fetching data!!');
            }
            const responseData = await response.json();
            return responseData;
        }

        try {
            const cartData = await fetchdata();
            dispatch(cartSliceActions.replaceCart(cartData));
        }

        catch(error) {
            dispatch(uiSliceActions.setNotification({
                status: 'error',
                title: 'ERROR OCCURED',
                message: 'Sending cart data failed...'
            }))
        }
    }
}

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;