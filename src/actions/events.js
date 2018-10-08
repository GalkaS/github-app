const handleEvents = events => ({
	type: "EVENTS",
	payload: events,
})

export const fetchEvents = username => dispatch => {
    return fetch(`https://api.github.com/users/${username}/events`)
    .then(res => res.json())
    .then(events => dispatch(handleEvents(events)))
};

// const handlePullRequests = pullRequests => ({
// 	type: "PULL_REQUESTS",
// 	payload: pullRequests,
// })


// export const fetchPullRequests = username => dispatch => {
// 	return fetch(`https://api.github.com/repos/${username}/${title}/pulls`)
// 	.then(res => res.json())
// 	.then(pullRequests => dispatch(handlePullRequests(pullRequests)))
// }