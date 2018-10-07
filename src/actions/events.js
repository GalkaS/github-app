const handleEvents = events => ({
	type: "EVENTS",
	payload: events,
})

export const fetchEvents = username => dispatch => {
    return fetch(`https://api.github.com/users/${username}/events`)
    .then(res => res.json())
    .then(events => dispatch(handleEvents(events)))
};