import React from 'react';
import './Item.css';

const Item = ({ title, price, imageUrl, description }) => {
  return (
    <div className="item-card">
      <img src={imageUrl} alt={title} className="item-image" />
      <div className="item-info">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">${price}</p>
        <button className="item-button">Ver detalle</button>
      </div>
    </div>
  );
};

export default Item;