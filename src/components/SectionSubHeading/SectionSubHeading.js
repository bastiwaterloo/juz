import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SectionSubHeading.css';

export default class SectionHeading extends Component {
    render() {
        return (
            <div className="SectionSubHeading">
                <h2 className="SectionSubHeading-heading">{this.props.heading}
                    <div className="SectionSubHeading-cube" />
                </h2>
            </div>
        );
    }
}

SectionHeading.propTypes = {
    heading: PropTypes.string.isRequired,
};