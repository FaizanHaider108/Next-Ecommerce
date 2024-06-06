
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the CartItem interface
export interface CartItem {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating:{
        rate: number,
        count:number
    }
    quantity: number;  
}

// Define the CartState interface
interface CartState {
    items: CartItem[];
}

// Define the initial state
const initialState: CartState = {
    items: []
};

// Create a slice with reducers that use payloads
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1  // Set the initial quantity to 1
                });
            } 
        },
        
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        (item) => item.id !== action.payload.id
                    );
                }
            }
        },
        
        clearCart: (state) => {
            state.items = [];
        }
    }
});

// Export the action creators and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
