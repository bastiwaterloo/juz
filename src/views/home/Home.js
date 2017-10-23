import React, {Component} from 'react';
import WatchPanel from '../../components/WatchPanel/WatchPanel';
import ArticlesService from './../../services/ArticlesService';



import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="container juz-background">
                <img src={ require("./../../../assets/img/wrapper.png") }/>
            </div>
        );
    }
}

export default Home;