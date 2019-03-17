const axios = require('axios');

const constants = require('./constants');

class Transport {
  constructor(token, repo) {
    this.token = token;
    this.repo = repo;
    this.axios = axios.create({
      baseURL: constants.API_BASE,
    });
  }

  post(url, body) {
    const requestBody = Object
      .assign({ token: this.token, repo: this.repo }, body);
    return this.axios.post(url, requestBody)
      .then(res => res.data);
  }
}

module.exports = Transport;
