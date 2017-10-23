import React, {Component} from 'react';
import SearchService from './../../services/SearchService';
import SearchResults from './../SearchResults/SearchResults';
import './Search.css';

export default class Search extends Component {

    state = {
        text: "",
        watches: [],
        searching: false
    };

    timeout;

    searchService = new SearchService();

    handleChange = (value) => {
        if (value.length !== 0) {
            this.setState({text: value, searching: true}, () => {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.searchService.searchStringIdea(value, 5, (results) => {
                        this.setState({
                            watches: results,
                            searching: false,
                        });
                    }, (e) => console.log(e))
                }, 300);
            });
        } else {
            this.setState({
                text: value,
                watches: []
            });
        }
    };

    goToSearch = () => {
        let text = this.state.text;
        this.setState({text: "", watches: []});
        window.location = ('/Suche/' + text);
    };

    goToWatch = (producer, watchId) => {
        this.setState({text: "", watches: []}, () => {
            this.props.history.push('/Marken/' + producer + '/' + watchId);
        });
    };

    render() {
        return (
            <div className="search-container">
                <input type="text" className="form-control input-lg search-input"
                       placeholder="Finde deine Uhr" onChange={(e) => this.handleChange(e.target.value)}
                       value={ this.state.text }  onKeyPress={(event) => {
                           console.log(event);
                            if (event.key === "Enter") {
                                this.goToSearch()
                            }
                        }}/>
                <a href={ "/Suche/" + this.state.text } className="btn btn-info btn-lg search-button">
                    <span className="glyphicon glyphicon-search" />
                </a>
                <SearchResults watches={this.state.watches} goToWatch={ this.goToWatch } searching={this.state.searching} />
            </div>
        );

    }
}
