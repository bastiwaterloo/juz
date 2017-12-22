import React, {Component} from 'react';
import months from './../../constants/calendar';
import programm from './../../constants/Programm';
import './kidsprogramm.css';

export default class Kidsprogramm extends Component {



    getmonthString = () => {
        let month = new Date().getMonth() + 1;
        let monthString = "";
        months.forEach((monat) => {
           if(monat.id === month){
               monthString = monat.name;
           }
        });
        return monthString;
    };

    getMonthInt = () => {
        return  new Date().getMonth() + 1;
    };

    renderProgrammForMonts = (month) => {
        let programmElements = [];
        programm.forEach((proPoint) => {
            debugger;
            let monthParsed = proPoint.date.substr(3,2);
           if(monthParsed == month){
               programmElements.push(
                   <div className="event-elements col-sm-22 col-sm-offset-1" key={proPoint.name}>
                       <div className="col-sm-24 glas"></div>
                       <div className="foreground col-sm-8 left">
                           <h1>{proPoint.name}</h1>
                       </div>
                       <div className="foreground col-sm-8 center">
                           <h1>Datum:</h1>
                           <h1>{proPoint.date}</h1>
                       </div>
                       <div className="foreground col-sm-8 right">
                           <h1>Beschreibung:</h1>
                       </div>
                   </div>
               )
           }
        })
        return programmElements;
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-24">
                    <h1>Das Programm für {this.getmonthString()}:</h1>
                    {
                        this.renderProgrammForMonts(this.getMonthInt())
                    }
                </div>
            </div>
        );
    }
}


