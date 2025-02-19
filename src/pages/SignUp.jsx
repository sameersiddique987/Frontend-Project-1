// // import { signUpUser } from '../config/firebase/firebasemethods';

  //  async function inputVal(data) {
    //   console.log(data);
    //   try {
  //     const sign = await signUpUser ({
  //       firstName : data.firstName,
  //       lastName : data.lastName,
  //     email : data.email,
  //       password : data.password
  //     })
  //     console.log(sign);
  //     navigate('Login')
  //   } catch (error) {
      
  //   }
  // }

//  import React from 'react'
//  import axios from "axios";
//  import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';

//  const SignUp = () => {
//      const navigate = useNavigate()
//    const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm();
  

// const inputVal = async (data) => {
//   console.log("Form Data:", data); 
//   // const { name, email, password } = this.state;
//   try {
//     const response = await fetch("https://hackathon-sage-nine.vercel.app/api/v1/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//        body: JSON.stringify({ email, password }),
//     });
//     const data = await response.json();
//     if (response.ok) {
//       alert("Sign-up successful!");
//     } else {
//       alert(data.message || "Sign-up failed");
//     }
//     navigate("/Login")
//   } catch (error) {
//     console.error("Error signing up:", error);
//   }
// }

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const inputVal = async (data) => {
  //   console.log("Form Data:", data); 

  //   // ✅ Destructure data correctly
  //   const { email, password } = data; 

  //   try {
  //     const response = await fetch("/api/v1/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //       mode: "cors", // ✅ Add CORS mode
  //       credentials: "include", // ✅ If using cookies for authentication
  //     });

  //     const responseData = await response.json(); // ✅ Use a different variable name to avoid conflicts

  //     if (response.ok) {
  //       alert("Sign-up successful!");
  //       navigate("/Login"); // ✅ Move inside the success condition
  //     } else {
  //       alert(responseData.message || "Sign-up failed");
  //     }
  //   } catch (error) {
  //     console.error("Error signing up:", error);
  //   }
  const inputVal = async (data) => {
    const { email, password } = data;
    console.log("Sending Data:", { email, password }); // ✅ Debugging
  
    try {
      const response = await fetch("https://hackathon-sage-nine.vercel.app/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // ✅ Ensure proper JSON
      });
  
      const responseText = await response.text();
      console.log("Raw Response:", responseText); // ✅ Print Raw Response
  
      const responseData = JSON.parse(responseText);
      if (response.ok) {
        alert("Sign-up successful!");
        navigate("/Login");
      } else {
        alert(responseData.message || "Sign-up failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  
   

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSubmit(inputVal)}>
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              {...register("firstname", { required: true })}
              type="text"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                     placeholder="Enter your firstname"
            />
             {errors.firstname && (<span className="text-red-500 text-sm">This field is required</span>)}
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              {...register("lastname", { required: true })}
              type="text"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                     placeholder="Enter your lastname"
            />
             {errors.lastname && (<span className="text-red-500 text-sm">This field is required</span>)}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                     placeholder="Enter your email"
            />
            {errors.email && (<span className="text-red-500 text-sm">This field is required</span>)}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                     placeholder="Enter your password"
            />
            {errors.password && (<span className="text-red-500 text-sm">This field is required</span>)}
          </div>

          <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded">
            Sign Up
          </button>
        </form>
        <Link to='/Login'>

 <p className="text-sm pt-5 text-center text-gray-600">
Already have an account? <span className="text-blue-500 hover:underline">Login</span>
 </p>
 </Link>
      </div>
    </div>
  );
};

export default SignUp;



