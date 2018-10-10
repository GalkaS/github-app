import React from "react";
import PullRequest from "./PullRequest";

const PullRequestList = ({ pullRequests }) => (
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

export default PullRequestList;
