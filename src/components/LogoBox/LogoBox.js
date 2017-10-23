import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './LogoBox.css';

export default class LogoBox extends Component {

    render() {
        return (
                <a title={this.props.brand.name} href={"/Marken/" + this.props.brand.id} className="LogoBox-logo" >
                    <img className="LogoBox-logo" src={this.props.brand.imgPath} alt={this.props.brand.name}/>
                </a>

        );
    }
}

LogoBox.propTypes = {
    brand: PropTypes.object.isRequired
};