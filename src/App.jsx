import React, { useReducer } from 'react';

// Estado inicial
const initialState = {
  cart: [],
};

// Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const total = state.cart.reduce((acc, item) => acc + item.price, 0);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">🛍️ Carrito de Compras</h1>

      <button
        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
        onClick={() =>
          addItemToCart({ id: Date.now(), name: `Producto nuevo ${Date.now()}`, price: Math.floor(Math.random() * 100) })
        }
      >
        Agregar producto
      </button>

      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={clearCart}
      >
        Vaciar carrito
      </button>

      <ul className="mt-4">
        {state.cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            {item.name}
            <span className="text-gray-600">${item.price}</span>
            <button
              className="text-red-600"
              onClick={() => removeItemFromCart(item.id)}
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>
      
      {state.cart.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Resumen de compra</h2>
          <p>Total: ${total}</p>
        </div>
      )}

      {/* Mensaje si el carrito está vacío */}

      {state.cart.length === 0 && (
        <p className="text-gray-500 mt-4">El carrito está vacío</p>
      )}
    </div>
  );
}