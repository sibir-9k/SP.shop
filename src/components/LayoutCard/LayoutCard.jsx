import React from 'react';
import bucketBuy from '../../assets/img/bucketWhite.svg';
import testImg from '../../assets/img/newBalance574.jpg'

import "./LayoutCard.scss"
import { Link } from 'react-router-dom';

export const LayoutCard = () => {
  return (
    <div className="layout-card">
      <Link to={'/'} className="link-back">Back in Catalog</Link >
      <div className="layout-card__block card-block">
        <img src={testImg} alt="картинка" />
        <h3 className="card-block__name">New Balance 574 Vintage Brights</h3>
        <p className="card-block__modelNumber">Item model number: MT91547</p>
        <div className="card-block__buy-price">
          <button className="buy">
            <img src={bucketBuy} alt="" />
          </button>
          <span className="price">$ 650</span>
        </div>
      </div>
    </div >
  );
};
