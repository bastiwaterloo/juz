import SharedConstants from './../constants/SharedConstants';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class BrandService {

    brands = (count = 20, orderBy, articelSort) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "brands/plus?limit=" + count) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        })
    };

    brand = (id) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "brands/" + id) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);

                })
                .catch(reject);
        })
    };

    articles = (brandId, count = 20, since, until, orderBy, page) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "articles/" + brandId + "/" + page +  "?limit=" + count) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        })
    };

    saveBrand = (brand) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "brands/?apiKey=" + SharedConstants.API_KEY, {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'


                },
                method: "POST",
                body: JSON.stringify(brand)
            }) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    resolve(response);
                })
                .catch(reject);
        });

    };

    //API GET Methods
    deleteBrand = (brandId) => {
            fetch(SharedConstants.API_STRING + "brands/" + brandId + "?apiKey=" + SharedConstants.API_KEY, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
            }); // Call the fetch function passing the url of the API as a parameter

    };

}