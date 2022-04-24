import "./styles.css";
import { useState } from "react";
import Validation from "./validation";
export default function App() {
  const intialValue = {
    username: "",
    email: "",
    password: ""
  };
  const [formValues, setFormValue] = useState(intialValue);
  const [formEroor, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValue({ ...formValues, [name]: value });
    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(Validation(formValues));
    setIsSubmit(true);
  };
  return (
    <>
      <div className="container">
        {Object.keys(formEroor).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
        <form onSubmit={handleSubmit}>
          <h1> Login Form </h1>
          <div className="ui_form">
            <div className="ui_field">
              <lable>Username</lable>
              <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formEroor.username}</p>
            <div className="ui_field">
              <lable>email</lable>
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formEroor.email}</p>
            <div className="ui_field">
              <lable>password</lable>
              <input
                type="text"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p>{formEroor.password}</p>
              <button> Submit </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
