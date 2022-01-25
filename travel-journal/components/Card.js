import React from "react"

export default function Card(props) {
    return (
        <div>
            <div className="card">
                <img src={props.item.imageUrl} className="card-img"/>
                <div className="card-content">
                    <div className="card-location">
                        <img src="../images/pin.png" />
                        <div className="card-country">{props.item.location.toUpperCase()}</div>
                        <div className="card-google">
                            <a href={props.item.googleMapsUrl}>
                                View on Google Maps
                            </a>
                        </div>
                    </div>
                    <div className="card-title">
                        {props.item.title}
                    </div>
                    <div className="card-duration">
                        {props.item.startDate} - {props.item.endDate}
                    </div>
                    <div className="card-desc">
                        {props.item.description}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}