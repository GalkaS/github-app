const handleForks = forks => ({
  type: "FORKS",
  payload: forks
});

const handlePullRequests = pullRequests => ({
  type: "PULL_REQUESTS",
  payload: pullRequests
});

export const fetchEvents = username => dispatch => {
  return fetch(`https://api.github.com/users/${username}/events`)
    .then(res => res.json())
    .then(events => {
      // Get all the forked repos
      const forks = events.filter(event => event.type === "ForkEvent");
      // Get all the pull requests
      const allPullRequests = events.filter(
        event => event.type === "PullRequestEvent"
      );
      // Extract only the necessary pull request info
      const pullRequestInfo = allPullRequests.map(pr => {
        let status = pr.payload.pull_request.state;
        // if a pr was merged, overwrite the status to "merged"
        // (statuses are displayed in the closed-merged-opened order
        // so the latest pull request status will always be closed)
        // because the events are displayed in reversed order (the newest are first).
        // To get the 'merged' status displayed I'm chechking if the pull
        // request was merged and if yes then overwrite the status with 'merged'
        if (pr.payload.pull_request.merged) {
          status = "merged";
        }
        // if the pr wasn't merged yet, keep the same status
        return {
          title: pr.payload.pull_request.title,
          url: pr.payload.pull_request.html_url,
          status: status
        };
      });
      // segregate pull requests to keep only one PR with the latest updated status
      // Fetched PRs are duplicated because of the opened and closed statuses
      const uniquePullRequests = pullRequestInfo.reduce((acc, pr) => {
        if (!acc[pr.url]) {
          acc[pr.url] = pr;
        }
        return acc;
      }, {});
      // turn the uniquePullRequests object to an array
      const finalPullRequest = Object.values(uniquePullRequests);
      dispatch(handleForks(forks));
      dispatch(handlePullRequests(finalPullRequest));
    });
};
