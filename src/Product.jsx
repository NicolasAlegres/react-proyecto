import PropTypes from 'prop-types';

function Product({ name, price, onAdd, image }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      width: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: 'left'
    }}>
      <div>
        <img src={image} alt={name} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />

        <h2 style={{
          fontSize: '1em',
          height: '1.5em',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          margin: '0 0 10px 0'
        }}>
          {name}
        </h2>
      </div>
      <div>
        <p style={{ margin: '0 0 10px 0', fontSize: '1.1em', fontWeight: 'bold' }}>
          Precio: ${price.toFixed(2)}</p>
        <button onClick={onAdd}
          className="button button--full-width">Agregar al carrito</button>

      </div>
    </div>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
}

export default Product
