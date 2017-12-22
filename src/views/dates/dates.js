import React, {Component} from 'react';
import eventList from './../../constants/events';
import './dates.css';

export default class Dates extends Component {

    renderEvents = () => {
        let eventsOut = [];
        eventList.forEach((event) => {
            eventsOut.push(
               <div className="event-elements col-sm-22 col-sm-offset-1" key={event.name}>
                   <div className="col-sm-24 glas"></div>
                   <div className="foreground col-sm-8 left">
                       <h1>{event.name}</h1>
                   </div>
                   <div className="foreground col-sm-8 center">
                       <h1>Datum:</h1>
                       <h1>{event.date}</h1>
                   </div>
                   <div className="foreground col-sm-8 right">
                       <h1>Beschreibung:</h1>
                   </div>
               </div>
            )
        })
        return eventsOut;
    }

    render() {
        return (
            <div className="container">
                <h1>Anstehende eventes</h1>
                {
                    this.renderEvents()
                }
            </div>
        );
    }
}


