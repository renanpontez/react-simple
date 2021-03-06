var React = require('react');

var ReposList = React.createClass({
    getInitialState: function(){
        return {
            reposCount: 0,
        }
    },
    componentWillReceiveProps: function(props){
        this.setState({reposCount: props.repos.length});
    },
    render: function(){
        const { repos } = this.props;
        const reposList = repos.map(function(repo, key){
            return (
                <div key={key} className="thumbnail">
                    <div className="caption">
                        <h3>{repo.name}
                        <span className="badge">{repo.stargazers_count} STARS</span>
                        </h3>
                        <p>{repo.description}</p>
                        <p>
                        <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
                        <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues ({repo.open_issues}) </a>
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <h1>{this.state.reposCount}</h1>
                {reposList}
            </div>
        );
    }
});

ReposList.propTypes = {
    repos: React.PropTypes.array
};

module.exports = ReposList;