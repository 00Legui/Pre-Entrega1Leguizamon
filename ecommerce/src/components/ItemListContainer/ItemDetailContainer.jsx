import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../../mocks/products';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        if (data) {
          setProduct(data);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (loading) {
    return <div className="loading">Cargando producto...</div>;
  }

  if (!product) {
    return <div className="error">Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className="item-detail-info">
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <p className="stock">Stock disponible: {product.stock}</p>
          <button className="add-to-cart-button">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;