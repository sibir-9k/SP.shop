import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bucketBuy from '../../assets/img/bucketWhite.svg';

import './LayoutCard.scss';

export const LayoutCard = () => {
	const productItem = useSelector((state) => state.show);

	const { cardName, img, cardPrice } = productItem;

	return (
		<div className="layout-card">
			<Link to={'/'} className="link-back">
				Back in Catalog
			</Link>
			<div className="layout-card__block card-block">
				<img src={img} alt="картинка" />
				<h3 className="card-block__name">{cardName}</h3>
				<p className="card-block__modelNumber">Item model number: MT91547</p>
				<div className="card-block__buy-price">
					<button className="buy">
						<img src={bucketBuy} alt="" />
					</button>
					<span className="price">$ {cardPrice}</span>
				</div>
			</div>
		</div>
	);
};
