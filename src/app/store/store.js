import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../features/cardSlice';
import checkReducer from '../features/checkSlice';
import showCardReducer from '../features/showCardSlice';

export default configureStore({
	reducer: {
		card: cardReducer,
		check: checkReducer,
		show: showCardReducer,
	},
});
