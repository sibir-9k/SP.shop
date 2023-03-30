import React from 'react';
import { useSelector } from 'react-redux';
import { MiniCard } from '../MiniCard/MiniCard';
import { AmountCheck } from '../AmountCheck/AmountCheck';

import Cross from '../../assets/img/Cross.svg';
import './Basket.scss';

export const Basket = ({ active, setActive }) => {

	const productArray = useSelector((state) => state.card.listItems);

	return (
		<div className={active ? 'basket active' : 'basket'} onClick={() => setActive(false)}>
			<div className="basket__content content" onClick={(e) => e.stopPropagation()}>
				<button className="active__close" onClick={() => setActive(false)}>
					<img src={Cross} alt="" />
				</button>
				<div className="active__product">
					<div className="active-list__name">
						<strong>My basket</strong>
					</div>
					<ul className="active-product__list">
						{productArray.map((item) => {
							return <MiniCard {...item} key={item.id} />;
						})}
					</ul>
				</div>
				<AmountCheck />
			</div>
		</div>
	);
};
