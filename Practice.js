import React, { useState } from "react";


const Practice = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const validatePassword = (password) => {
    // minimum length of 8 characters and must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return pattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validatePassword(password);
    if (!isValid) {
      setError("Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.");
    } else {
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Practice;