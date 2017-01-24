var axios = require('axios');



var GithubUser = {
    getByUsername(username){
        return axios.get(`https://api.github.com/users/${username}`);
    },
    getReposByUsername(username){
        return axios.get(`https://api.github.com/users/${username}/repos`);
    }

}

export default GithubUser;