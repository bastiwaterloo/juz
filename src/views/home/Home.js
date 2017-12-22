import React, {Component} from 'react';
import EventComponent from './../../components/EventComponent/EventComponent';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="green-headline">Hey, Willkommen im Juz!</h1>
                <div className="Dark-box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris orci, tempor sed faucibus quis, feugiat in libero. Phasellus pulvinar bibendum magna. Suspendisse ornare eros mattis, tempor nunc eget, posuere risus. Pellentesque dictum finibus magna sed suscipit. Nullam vehicula molestie urna, ac interdum libero porttitor ut. Suspendisse potenti. Pellentesque mollis sit amet orci a dignissim. Phasellus dignissim, velit eget volutpat vulputate, nibh erat commodo nibh, et euismod diam quam in nunc. Maecenas faucibus rutrum posuere.</p>
                </div>
                <div>
                    <h1 className="green-headline">Die nächsten Veranstaltungen</h1>
                    <EventComponent />
                </div>
            </div>
        );


    }
}


export default Home;