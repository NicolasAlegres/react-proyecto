import PropTypes from 'prop-types';
import "./Product.css";

function Product({ product, onAdd}) {
  return (
    
      <div className="product-card">
      <div>
        <img src={product.image} alt={product.title} className="product-card__image"  />
        
        <h2 className="product-card__name" title={product.title}>
          {product.title}
        </h2>
    
      </div>
      <div>
        <p className="product-card__price">
          Precio: ${product.price.toFixed(2)}</p>
        <button onClick={() => onAdd (product)}
          className="button button--full-width">Agregar al carrito</button>
      </div>
      </div>

  )
}

Product.propTypes = {
 
  product: PropTypes.shape({
    
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  
  
}

export default Product
