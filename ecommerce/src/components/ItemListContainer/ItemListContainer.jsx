import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../ItemListContainer/Item';
import { getProducts, getProductsByCategory } from '../../mocks/products';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const fetchProducts = async () => {
      try {
        const data = id 
          ? await getProductsByCategory(id)
          : await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]); // El efecto se ejecuta cuando cambia la categoría

  if (loading) {
    return <div className="loading">Cargando productos...</div>;
  }

  return (
    <div className="item-list-container">
      <h2 className="category-title">
        {id ? `Categoría: ${id}` : 'Todos los productos'}
      </h2>
      <div className="items-grid">
        {products.map(product => (
          <Item 
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;