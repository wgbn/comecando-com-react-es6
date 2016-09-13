var React = require('react');

var UserInfo = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height="140"/>
                    <h2>{this.props.user.login}</h2>
                    <p>{this.props.user.name}</p>
                    <p>Followers: {this.props.user.followers} / Following: {this.props.user.followiing}</p>
                    <p><a className="btn btn-default" href="{this.props.user.html_url}" role="button">View details</a></p>
                </div>
            </div>
        );
    }
});

module.exports = UserInfo;