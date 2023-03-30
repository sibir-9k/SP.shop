import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sumAllPrice } from '../../app/features/checkSlice';

import './AmountCheck.scss';

export const AmountCheck = () => {

  const dispatch = useDispatch()
  const itemList = useSelector(state => state.card.listItems)
  const check = useSelector((state) => state.check);

  let allSubtottalPrice = [];

  itemList.map(element => {
    allSubtottalPrice.push(element.totalPrice)
  })

  let sumTotalPrice = allSubtottalPrice.reduce((a, b) => a + b, 0);


  useEffect(() => {
    dispatch(sumAllPrice(sumTotalPrice))
  }, [sumTotalPrice])


  return (
    <div className="active__check">
      <div className="subtotal">
        Subtotal
        <div className="sub-price">$ {check.subtotal}</div>
      </div>
      <div className="tax">
        Tax
        <div className="tax-price">$ {check.tax}</div>
      </div>
      <div className="shipping">
        Shipping
        <div className="ship-price">$ {check.shipping}</div>
      </div>
      <div className="total">
        <strong>Total</strong>
        <div className="total-price">
          <strong>$ {check.totalAllPrice}</strong>
        </div>
      </div>
    </div>
  );
};
