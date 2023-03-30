import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Basket } from '../Basket/Basket';

import BasketImg from '../../assets/img/bucket.svg';
import './Header.scss';

export const Header = () => {
  const [basketActive, setBasketActive] = useState(false);

  const count = useSelector((state) => state.card.totalQuantity);

  return (
		<header>
			<div className="logo">
				<b>SP</b>.shop
			</div>
			<nav className="menu">
				<button className="menu__basket" onClick={() => setBasketActive(!basketActive)}>
					<img src={BasketImg} alt="Корзина покупок" />
					<div className={count !== 0 ? 'basket-counter__product' : 'basket-counter__hidden'}>{count}</div>
				</button>
			</nav>
			<Basket active={basketActive} setActive={setBasketActive} />
		</header >
	);
};
