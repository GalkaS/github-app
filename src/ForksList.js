import React from "react";
import Fork from "./Fork";

const ForksList = ({ forks }) => {
  if (forks.length === 0) {
    return (
      <React.Fragment>
        <h2 className="sectionTitle">Your forked repos:</h2>
        <p className="no-info-message">
          Sorry, you don't have any forked repos!
        </p>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <h2 className="sectionTitle">Your forked repos:</h2>
      <ul>
        {forks.map((fork, index) => (
          <Fork
            key={`fork-${index}`}
            name={fork.repo.name}
            forkUrl={fork.payload.forkee.html_url}
            originalUrl={`https://github.com/${fork.repo.name}`}
            forkName={fork.payload.forkee.full_name}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ForksList;
