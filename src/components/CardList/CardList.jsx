import React from 'react';
import data from '../../data/data.js';
import { Card } from '../Card/Card.jsx';

import './CardList.scss';


export const CardList = () => {
  return (
    <main>
      {data.map((product) => {
        return <Card {...product} key={product.id} />
      })}
    </main>
  );
};
