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


import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const inputVal = async (data) => {
    const { firstname, lastname, email, password } = data; 
    console.log("Sending Data:", { firstname, lastname, email, password });
  
    try {
        const response = await fetch("https://hackathon-sage-nine.vercel.app/api/v1/register", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstname, lastname, email, password }), 
        });
  
        const responseData = await response.json();
        console.log("Server Response:", responseData);
  
        if (response.ok) {
            // ✅ Swal Alert for successful registration
            Swal.fire({
                title: "Sign-up Successful!",
                text: "You can now log in to your account.",
                icon: "success",
                confirmButtonColor: "#234e94",
                confirmButtonText: "Go to Login",
            }).then(() => {
                navigate("/Login");
            });
  
        } else if (response.status === 401 && responseData.message === "User already exists") {
            // ❌ Swal Alert for email already in use
            Swal.fire({
                title: "Email already exists!",
                text: "Try logging in or use a different email.",
                icon: "warning",
                confirmButtonColor: "#d33",
                confirmButtonText: "OK",
            });
  
        } else {
            // ❌ Swal Alert for other errors
            Swal.fire({
                title: "Sign-up Failed!",
                text: responseData?.message || "Something went wrong!",
                icon: "error",
                confirmButtonColor: "#d33",
                confirmButtonText: "Try Again",
            });
        }
  
    } catch (error) {
        console.error("Error signing up:", error);
  
        // ❌ Swal Alert for network error
        Swal.fire({
            title: "Error!",
            text: "Something went wrong! Please try again.",
            icon: "error",
            confirmButtonColor: "#d33",
            confirmButtonText: "OK",
        });
    }
  };
  
  
  // const inputVal = async (data) => {
  //   const { firstname, lastname, email, password } = data; 
  //   console.log("Sending Data:", { firstname, lastname, email, password });

  //   try {
  //     const response = await fetch("https://hackathon-sage-nine.vercel.app/api/v1/register", {
  //       method: "POST",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ firstname, lastname, email, password }), 
  //     });

  //     let responseData;
  //     try {
  //       responseData = await response.json();
  //     } catch (jsonError) {
  //       console.error("Error parsing JSON:", jsonError);
  //       throw new Error("Invalid server response");
  //     }

  //     if (response.ok) {
        
  //     Swal.fire({
  //       title: "Success!",
  //       text: "Item added to cart successfully.",
  //       icon: "success",
  //       confirmButtonColor: "#234e94",
  //       confirmButtonText: "OK",
  //     });
  //       navigate("/Login");
  //     } else {
  //       alert(responseData?.message || "Sign-up failed");
  //     }
  //   } catch (error) {
  //     console.error("Error signing up:", error);
  //     alert("Something went wrong! Please try again.");
  //   }
  // };

 

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



