import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	img: '',
	cardName: '',
	cardPrice: 0,
	id: 0,
};

const showCardSlice = createSlice({
	name: 'showCard',
	initialState,
	reducers: {
		showCardLayout: (state, action) => {
			const showProductCard = action.payload;
			state.img = showProductCard.img;
			state.cardName = showProductCard.name;
			state.cardPrice = showProductCard.price;
      state.id = showProductCard.id
		},
	},
});

export const { showCardLayout } = showCardSlice.actions;

export default showCardSlice.reducer;
