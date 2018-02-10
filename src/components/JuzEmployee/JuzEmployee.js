import './JuzEmployee.css'
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import db from './../../services/Connector';
import emp from './../../constants/Team';
var  connector = new db();
export default class JuzEmployee extends Component{

    state = {
        data: ""
    }

    componentWillMount(){
        connector.getService('team', (retVal) => {
            this.setState({
                data: retVal
            })
        })

        console.log(this.state.data);
    }






    renderImage=()=>{
        if(this.props.img !== "" && this.props.img !== null && typeof this.props.img !== 'undefined'){
            return  <img src={require('./../../../assets/img/' + this.props.img)} alt={this.props.name} id="emp-img"/>
        } else {
            return  <img id="emp-img" src={require('./../../../assets/img/coming_soon.png')} alt={this.props.name}/>
        }
    }

    render() {
        return (
            <div className="col-md-11 col-sm-24 wrapper">
                <div className="col-sm-6">
                    {
                        this.renderImage()
                    }
                </div>
                <div id="emp-text" className="col-sm-18">
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.position}</h4>
                </div>
            </div>
        )
    }
}


JuzEmployee.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
    position: PropTypes.string.isRequired
};