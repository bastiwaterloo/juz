import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AdBox.css';

export default class AdBox extends Component {

    render() {
        return (
            <div className="AdBox">
                <a href={ this.props.link } title={ this.props.linkTitle }>
                    <div className="AdBox-imageContainer">
                        <img className="AdBox-image" src={this.props.imgSrc} alt="" />
                    </div>
                </a>
            </div>
        );
    }
}

AdBox.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired,
};