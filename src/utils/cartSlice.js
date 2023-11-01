import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        resDetails: null,
        currentResDetails: null
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id == action.payload.id);

            if (index != -1) state.items.splice(index, 1);
            if (state.items.length == 0) state.resDetails = null;
        
        },
        clearCart: (state) => {
            state.items = [];
            state.resDetails = state.currentResDetails;
        },
        
        addRestaurantDetails: (state, action) => { 
            if(state.items.length == 0)
                state.resDetails = action.payload;
        },

        addCurrentRestaurantDetails: (state, action) => {
            state.currentResDetails = action.payload;
        }
    }

});

export const {
  addItem,
  removeItem,
  clearCart,
  addRestaurantDetails,
  addCurrentRestaurantDetails,
} = cartSlice.actions;
export default cartSlice.reducer;