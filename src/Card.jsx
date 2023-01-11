import React from "react";
import './components.css'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--ext">
                <img src={props.image} className="card--image"/>
                <div className="card--int">
                    <div className="card--loc">
                        <p className="location">{props.location}</p>
                        <a href={props.map} className="map">Visit on Google Maps</a>
                    </div>
                    <h1 className="name">{props.name}</h1>
                    <p className="duration">{props.duration}</p>
                    <p className="info">{props.info}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}