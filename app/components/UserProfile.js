import React from 'react';
import ReposList from './ReposList';

const UserProfile = ({ user, repos }) => {
    var userProfile = user ? 
    (
        <div className="row">
            <div className="col-lg-4">
                <img className="img-circle" src={user.avatar_url} alt="avatar" width="140" height="140" />
                <h2>{user.login}</h2>
                <p>{user.name}</p>
                <p>Followers: {user.followers} / Following: {user.following}</p>
                <p><a className="btn btn-default" href={user.html_url} role="button">View details</a></p>
            </div>
            <div className="col-lg-8">
                <ReposList repos={repos}/>
            </div>
        </div>
    ) : null;
            
    return userProfile;
}

UserProfile.propTypes = {
    user: React.PropTypes.object,
    repos: React.PropTypes.array
};

module.exports = UserProfile;