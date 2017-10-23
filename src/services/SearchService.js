import watches from './../../assets/mocks/watches.json';
import SharedConstants from './../constants/SharedConstants';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class SearchService {


    getWatchesByTitleContains = (filterString, maxCount = 10, callback) => {
        let filteredWatches = [];
        watches.forEach((watch) => {
            if (watch.title.toLowerCase().indexOf(filterString.toLowerCase()) > -1) {
                filteredWatches.push(watch);
            }
        });
        filteredWatches = filteredWatches.slice(0, maxCount);
        callback(filteredWatches);
    }

    searchString = (searchString, limit) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "search/?query=" + searchString + "&limit=" + limit) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });

    };

    searchStringIdea = (searchString, limit, callback, error) => {

            fetch(SharedConstants.API_STRING + "search/?query=" + searchString + "&limit=" + limit) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    callback(data);
                })
                .catch(error);


    };

}
export default SearchService;

