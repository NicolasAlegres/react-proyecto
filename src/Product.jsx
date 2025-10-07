function Product({ name, price, onAdd }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default Product
