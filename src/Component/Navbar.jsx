
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/v1/logout", { withCredentials: true , headers: {
//         "Content-Type": "application/json",
//       }, });
//       console.log("Logout Response:", response.data);
//       navigate("/login"); 
//     } catch (error) {
//       console.error("Logout failed:", error.response ? error.response.data : error.message);
//     }

//   }
  
//   return (
//     <div>
//       <nav className="bg-white border-gray-200 dark:bg-gray-900">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyStore</span>
//           </a>
//           <button
//             data-collapse-toggle="navbar-default"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-default"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//             </svg>
//           </button>
//           <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//             <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li><Link to="/Home" className="nav-link">Home</Link></li>
//               <li><Link to="/SummerCollection" className="nav-link">Summer Collection</Link></li>
//               <li><Link to="/WinterCollection" className="nav-link">Winter Collection</Link></li>
//               <li><Link to="/NewArrivals" className="nav-link">New Arrivals</Link></li>
//               <li><Link to="/Login" className="nav-link">Login</Link></li>
//               <li>
//                 <button onClick={handleLogout} >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Remove the refresh token from localStorage
      localStorage.removeItem('refreshToken');
      console.log('Refresh token removed from localStorage');

      // Make the logout API call to the server
      const response = await axios.get("http://localhost:3000/api/v1/logout", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Logout Response:", response.data);

      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyStore</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li><Link to="/Home" className="nav-link">Home</Link></li>
              <li><Link to="/SummerCollection" className="nav-link">Summer Collection</Link></li>
              <li><Link to="/WinterCollection" className="nav-link">Winter Collection</Link></li>
              <li><Link to="/NewArrivals" className="nav-link">New Arrivals</Link></li>
              <li><Link to="/Login" className="nav-link">Login</Link></li>
              <li>
                <button onClick={handleLogout} className="nav-link">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
