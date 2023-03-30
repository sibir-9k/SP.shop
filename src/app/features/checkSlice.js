import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	subtotal: 0,
	tax: 100,
	shipping: 150,
	totalAllPrice: 0,
};

const sumAmountTax = initialState.tax + initialState.shipping;

const checkSlice = createSlice({
	name: 'check',
	initialState,
	reducers: {
		sumAllPrice: (state, action) => {
			let sumSubtotal = action.payload;
			if (sumSubtotal !== 0) {
				state.subtotal = sumSubtotal;
				state.totalAllPrice = sumAmountTax + state.subtotal;
			} else if(sumSubtotal === 0){
        state.subtotal = 0
        state.totalAllPrice = 0
      }
		},
	},
});

export const { sumAllPrice } = checkSlice.actions;

export default checkSlice.reducer;
