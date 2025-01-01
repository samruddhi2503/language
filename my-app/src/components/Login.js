import React from 'react';

const Login = ({ closeLogin }) => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br></br>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required /><br></br>
        <br></br>
        
        <button type="submit">Sign In</button>
      </form>
      <button onClick={closeLogin}>Close</button> {/* Close the modal */}
    </div>
  );
};

export default Login;
