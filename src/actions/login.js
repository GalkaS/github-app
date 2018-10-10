export const handleChangeUsername = e => ({
  type: "CHANGE_USERNAME",
  payload: e.target.value
});

export const handleChangeFirstName = e => ({
  type: "CHANGE_FIRST_NAME",
  payload: e.target.value
});

export const handleLogin = () => ({
  type: "LOGIN"
});
