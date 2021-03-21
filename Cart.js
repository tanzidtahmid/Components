import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Cart.css';
const Cart = (props) => {

    const {image, name, key} = props.cart;
    const history = useHistory();
    const handleClick = (key) =>{
        history.push(`/destination/${key}`)
    }
    return (
        
            <div onClick={() => handleClick(key)} className="card cart-image" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt=""/>
            <h3 className="card-text" style={{textAlign: 'center'}}>{name}</h3>
            </div>
        

    );
};

export default Cart;