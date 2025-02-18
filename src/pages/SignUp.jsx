
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

 import React from 'react'
 import axios from "axios";
 import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
// // import { signUpUser } from '../config/firebase/firebasemethods';

const SignUp = () => {
     const navigate = useNavigate()
  const { register, handleSubmit , formState: { errors }} = useForm();

  const inputVal = async (data) => {
    
    console.log("Form Data:", data); 

    if (!data.password) {
      console.error("Error: Password is missing!");
      return;
    }

    try {
      // const response = await axios.post("https://hackathon-sage-nine.vercel.app/api/v1/register", data, {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
     
      //  });
      const response = await axios.post(
        "https://hackathon-sage-nine.vercel.app/api/v1/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // ✅ If using cookies or authentication
        }
      );
      
      console.log("Success:", response.data);
      navigate("/Login")
    } catch (error) {
      console.error("Error during registration:", error.response ? error.response.data : error.message);
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



