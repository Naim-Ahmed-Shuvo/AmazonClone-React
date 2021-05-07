import React from 'react';
import '../css/Checkout.css';
import { useStateValue } from '../store/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

//
const Checkout = () => {
    const [{basket,user}]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt="" className="checkout_add"/>

                <div>
                    <h3>{user?.email}</h3>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {basket.map((item,index)=>(
                        <CheckoutProduct key={index} id={item.id} image={item.image} title={item.title} rating={item.rating} price={item.price} />
                    ))}
                    
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    );
};

export default Checkout;