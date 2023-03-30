import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	listItems: [],
	totalQuantity: 0,
	subtotalAllPrice: [],
};

const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		addCardInBusket: (state, action) => {
			const newProductCard = action.payload;
			const existingItem = state.listItems.find((item) => item.id === newProductCard.id);
			if (existingItem) {
				existingItem.quantity += 1;
				existingItem.totalPrice += newProductCard.price;
				state.totalQuantity += 1;
			} else {
				state.listItems.push({
					id: newProductCard.id,
					name: newProductCard.name,
					price: newProductCard.price,
					quantity: 1,
					totalPrice: newProductCard.price,
					img: newProductCard.img,
				});
				state.totalQuantity += 1;
			}
		},
		removeCardFromBusket: (state, action) => {
			const idItem = action.payload;
			const existingItem = state.listItems.find((item) => item.id === idItem);
			if (existingItem.quantity === 1) {
				state.listItems = state.listItems.filter((item) => item.id !== idItem);
				let arrTotalQuantity = [];
				state.listItems.map((item) => arrTotalQuantity.push(item.quantity));
				state.totalQuantity = arrTotalQuantity.reduce((a, b) => a + b, 0);
			} else {
				existingItem.quantity -= 1;
				existingItem.totalPrice -= existingItem.price;
				state.totalQuantity -= 1;
			}
		},
		removeCardList: (state, action) => {
			const idItem = action.payload;
			const existingItem = state.listItems.find((item) => item.id === idItem);
			if (existingItem) {
				state.listItems = state.listItems.filter((item) => item.id !== idItem);
				let arrTotalQuantity = [];
				state.listItems.map((item) => arrTotalQuantity.push(item.quantity));
				state.totalQuantity = arrTotalQuantity.reduce((a, b) => a + b, 0);
			}
		},
	},
});

export const { addCardInBusket, removeCardFromBusket, removeCardList } = cardSlice.actions;

export default cardSlice.reducer;
