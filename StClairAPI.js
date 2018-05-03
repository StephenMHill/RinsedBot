function StClairAPI(apiKey) {
  // Set up constants
  const BASE_URL = "https://stclairmad.ca/api/v1/";
  const request = require('request');

  this.apiKey = apiKey;

  /** 
   * Gets the current news from St. Clair MAD
  */
  this.getCurrentNews = function(callback) {
    // get the url
    let url = BASE_URL + "news";
    let options = {
      "url": url,
      "headers": {
        "Authorization": this.apiKey
      }
    };
    // set up the headers and stuff
    return request(options, callback);
  };

  /**
   * Gets the current events
   * @param {*} callback 
   */
  this.getCurrentEvents = function(callback) {
    // get the url
    let url = BASE_URL + "events";
    let options = {
      "url": url,
      "headers": {
        "Authorization": this.apiKey
      }
    };
    // set up the headers and stuff
    return request(options, callback);
  }
}

module.exports = StClairAPI;