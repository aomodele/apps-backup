import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Simulates login success
  };

  return (
    <div className="login-page">
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div className="app-embed">
          <iframe
            src="https://apps.powerapps.com/play/ceb9f3dd-54d9-4ad0-9926-91a07636e761
"
            title="Power Apps Embed"
            style={{
              width: "80%",
              height: "80%",
              border: "none",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
