import { useState } from 'react'
import '../styles/Cart.css'

function Cart({cart, setCart}) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plant) => acc + plant.amount * plant.price,
        0
    )

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(false)}
            >
                Fermer le panier
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) =>
                            <li key={`${name}-${index}`} className="lmj-cart-item">
                                {name} {price}€ x {amount}
                            </li>
                        )}
                    </ul>
                    <h3>Total : {total}€</h3>
                    <button className="lmj-cart-toggle-button" onClick={() => setCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>
                    Votre panier est vide
                </div>
            )}
        </div>
    ) : (
        <div className="lmj-cart-closed">
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le panier
            </button>
        </div>
    )
}

export default Cart