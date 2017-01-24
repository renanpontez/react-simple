var React = require('react');
var GithubUser = require('../services/GithubUser');

var SearchUser = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        var username = this.refs.username.value;
        
        GithubUser.getByUsername(username).then(function(response){
            this.props.updateUser(response.data);
        }.bind(this));
        
        GithubUser.getReposByUsername(username).then(function(response){
            this.props.updateRepos(response.data);
        }.bind(this));
    },
    render: function() {
        return (
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                        type="text"
                        ref="username"
                        className="form-control"
                        placeholder="Ex: matheusml"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">Buscar
                    </button>
                    </form>
                </div>
            </div>
        );
    }
});

SearchUser.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired
};

module.exports = SearchUser;