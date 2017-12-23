import './ContactContent.css';
import React, {Component} from 'react';



export default class ContactContent extends Component {

    render(){
        return(

            <div className="col-sm-18 col-sm-offset-3 content-outer">
                <div className="col-sm-18 col-sm-offset-3 line">
                    <div className="col-md-6 col-sm-offset-4 test">
                        <h2 className="test-text">Wo findet ihr uns?</h2>
                        <div className="subpoint-text-container">
                            <h4 className="test-text line-big">Jugendzentrum Gauting</h4>
                            <h4 className="test-text line-big">Bahnhofstraße 6</h4>
                            <h4 className="test-text line-big">82131 Gauting</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-offset-4 test">
                        <h2 className="test-text">Wie erreicht ihr uns?</h2>
                        <div className="subpoint-text-container">
                            <h4 className="test-text line-big"><span className="glyphicon glyphicon-earphone phone"/>089 - 850 33 06</h4>
                            <h4 className="test-text line-big"><span className="glyphicon glyphicon-envelope phone"/>info@juz-gauting.de</h4>
                        </div>
                    </div>
                </div>
                <div className="col-sm-18 col-sm-offset-3 way-box-outer">
                    <h2 className="test-text way-header">Wegbeschreibung</h2>
                    <div className="col-sm-6 way-box">
                        <h3 className="test-text line-extra-big">Mit der Sbahn:</h3>
                        <p className="test-text line-extra-big">S6 Richtung Tutzing bis Gauting, Die Bahnhofstrasse ca. 400m runter, dann ist es da zur Linken gleich gelegen.</p>
                    </div>
                    <div className="col-sm-6 way-box">
                        <h3 className="test-text line-extra-big">Mit dem Auto aus Starnberg:</h3>
                        <p className="test-text line-extra-big">In Gauting am Hauptplatz, an der grossen Ampelkreuzung links, nach ca 50m ist das JUZ rechts gelegen.</p>
                    </div>
                    <div className="col-sm-6 way-box">
                        <h3 className="test-text line-extra-big">Mit dem Auto aus: München</h3>
                        <p className="test-text line-extra-big">Richtung STA halten, am Hauptplatz Berg hoch, nach ca 50m ist das JUZ rechts gelegen.</p>
                    </div>
                    <div className="col-sm-6 way-box">
                        <h3 className="test-text line-extra-big">Mit dem Auto aus Germering:</h3>
                        <p className="test-text line-extra-big">Germeringer Strasse nach Gauting einwärts, am Stop-Schild links, unter der Bahnstrecke durch, die Bahnhofstrasse bergab, nach ca. 400m ist das JUZ links gelegen.</p>
                    </div>

                </div>
            </div>
        )
    }
}