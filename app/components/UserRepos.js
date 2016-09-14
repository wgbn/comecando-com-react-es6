import React from 'react';

class UserRepos extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            reposCount: 0
        };
    }

    componentWillReceiveProps ({ repos }) {
        this.setState({reposCount: repos.length})
    }

    render () {
        let { repos } = this.props;
        let reposList = repos.map( (repo, key) => {
            return (
                <div key={key} className="thumbnail">
                    <div className="caption">
                        <h3>{repo.name} <span className="badge">{repo.stargazers_count} STARS</span></h3>
                        <p>{repo.description}</p>
                        <p>
                            <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a> &nbsp;
                            <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues <span className="badge">{repo.open_issues_count}</span></a>
                        </p>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <h2>{this.state.reposCount} repositories</h2>
                {reposList}
            </div>
        );
    }
}

export default UserRepos;