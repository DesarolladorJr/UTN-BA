import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3003/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Login successful");
        setLoginSuccess(true);
      } else {
        setMessage("Invalid credentials");
        setLoginSuccess(false);
      }
    } catch (error) {
      setMessage("Error during login");
      setLoginSuccess(false);
    }
  };

  const redirectToMainPage = () => {
    window.location.href = "/"; // Cambia esto a la ruta de tu archivo principal
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Login
        </button>
        {loginSuccess && (
          <button
            onClick={redirectToMainPage}
            className="w-full bg-green-500 text-white p-2 rounded-md mt-4"
          >
            Go to Main Page
          </button>
        )}
        {message && (
          <p
            className={`mt-4 text-center ${
              loginSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
