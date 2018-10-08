import React from "react";


const statusColor = (status) => {
  if (status === 'open'){
      return 'green'
  } else if (status === 'merged'){
      return 'blue'
  } else if (status === 'closed') {
      return 'red'
  }
      return 'black'
}

const PullRequest = ({title, url, status}) => (
	<div className="list">
		<li>
			<p>
				<a href={url}>{title}</a>
				<p>status - <span className={statusColor(status)}>{status}</span></p>
			</p>
		</li>
	</div>
)

export default PullRequest;