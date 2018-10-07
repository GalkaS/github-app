const handleProfile = profile => ({
	type: "PROFILE",
	payload: profile,
})

export const fetchProfile = username => dispatch => {
    return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(profile => {
    	dispatch(handleProfile(profile))
    })
};

