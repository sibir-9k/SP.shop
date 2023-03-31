import React from 'react';
import { useDispatch } from 'react-redux';
import { addCardInBusket } from '../../app/features/cardSlice';

import bucketBuy from '../../assets/img/bucketWhite.svg';
import './Card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ id, title, imgUrl, price }) => {
  const dispatch = useDispatch();

  const addCard = () => {
    dispatch(
      addCardInBusket({
        name: title,
        price,
        id,
        img: imgUrl,
      })
    );
  };

  return (
    <div className="card">
      <div className="card__img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="card__info">
        <div className="card__info-productName">
          <Link to={'product'}>{title}</Link>
        </div>
        <div className="card__info-buy-price">
          <button className="buy" onClick={addCard}>
            <img src={bucketBuy} alt="" />
          </button>
          <span className="price">$ {price}</span>
        </div>
      </div>
    </div>

  );
};
