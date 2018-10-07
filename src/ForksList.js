import React from "react";
import Fork from "./Fork"

const ForksList = ({forks}) => (
	<React.Fragment>
		<h2 className="sectionTitle">Your forked repos:</h2>
		<ul>
		{forks.map((fork) => (
			<Fork name={fork.repo.name}
						forkUrl={fork.payload.forkee.html_url}
						originalUrl={`https://github.com/${fork.repo.name}`}
						forkName={fork.payload.forkee.full_name}

			/>
		))}
		</ul>
	</React.Fragment>
)

export default ForksList;