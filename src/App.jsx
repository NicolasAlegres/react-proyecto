import { useState, useEffect } from 'react'
import './App.css'
import Cart from './Cart';
import Product from './Product'


function App() {
  // estados

  const [cart, setCart] = useState([])

  // 'products' guardará la lista de productos que viene de la API.

  const [products, setProducts] = useState([])
  // 'loading' nos dirá si estamos esperando la respuesta de la API.

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        // Cuando tenemos los datos...
        setProducts(json) // ...los guardamos en nuestro estado 'products'.
        setLoading(false) // ...y cambiamos 'loading' a 'false' porque ya no estamos cargando.
      })
  }, [])  // El array vacío `[]` asegura que este efecto se ejecute solo una vez.




  // 🔑 Función que suma 1 al carrito
  const handleAddToCart = (productToAdd) => {
    const existingProduct = cart.find(item => item.id === productToAdd.id);

    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);


    }
  }

  const clearCart = () => {
    setCart([]);
  }


  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <h1>Mi Tienda</h1>
      <p>🛒 Productos en el carrito: {totalItems}</p>
      <Cart cartItems={cart} onClearCart={clearCart} />
      
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
      <div className="products-list">
        {products.map(product => (
          <Product
            key={product.id}
            name={product.title}
            price={product.price}
            image={product.image}
            onAdd={() => handleAddToCart({
              id: product.id,
              name: product.title,
              price: product.price,

            })}
          />
        ))}
      </div>
      )
    }
    </div>


  )
  
}


export default App

