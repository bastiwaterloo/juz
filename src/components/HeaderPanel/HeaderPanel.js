import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './HeaderPanel.css';

export default class HeaderPanel extends Component {

    render() {
        return (
            <div className="HeaderPanel container">
                <img src={require('./../../../assets/img/juzlogo.png')}/>
            </div>
        );
    }
}

HeaderPanel.propTypes = {
    imageSrc: PropTypes.string.isRequired,
};