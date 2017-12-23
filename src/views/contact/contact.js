import React, {Component} from 'react';
import Map from './../../components/MapsComponent/MapsComponent';
import Overlay from './../../components/OverlayHalfScreen/OverlayHalfScreen';
import ContactCotent from './../../components/ContactContent/ContactContent';
import './contact.css';
import OverlayHalfScreen from "../../components/OverlayHalfScreen/OverlayHalfScreen";
import ContactContent from "../../components/ContactContent/ContactContent";

export default class Contact extends Component {

    state = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    }

    render() {
        return (
            <div className="container-fluid row hide-scroll">
                <Overlay content={<ContactContent/>}/>
                <Map/>
            </div>
        );
    }
}


