import React, {Component} from 'react';
import './MapsComponent.css';
import propTypes from 'prop-types';
import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }) => <div className="big-white-box">{text}</div>;

export default class MapsComponent extends Component {

    static defaultProps = {
        center: { lat: 48.067416, lng: 11.379237 },
        zoom: 17
    }

    render(){
        return(

                <div className="row map-container">
                    <GoogleMapReact
                        defaultCenter={ this.props.center }
                        defaultZoom={ this.props.zoom }
                    >
                        <div
                            lat={48.067416}
                            lng={11.379237}
                        >
                            <img src={require('./../../../assets/img/marker.png')} className="marker" />
                        </div>
                    </GoogleMapReact>

                </div>


        )
    }

}
