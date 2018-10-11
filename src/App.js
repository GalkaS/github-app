import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login.js";
import Profile from "./Profile.js";
import "./styles.css";
import ForksList from "./ForksList";
import PullRequestList from "./PullRequestList";

import { fetchEvents } from "./actions/events";
import { fetchProfile } from "./actions/profile";
import {
  handleChangeUsername,
  handleChangeFirstName,
  handleLogin
} from "./actions/login";
import { handleLogOut } from "./actions/logout";

class App extends Component {
  componentDidUpdate(prevProps) {}

  render() {
    return (
      <div className="App">
        {this.props.loggedIn ? (
          <React.Fragment>
            <Profile
              handleLogOut={this.props.handleLogOut}
              login={this.props.username}
              avatar_url={this.props.profile.avatar_url}
            />
            <ForksList forks={this.props.forks} />
            <PullRequestList pullRequests={this.props.pullRequests} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>Github App</p>
            <img
              src="https://cdn.svgporn.com/logos/github-octocat.svg"
              alt="Octocat logo"
            />
            <Login
              handleChangeUsername={this.props.handleChangeUsername}
              handleChangeFirstName={this.props.handleChangeFirstName}
              handleClick={username => {
                this.props.handleLogin();
                this.props.fetchEvents(username);
                this.props.fetchProfile(username);
              }}
              username={this.props.username}
              firstName={this.props.firstName}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  handleChangeUsername,
  handleChangeFirstName,
  handleLogin,
  handleLogOut,
  fetchEvents,
  fetchProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
