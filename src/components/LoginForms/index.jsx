import { useState } from "react";

export const AdminLoginForm = () => {
  const [userDetails, setUserDetails] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin login form submitted:", userDetails);
  };

  return (
    <div className="rounded-lg shadow-xl p-8 w-1/3">
      <form className="flex flex-col border border-gray-400 rounded-lg p-4" onSubmit={handleSubmit}>
        <h2 className="mb-4 font-medium text-xl">Admin Login</h2>
        <div className="flex flex-col mb-2">
          <label htmlFor="username" className="self-start text-sm pb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={userDetails.username}
            onChange={handleInputChange}
            className="bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="self-start text-sm pb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={userDetails.password}
            onChange={handleInputChange}
            className="bg-white"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export const StudentLoginForm = () => {
  const [userDetails, setUserDetails] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student login form submitted:", userDetails);
  };

  return (
    <div className="rounded-lg shadow-xl p-8 w-1/3">
      <form className="flex flex-col border border-gray-400 rounded-lg p-4" onSubmit={handleSubmit}>
        <h2 className="mb-4 font-medium text-xl">Student Login</h2>
        <div className="flex flex-col mb-2">
          <label htmlFor="username" className="self-start text-sm pb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={userDetails.username}
            onChange={handleInputChange}
            className="bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="self-start text-sm pb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={userDetails.password}
            onChange={handleInputChange}
            className="bg-white"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};
