import React, {Component} from 'react';
import './MapsComponent.css';
import propTypes from 'prop-types';
import GoogleMapReact from 'google-map-react'

export default class MapsComponent extends Component {

    static defaultProps = {
        center: { lat: 40.7446790, lng: -73.9485420 },
        zoom: 11
    }

    render(){
        return(

                <div className="row map-container">
                    <GoogleMapReact
                        defaultCenter={ this.props.center }
                        defaultZoom={ this.props.zoom }

                    >
                    </GoogleMapReact>

                </div>


        )
    }

}
