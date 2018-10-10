import React from "react";

const Fork = ({ name, originalUrl, forkUrl, forkName }) => (
  <div className="list">
    <li key={name}>
      <p>
        {" "}
        Base repo - <a href={originalUrl}>{name}</a>
      </p>
      <p>
        Forked repo - <a href={forkUrl}>{forkName}</a>
      </p>
    </li>
  </div>
);

export default Fork;
