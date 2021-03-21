import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/FakeData';
import './Destination.css';
import fakePlace from '../../fakeData/fakePlace';

const Destination = () => {
    const {cartId, from, to} = useParams();
    const {details} = fakeData.find(vehicle => vehicle.key == cartId);
    const {googleMap} = fakePlace.find(place=> place.name === from);
    return (
        <div className="destination-detail">
        <div className="destination-card">
        <h3 className="mb-0 mt-3">From: {from}</h3>
        <h3 className="mb-0 mt-3">To: {to}</h3>
        <br/>
        <div className="destination-cost">
        {
            details.map(detail => <h6> Driver Name: {detail.driverName}<p>Sit available : {detail.sit}</p><p>${detail.cost}</p> </h6>)
        }
        </div>
        </div>
        <div className="destination-map">
        <iframe className="map" src={googleMap} width="700px" height="700px" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        </div>
    );
};

export default Destination;