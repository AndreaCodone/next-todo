import React, { useState } from "react";
import styles from "./index.module.scss";

import credentials from "src/utils/credentials.js";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div>
          <h1 className={styles.title}>Login</h1>
        </div>
        <div>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button className={styles.button} type="submit">
          Accedi
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

// const [formData, setFormData] = useState({ username: "", password: "" });
// const [error, setError] = useState("");
// const { state, dispatch } = useAuth();

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const { username, password } = formData;

//   const foundUser = credentials.find(
//     (cred) => cred.username === username && cred.password === password
//   );

//   if (foundUser) {
//     setError("");
//     dispatch({ type: "LOGIN" });
//   } else {
//     setError("Invalid username or password");
//   }
// };
