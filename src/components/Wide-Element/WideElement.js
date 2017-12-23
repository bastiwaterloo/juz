import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './WideElement.css';


export default class WideElement extends Component {

    render(){
        return(
            <div className="col-sm-7">
                <img src={require('./../../../assets/img/' + this.props.imgName + '.jpg')} className="image" alt={this.props.imgName}/>
            </div>
            )
    }
}

WideElement.propTypes = {
    imgName: PropTypes.string.isRequired
};


