
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        let updatedItems;
        const existingCartItemIndex = state.items.findIndex((item) => {
            return item.id === action.item.id;
        })
        const existingItem = state.items[existingCartItemIndex];
        if(existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + 1
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else
            updatedItems = state.items.concat(action.item);

        const updatedTotalAmount = state.totalAmount + (action.item.price);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultState
}


const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultState)

    const addItemHandler = (item) => {
        dispatchCart({
            type: 'ADD',
            item: item
        })
    }
    const removeItemHandler = (id) => {
        dispatchCart({
            type: 'REMOVE',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return<CartContext.Provider value={cartContext}>
            {props.children}
    </CartContext.Provider>
}

export default CartProvider;