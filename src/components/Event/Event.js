import React, {Component} from 'react';
import events from './../../constants/events';
import PropTypes from 'prop-types';

import './Event.css';

export default class Event extends Component {

    render() {

        return (
            <div className="col-md-24">

            </div>
        );
    }

}

Event.propTypes = {
    imgPath: PropTypes.string.isRequired
};