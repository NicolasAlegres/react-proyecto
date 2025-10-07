import { useState } from 'react'
import './App.css'


import Product from './Product'

function App() {
  // array de objetos

  const [cart, setCart] = useState([])

  // 🔑 Función que suma 1 al carrito
  const handleAddToCart = (productToAdd) => {
    const existingProduct = cart.find(item => item.name === productToAdd.name);

    if (existingProduct) {
      setCart(cart.map(item =>
        item.name === productToAdd.name ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);


    }
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <h1>Mi Tienda</h1>
      <p>🛒 Productos en el carrito: {totalItems}</p>

      {/* Le pasamos la función al componente Product */}
      <Product name="Camiseta React"
        price={1500}
        onAdd={() => handleAddToCart({
          name: "Camiseta React", price: 1500
        })} />

      <Product 
      name="Gorra JavaScript" 
      price={800}
      onAdd={() =>handleAddToCart({ name: "Gorra JavaScript", price: 800 })} />
    </div>
  )
}

export default App

