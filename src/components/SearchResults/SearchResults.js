import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';

export default class SearchResults extends Component {


    renderWatchTitle = (title) => {
        title = title.replace(/&nbsp;/g, " ");
        if(title.length > 100){
            return title.substr(0, 100) + "...";
        } else {
            return title;
        }
    };

    getWatches = () => {
        let items = [];
        if (this.props.watches.length !== 0) {
            this.props.watches.forEach((watch) => {
                items.push(
                    <a href={"/Marken/" + watch.brandId + "/" + watch.id} key={ watch.id }>
                        <div className="search-result-item" >
                            <div className="search-result-item-image-container">
                                <img src={ watch.imageUrl } className="search-result-item-image" alt={ watch.title }/>
                            </div>
                            <div className="search-result-item-text-container">
                                <p className="search-result-item-text">
                                    {
                                        this.renderWatchTitle(watch.title)
                                    }
                                </p>
                            </div>
                        </div>
                    </a>
                )
            });
        }
        return items;
    };

    renderSearching = () => {
        return (
            <div className="searching-container">
                <p><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate" /> Wir suchen deine Uhr...</p>
            </div>
        )
    };

    renderSearchResults = () => {
        if(this.props.searching){
            return this.renderSearching();
        } else {
            return this.getWatches()
        }
    };

    render() {
        return (
            <div className="search-result-container">
                {
                    this.renderSearchResults()
                }
            </div>
        );

    }
}

SearchResults.propTypes = {
    watches: PropTypes.array.isRequired,
};

