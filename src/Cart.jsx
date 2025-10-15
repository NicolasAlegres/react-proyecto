import React from 'react';
import PropTypes from 'prop-types';

function Cart({cartItems, onClearCart}) {
    // Calcular el total de LA COMPRA
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


    return(
        <div className="cart">
            <h2>Carrito de compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
                <h3>Total: ${total.toFixed(2)}</h3>     {/*---le decimos que muestre 2 decimales---*/}
                

                <button onClick={onClearCart} className="button">Vaciar Carrito</button>
                
                </>
            )}
        </div>
    );
}

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
    onClearCart: PropTypes.func.isRequired,
};

export default Cart;
    
