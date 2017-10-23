import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './FooterHeading.css';

export default class FooterHeading extends Component {
    render() {
        return (
            <div className="FooterHeading">
                <h3 className="FooterHeading-heading">{this.props.heading}
                    <div className="FooterHeading-cube"></div>
                </h3>
            </div>
        );
    }
}

FooterHeading.propTypes = {
    heading: PropTypes.string.isRequired,
}