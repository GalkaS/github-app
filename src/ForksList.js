import React from "react";
import Fork from "./Fork"

const ForksList = ({forks}) => (
	<React.Fragment>
		<h2>Your forked repos</h2>
		<ul>
		{forks.map((fork) => (
			<Fork name={fork.repo.name} />
		))}
		</ul>
	</React.Fragment>
)

export default ForksList;