import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, price, imageUrl, description }) => {
  return (
    <div className="item-card">
      <Link to={`/item/${id}`} className="item-link">
        <img src={imageUrl} alt={title} className="item-image" />
        <div className="item-info">
          <h3 className="item-title">{title}</h3>
          <p className="item-description">{description}</p>
          <p className="item-price">${price}</p>
          <button className="item-button">Ver detalle</button>
        </div>
      </Link>
    </div>
  );
};

export default Item;