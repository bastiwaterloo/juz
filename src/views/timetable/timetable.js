import React, {Component} from 'react';
import './timetable.css';

export default class Timetable extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="big-header">Unsere Öffnungszeiten:</h1>
                <div className="col-sm-24">
                    <div className="day-box col-sm-24">
                        <div className="col-sm-20"><h1>Montag</h1></div>
                        <div className="col-sm-4"><h1>15 - 20 Uhr</h1></div>
                    </div>
                    <div className="day-box col-sm-24">
                        <div className="col-sm-20"><h1>Dienstag</h1></div>
                        <div className="col-sm-4"><h1>15 - 20 Uhr</h1></div>
                    </div>
                    <div className="day-box col-sm-24">
                        <div className="col-sm-20"><h1>Mittwoch</h1></div>
                        <div className="col-sm-4"><h1>15 - 20 Uhr</h1></div>
                    </div>
                    <div className="day-box col-sm-24">
                        <div className="col-sm-20"><h1>Donnerstag</h1></div>
                        <div className="col-sm-4"><h1>15 - 20 Uhr</h1></div>
                    </div>
                    <div className="day-box col-sm-24">
                        <div className="col-sm-20"><h1>Freitag</h1></div>
                        <div className="col-sm-4"><h1>15 - 20 Uhr</h1></div>
                    </div>
                    <div className="day-box col-sm-24">
                        <div className="col-sm-20"><h1>Samstag</h1></div>
                        <div className="col-sm-4"><h1>15 - 20 Uhr</h1></div>
                    </div>
                    <div className="day-box col-sm-24">
                        <div className="col-sm-20"><h1>Sonntag</h1></div>
                        <div className="col-sm-4">
                            <h1>Geschlossen</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


