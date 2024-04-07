import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpass: "",
    gender: "",
  });
  const handlecheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const { loading, signup } = useSignUp();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flec-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-500 italic">Chatify App</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 mt-4">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              placeholder="Akshay Kumar"
              type="text"
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              placeholder="Akshay"
              type="text"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              placeholder="Enter Password"
              type="password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            ></input>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              placeholder="Confirm Password"
              type="password"
              value={inputs.confirmpass}
              onChange={(e) =>
                setInputs({ ...inputs, confirmpass: e.target.value })
              }
            ></input>
          </div>
          {/* Gender Check Box */}
          <GenderCheckbox
            oncheckboxChange={handlecheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//Starter Code
// import React from "react";
// import GenderCheckbox from "./GenderCheckbox";
// const SignUp = () => {
//   return (
//     <div className="flex flec-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp <span className="text-blue-500 italic">Chatify App</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2 mt-4">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               placeholder="Akshay Kumar"
//               type="text"
//             ></input>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               placeholder="Akshay"
//               type="text"
//             ></input>
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               placeholder="Enter Password"
//               type="password"
//             ></input>
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               placeholder="Confirm Password"
//               type="password"
//             ></input>
//           </div>
//           {/* Gender Check Box */}
//           <GenderCheckbox/>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">SignUp</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
