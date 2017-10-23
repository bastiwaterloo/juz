import SharedConstants from '../constants/SharedConstants';
require('es6-promise').polyfill();
require('isomorphic-fetch');


export default class BlacklistService {

    addToBlacklist = (string, callback, error) => {

            fetch(SharedConstants.API_STRING + "blacklist/" + string + "?apiKey=" + SharedConstants.API_KEY, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(string)
            }) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    callback(response);
                })
                .catch(error);

    };


    blacklistStrings = () => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "blacklist/all") // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });
    }

    blacklistStringsCallback = (callback, error) => {
            fetch(SharedConstants.API_STRING + "blacklist/all") // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    callback(data);
                })
                .catch(error);
    }

    deleteBlacklistItem = (string) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "blacklist/" + string + "?apiKey=" + SharedConstants.API_KEY, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(string)
            }) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    resolve(response);
                })
                .catch(reject);
        });

    }

    deleteBlacklistItemCallback = (string, callback, error) => {
            fetch(SharedConstants.API_STRING + "blacklist/" + string + "?apiKey=" + SharedConstants.API_KEY, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(string)
            }) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    callback(response);
                })
                .catch(error);
    }

}