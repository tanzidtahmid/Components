import React from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import './Home.css';
const Home = () => {

    return (
        <div className="cart">
           {
               fakeData.map(UrTurnRide => <Cart cart={UrTurnRide}></Cart>)
           }
           
        </div>
    );
};

export default Home;