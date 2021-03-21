import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakePlace from '../../fakeData/fakePlace';
import mapImage from '../../images/Map.png';
import './DestinationSelection.css';


const DestinationSelection = () => {

    const {cartId} = useParams();

    const [from, setFrom] = useState([]);
    const [to, setTo] = useState([]);

    const handleFrom = (event) => {
        const placeValue = event.target.value
        setFrom(placeValue)
    }
    const handleTo = (event) => {
        const placeValue = event.target.value
        setTo(placeValue)
    }


    return (
        <div className="row selection-container">
            <div className="col-md-4 selection-box ">
                <p className="mb-0 mt-3">Pick from</p>
                <select onChange={handleFrom} value={from} name="category" id="">
                    <option value="">Select Your Destination</option>
                    {
                        fakePlace.map(place => (
                            <option value={place.name}> {place.name}</option>
                        ))
                    }
                </select>
                <p className="mb-0 mt-3">Pick To </p>
                <select onChange={handleTo} value={to} name="category" id="">
                    <option value="">Select Your Destination</option>
                    {
                        fakePlace.map(place => (
                            <option value={place.name}>{place.name}</option>
                        ))
                    }
                </select>
                <br/>
                <br/>
                <label for="meeting-time">Choose a time for your Ride</label>

                <br/>
            <input type="datetime-local" id="meeting-time"
            name="meeting-time" value="2021-03-12T19:30"
            min="2021-03-07T00:00" max="2030-14T00:00"></input>

                <br/> <br/>
                    <Link to={`/destination/${cartId}/${from}/${to}`}>
                    <button className="text-center btn btn-primary selection-btn"> Search</button>
                    </Link>
            </div>
            <div className="col-md-7">
                <div className="map-img">
                    <img className="img" src={mapImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DestinationSelection;