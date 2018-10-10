const handleForks = forks => ({
	type: "FORKS",
	payload: forks,
})

const handlePullRequests = pullRequests => ({
	type: "PULL_REQUESTS",
	payload: pullRequests,
})

export const fetchEvents = username => dispatch => {
    return fetch(`https://api.github.com/users/${username}/events`)
    .then(res => res.json())
    .then(events => {
    	// Get all the forked repos
    	const forks=events.filter((event) => event.type === 'ForkEvent')
    	// Get all the pull requests
    	const allPullRequests=events.filter((event) => event.type === 'PullRequestEvent')
    	// Extract only the necessary pull request info 
    	const pullRequestInfo=allPullRequests.map((pr) => {
    		let status = pr.payload.pull_request.state;
    		// if a pr was merged, overwrite the status to "merged"
    		if(pr.payload.pull_request.merged) {
    			status = "merged"
    		}
    		// if the pr wasn't merged yet, keep the same status
    		return {
    			title: pr.payload.pull_request.title,
    			url: pr.payload.pull_request.html_url,
    			status: status,
    		}
    	})
    	// segregate pull requests to keep only one PR with the latest updated status (opened/closed)
    	const uniquePullRequests=pullRequestInfo.reduce((acc, pr) => {
    		if(!acc[pr.url]) {
    			acc[pr.url]=pr
    		}
    		return acc;
    	}, {})
    	// turn the uniquePullRequests object to an array 
    	const finalPullRequest=Object.values(uniquePullRequests)
    	dispatch(handleForks(forks))
    	dispatch(handlePullRequests(finalPullRequest))
    })
};