import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  if (!authContext) {
    return null;
  }

  const { login } = authContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
