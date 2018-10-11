import React from "react";
import PullRequest from "./PullRequest";

const PullRequestList = ({ pullRequests }) => {
  if (pullRequests.length === 0) {
    return (
      <React.Fragment>
        <h2 className="sectionTitle">Your pull requests:</h2>
        <p className="no-info-message">
          Sorry, you don't have any pull requests!
        </p>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <h2 className="sectionTitle">Your pull requests:</h2>
      <ul>
        {pullRequests.map((pullRequest, index) => (
          <PullRequest
            key={`pullRequest-${index}`}
            url={pullRequest.url}
            title={pullRequest.title}
            status={pullRequest.status}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default PullRequestList;
