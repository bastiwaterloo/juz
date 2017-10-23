import SharedConstants from '../constants/SharedConstants';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class ArticlesService {

    //API GET Methods
    articles = (count = 20, since = new Date(0), until = new Date(), orderBy = "discount", orderDirection = "asc") => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "articles?limit=" + count + "&sort=" + orderBy + "&order=" + orderDirection) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        })
    };

    articlesWithPage = (count = 20, since = new Date(0), until = new Date(), orderBy = "discount", page = 1) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "articles/page/" + page + "?limit=" + count + "&sort=" + orderBy + "&order=descending") // Call the fetch function passing the url of the API as a parameter
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
        return new Promise((resolve,reject) =>{
            fetch(SharedConstants.API_STRING + "articles/" + id + "?apiKey=" + SharedConstants.API_KEY ) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
            })
                .catch(reject);
        })
    };

    articleDetails = (id) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "articles/" + id + "?apiKey=" + SharedConstants.API_KEY) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        })
    };

    //Update Uvp
    updateUvp = (article, callback, error) =>{
        fetch(SharedConstants.API_STRING + "articles/" +article.id+ "?uvp=" +article.uvp+  "&apiKey=" + SharedConstants.API_KEY, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(article)
        }) // Call the fetch function passing the url of the API as a parameter
            .then((response) => {
                callback(response);
            })
            .catch(error);
    }
}