import React, {Component} from 'react';
import activitys from './../../constants/activity';
import './haus.css';

export default class Haus extends Component {


    renderActivitys = () => {
        let actives = [];
        console.log(activitys);
        activitys.forEach((activity) =>{
            actives.push(
                <div className="col-sm-8">
                    <div className="image-container">
                        <a className="activity-link">
                            <img src={require('./../../../assets/img/' + activity.imgName + '.jpg')} className="col-sm-24 image" alt={activity.name}/>
                            <h1 className="text-overlay">{activity.name}</h1>
                        </a>

                    </div>
                </div>
            )
        })
        return actives;
    }




    render() {
        return (
            <div className="container">
                <h1>Was gibt es hier zu tun?</h1>
                <div className="row">
                {
                    this.renderActivitys()
                }
                </div>
            </div>
        );









    }
}


