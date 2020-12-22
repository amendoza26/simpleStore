import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {basket.map(todo => (
                        <CheckoutProduct
                            id={todo.id}
                            title={todo.title}
                            image={todo.thumb}
                            price={todo.normalPrice}
                            rating={todo.rating}
                        />
                    ))}
                </div>

            </div>

            

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
