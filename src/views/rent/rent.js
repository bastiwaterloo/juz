import React, {Component} from 'react';
import rent from './../../constants/rentals';
import './rent.css';

export default class Rent extends Component {

    state = {
        detail1: false,
        detail2: false,
        detail3: false
    }


    toggleDetail = (detailName) => {
        if(detailName === "cafe"){
            this.setState({
                detail1: !this.state.detail1,
            })
        } else if (detailName === "disco"){
            this.setState({
                detail2: !this.state.detail2,
            })
        } else {
            this.setState({
                detail3: !this.state.detail3,
            })
        }
    }

    showDetails1 = () => {
        let details = [];
        if(this.state.detail1){
            details.push(
                <div className="details">
                    <ul>
                        {
                            this.renderDetails(1)
                        }
                    </ul>
                </div>
            )
        }
        return details;
    }

    showDetails2 = () => {
        let details = [];
        if(this.state.detail2){
            details.push(
                <div  className="details">
                    <ul>
                        {
                            this.renderDetails(2)
                        }
                    </ul>
                </div>
            )
        }
        return details;
    }

    showDetails3 = () => {
        let details = [];
        if(this.state.detail3){
            details.push(
                <div  className="details">
                    <ul>
                        {
                            this.renderDetails(3)
                        }
                    </ul>
                </div>
            )
        }
        return details;
    }

    renderDetails = (selector) => {
        let details = [];
        if(selector === 1){
            rent[0].details.forEach((detail) => {
                debugger;
                details.push(
                    <li>{detail}</li>
                )
            })
        } else if(selector === 2){
            rent[1].details.forEach((detail) => {
                debugger;
                details.push(
                    <li>{detail}</li>
                )
            })
        } else {
            rent[2].details.forEach((detail) => {
                debugger;
                details.push(
                    <li>{detail}</li>
                )
            })
        }
        return details;
    }


    render() {
        return (
            <div className="container">
                <h1>Willst du das Juz Mieten?</h1>
                <h3>Hier bekommst du ein paar Informationen</h3>
                <div className="col-sm-24">
                    <div onClick={this.toggleDetail.bind(this, "cafe")} className="header">
                        <div className="header">
                            <h1>Cafe</h1>
                        </div>
                        {
                            this.showDetails1()
                        }
                    </div>
                    <div onClick={this.toggleDetail.bind(this, "disco")}>
                        <div className="header">
                            <h1>Disco</h1>
                        </div>
                        {
                            this.showDetails2()
                        }
                    </div>
                    <div onClick={this.toggleDetail.bind(this, "agb")} className="header">
                        <div className="header">
                            <h1>Wer kann mieten?</h1>
                        </div>
                        {
                            this.showDetails3()
                        }
                    </div>
                </div>
            </div>
        );
    }
}


