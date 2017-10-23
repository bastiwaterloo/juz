import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SectionHeading.css';

export default class SectionHeading extends Component {
    render() {
        return (
            <div className="SectionHeading">
                <h1 className="SectionHeading-heading">{this.props.heading}
                    <div className="SectionHeading-cube"></div>
                </h1>
            </div>
        );
    }
}

SectionHeading.propTypes = {
    heading: PropTypes.string.isRequired,
};