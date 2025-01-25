import React from 'react';
import Item from './Item';
import './ItemListContainer.css';
import mate1 from '../../assets/images/mate1.webp';
import bombilla1 from '../../assets/images/bombilla1.webp';
import yerba1 from '../../assets/images/yerba1.webp';
import setMatero1 from '../../assets/images/set-matero1.webp';

const ItemListContainer = ({ greeting }) => {
  const products = [
    {
      id: 1,
      title: "Mate Imperial",
      price: 15000,
      description: "Mate de calabaza premium con detalles en alpaca",
      imageUrl: mate1
    },
    {
      id: 2,
      title: "Bombilla de Alpaca",
      price: 8000,
      description: "Bombilla artesanal con filtro desmontable",
      imageUrl: bombilla1
    },
    {
      id: 3,
      title: "Yerba Mate Orgánica",
      price: 2500,
      description: "Yerba mate premium sin palo, cosecha especial",
      imageUrl: yerba1
    },
    {
      id: 4,
      title: "Set Matero Completo",
      price: 25000,
      description: "Kit completo con mate, bombilla y yerbera",
      imageUrl: setMatero1
    }
  ];

  return (
    <div className="item-list-container">
      <h2 className="greeting-message">{greeting}</h2>
      <div className="items-grid">
        {products.map(product => (
          <Item 
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;