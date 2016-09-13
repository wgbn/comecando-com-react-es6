var axios = require('axios');

var GitHubUser = {
    getByUsername: (username) => axios.get('https://api.github.com/users/' + username),
    getReposByUsername: (username) => axios.get('https://api.github.com/users/' + username + '/repos')
};

module.exports = GitHubUser;