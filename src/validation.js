function Validation(value) {
  const error = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!value.username) {
    error.username = "UserName is Required";
  }
  if (!value.email) {
    error.email = "Email is Required";
  } else if (!regex.test(value.email)) {
    error.email = "this not valid email";
  }
  if (!value.password) {
    error.password = "Password is required";
  } else if (value.password.length < 4) {
    error.password = "Password must be more than 4 characters";
  } else if (value.password.length > 10) {
    error.password = "Password cannot exceed more than 10 characters";
  }

  return error;
}
export default Validation;
