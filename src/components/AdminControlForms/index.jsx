import { useState } from "react";

export const AddStudent = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPass: ""
  });

  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevStudentDetails) => ({
      ...prevStudentDetails,
      [name]: value
    }));

    if (name === "password") {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentDetails.password !== studentDetails.confirmPass) {
      setPasswordError("Passwords do not match");
      return;
    }
    console.log("Student details submitted:", studentDetails);
  };

  return (
    <div className="w-full md:w-1/3 rounded-xl shadow-xl bg-white">
      <form className="p-4 border border-gray-500 rounded-xl" onSubmit={handleSubmit}>
        <h2 className="font-medium text-2xl mb-4">Add Student</h2>
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="name" className="text-sm">Student name</label>
          <input
            type="text"
            placeholder="Student name"
            id="name"
            name="name"
            value={studentDetails.name}
            onChange={handleInputChange}
            className="bg-white border border-gray-300 p-0.5 rounded-md w-full"
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="mobile" className="text-sm">Student mobile</label>
          <input
            type="text"
            placeholder="Student mobile"
            id="mobile"
            name="mobile"
            value={studentDetails.mobile}
            onChange={handleInputChange}
            className="bg-white border border-gray-300 p-0.5 rounded-md w-full"
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="email" className="text-sm">Student email</label>
          <input
            type="text"
            placeholder="Student email"
            id="email"
            name="email"
            value={studentDetails.email}
            onChange={handleInputChange}
            className="bg-white border border-gray-300 p-0.5 rounded-md w-full"
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="password" className="text-sm">Student password</label>
          <input
            type="password"
            placeholder="Student password"
            id="password"
            name="password"
            value={studentDetails.password}
            onChange={handleInputChange}
            className={`bg-white border border-gray-300 p-0.5 rounded-md w-full ${
              passwordError && "border-red-500"
            }`}
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="confirmPass" className="text-sm">Confirm password</label>
          <input
            type="password"
            placeholder="Confirm password"
            id="confirmPass"
            name="confirmPass"
            value={studentDetails.confirmPass}
            onChange={handleInputChange}
            className={`bg-white border border-gray-300 p-0.5 rounded-md w-full ${
              passwordError && "border-red-500"
            }`}
          />
        </div>
        {passwordError && <p className="text-red-500">{passwordError}</p>}

        <button type="submit" className="bg-blue-500 text-white w-full">Add student</button>
      </form>
    </div>
  );
};

export const AddVideo = () => {
  const [videoDetails, setVideoDetails] = useState({
    videoName: '',
    videoUrl: ''
  })

  return (
    <div className="w-full md:w-1/3 rounded-lg shadow-xl bg-white border border-gray-600">
      <form action="" className="p-4">
        <h2 className="text-xl font-medium mb-2">
          Add video
        </h2>

        <div className="flex flex-col items-start mb-4">
          <label htmlFor="title" className="text-sm">Video title</label>
          <input type="text" placeholder="Video title" className="bg-white border border-gray-400 rounded-sm p-0.5 w-full text-md"/>
        </div>

        <div className="flex flex-col items-start mb-3">
          <label htmlFor="title" className="text-sm">Video url</label>
          <input type="text" placeholder="Video url" className="bg-white border border-gray-400 rounded-sm p-0.5 w-full text-md"/>
        </div>
        <button className="bg-blue-500 w-full text-white">Add video</button>
      </form>
    </div>
  )
}

export const AddImageToGallery = () => {
  const [videoDetails, setVideoDetails] = useState({
    imageName: '',
    imageUrl: ''
  })

  return (
    <div className="w-full md:w-1/3 rounded-lg shadow-xl bg-white border border-gray-600">
      <form action="" className="p-4">
        <h2 className="text-xl font-medium mb-2">
          Add Image
        </h2>

        <div className="flex flex-col items-start mb-4">
          <label htmlFor="title" className="text-sm">Image title</label>
          <input type="text" placeholder="Video title" className="bg-white border border-gray-400 rounded-sm p-0.5 w-full text-md"/>
        </div>

        <div className="flex flex-col items-start mb-3">
          <label htmlFor="title" className="text-sm">Image</label>
          <input type="file" placeholder="Video url" multiple className="bg-white border border-gray-400 rounded-sm p-0.5 w-full text-md"/>
        </div>
        <button className="bg-blue-500 w-full text-white">Add Image</button>
      </form>
    </div>
  )
}

export const AddEventImages = () => {
  const [videoDetails, setVideoDetails] = useState({
    imageName: '',
    imageUrl: ''
  })

  return (
    <div className="w-full md:w-1/3 rounded-lg shadow-xl bg-white border border-gray-600">
      <form action="" className="p-4">
        <h2 className="text-xl font-medium mb-2">
          Add event image
        </h2>

        <div className="flex flex-col items-start mb-4">
          <label htmlFor="title" className="text-sm">Image title</label>
          <input type="text" placeholder="Video title" className="bg-white border border-gray-400 rounded-sm p-0.5 w-full text-md"/>
        </div>

        <div className="flex flex-col items-start mb-3">
          <label htmlFor="title" className="text-sm">Image</label>
          <input type="file" placeholder="Video url" multiple className="bg-white border border-gray-400 rounded-sm p-0.5 w-full text-md"/>
        </div>
        <button className="bg-blue-500 w-full text-white">Add Image</button>
      </form>
    </div>
  )
}
