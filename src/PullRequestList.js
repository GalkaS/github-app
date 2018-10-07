import React from "react";
import PullRequest from "./PullRequest"

const PullRequestList = ({pullRequests}) => (
	<React.Fragment>
		<h2 className="sectionTitle">Your pull requests:</h2>
		<ul>
			{pullRequests.map((pullRequest) => (
				<PullRequest
				url={pullRequest.payload.pull_request.html_url}
				title={pullRequest.payload.pull_request.title}
				state={pullRequest.payload.pull_request.state}
				/>
				))}
		</ul>
	</React.Fragment>
	)

export default PullRequestList;