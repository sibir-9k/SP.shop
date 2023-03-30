import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/countSlice';
import cardReducer from '../features/cardSlice'
import checkReducer from '../features/checkSlice';

export default configureStore({
	reducer: {
		count: counterReducer,
    card: cardReducer,
    check: checkReducer
	},
});
