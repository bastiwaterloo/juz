import SharedConstants from './../constants/SharedConstants';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class LexiconService {

    //API GET Methods
    articles = () => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "lexicon/articles") // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        })
    };

    article = (id) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "lexicon/articles/" + id) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        })
    };

    //API POST METHODS
    saveArticle = (article) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "lexicon/articles?apiKey=" + SharedConstants.API_KEY, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(article)
            }) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    resolve(response);
                })
                .catch(reject);
        });

    };


    //API DELETE METHODS
    deleteArticle = (articleId) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "lexicon/articles/" + articleId + "?apiKey=" + SharedConstants.API_KEY, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
            }) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    resolve(response);
                })
                .catch(reject);
        });

    };


    deleteImage = (id, articleID, callback, error) => {
        fetch(SharedConstants.API_STRING_UPLOADER + "test.png?path=lexiconarticles/schon-wieder-ein-test", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",

        })
            .then((response) => {
                callback(response)
            })
            .catch(error)
    }


}