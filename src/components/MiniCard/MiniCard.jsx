import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../app/features/countSlice';
import {
	removeCardFromBusket,
	addCardInBusket,
	removeCardList,
} from '../../app/features/cardSlice';

import plusBtn from '../../assets/img/plusButton.svg';
import minusBtn from '../../assets/img/minusButton.svg';
import CrossDelete from '../../assets/img/CrossDelete.svg';
import './MiniCard.scss';

export const MiniCard = ({ id, name, quantity, price, totalPrice, img }) => {
	const dispatch = useDispatch();

	const decrement = () => {
		dispatch(removeCardFromBusket(id));
	};

	const increment = () => {
		dispatch(
			addCardInBusket({
				price,
				id,
				quantity,
			})
		);
	};

	const deleteCardFromList = () => {
		dispatch(removeCardList(id));
	};

	return (
		<li className="mini-card">
			<div className="mini-card__img">
				<img src={img} alt="Картинка" />
			</div>
			<div className="mini-card__info">
				<div className="mini-card__info-name">{name}</div>
				<div className="list-btn">
					<div className="list-btn__count">
						<button className="minusBtn" onClick={decrement}>
							<img src={minusBtn} alt="" />
						</button>
						<div className="count">{quantity}</div>
						<button className="plusBtn" onClick={increment}>
							<img src={plusBtn} alt="" />
						</button>
					</div>
					<div className="list-btn__sumPriceProduct">$ {totalPrice}</div>
				</div>
			</div>
			<button className="mini-card__delete" onClick={deleteCardFromList}>
				<img src={CrossDelete} alt="Удалить" />
			</button>
		</li>
	);
};
