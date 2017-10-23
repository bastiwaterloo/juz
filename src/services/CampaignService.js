import SharedConstants from '../constants/SharedConstants';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class CampaignService {

    //API GET Methods

    campaigns = () => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "deals?loadFields=LoadDealArticles")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch(reject);
        });

    };

    campaign = (id) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "deals/" + id + "?loadFields=LoadDealArticles") // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch(function (e) {
                    console.log(e);
                });
        });

    };

    newCampaign = (aktion) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "deals?apiKey=" + SharedConstants.API_KEY, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(aktion)
            }) // Call the fetch function passing the url of the API as a parameter
                .then((response) => {
                    resolve(response);
                })
                .catch(reject);
        });
    };

    deleteCampaign = (campaignId) => {
        return new Promise((resolve, reject) => {
            fetch(SharedConstants.API_STRING + "deals/" + campaignId + "?apiKey=" + SharedConstants.API_KEY, {
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
        })

    };
}