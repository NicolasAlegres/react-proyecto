import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Product from './Product'

function App() {
  // 🧃 Creamos la mochila (estado)
  const [cartCount, setCartCount] = useState(0)

  // 🔑 Función que suma 1 al carrito
  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <div>
      <h1>Mi Tienda</h1>
      <p>🛒 Productos en el carrito: {cartCount}</p>

      {/* Le pasamos la función al componente Product */}
      <Product name="Camiseta React" price={1500} onAdd={handleAddToCart} />
      <Product name="Gorra JavaScript" price={800} onAdd={handleAddToCart} />
    </div>
  )
}

export default App

