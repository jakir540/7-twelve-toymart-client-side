import React, { useContext, useState } from "react";
// import { Transition } from "@headlessui/react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ReactNavbar } from "overlay-navbar";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.css";
import Photo from "../../../assets/toy_shop_logo-01.jpg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log({ user });

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar-container">
      <ReactNavbar
        navColor1="white"
        navColor2="hsl(219,48%,8%)"
        burgerColor="hsl(250,100%,75%)"
        burgerColorHover="hsl(250,100%,75%)"
        logo={Photo}
        logoWidth="120px"
        logoHoverColor="hsl(250,100%,75%)"
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        link1Text="Home"
        link2Text={
  
          <button
            onClick={handleLogout}
            className=" bg-indigo-600 rounded-md p-3 text-white font-semibold md:mx-5 ms-5 "
          >
            Logout
          </button>
        }
        link3Text="AllToys"
        link4Text="MyToys"
        link1Url="/"
        link2Url="/login"
        link3Url="/allToys"
        link4Url="/myToys"
        link1ColorHover="white"
        link1Color="HSL(250,100%,75%"
        link1Size="1.5rem"
        link1Padding="3vmax"
        profileIcon={true}
        ProfileIconElement={FaUserAlt}
        profileIconColor="HSL(250,100%,75%"
        profileIconColorHover="white"
      />
    </div>
  );
};

export default Navbar;

// another navbar

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, logOut } = useContext(AuthContext);
//   console.log({user});

//   const handleLogout = () => {
//     logOut()
//       .then()
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <nav className="bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center">
//               <div className="flex-shrink-0 mr-16">
//                 <div className="flex items-center">
//                   <div className="text-orange-600 text-5xl ">
//                     <MdToys></MdToys>
//                   </div>
//                   <div>
//                     <h2 className="text-white ml-5 font-serif font-semibold">
//                       BD-Toy
//                       <span className="text-orange-600 font-bold text-3xl">
//                         Mart
//                       </span>
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//               <div className="hidden md:block">
//                 <div className="flex items-center lg:space-x-60  justify-center">
//                   <div className="ml-10 flex items-baseline space-x-4">
//                     <Link
//                       to="/"
//                       className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Home
//                     </Link>

//                     { (
//                       <Link
//                         to="/allToys"
//                         className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                       >
//                         All Toys
//                       </Link>
//                     )}
//                     {/* {user && (
//                       <Link
//                         to="/allToys"
//                         className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                       >
//                         All Toys
//                       </Link>
//                     )} */}

//                     {user && (
//                       <Link
//                         to="#"
//                         className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                       >
//                         Add Toy
//                       </Link>
//                     )}
//                     { (
//                       <Link
//                         to="/myToys"
//                         className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                       >
//                        My Toys
//                       </Link>
//                     )}
//                     {/* {user && (
//                       <Link
//                         to="/myToys"
//                         className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                       >
//                        My Toys
//                       </Link>
//                     )} */}

//                     <Link
//                       to="/blogs"
//                       className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                     >
//                       Blogs
//                     </Link>
//                   </div>

//                   <div className="md:flex items-center ">
//                     <div>
//                       {user && (
//                         <button
//                           onClick={handleLogout}
//                           className=" bg-orange-900 rounded-md p-3 text-white font-semibold md:mx-5 ms-5 "
//                         >
//                           Logout
//                         </button>
//                       )}
//                     </div>

//                     {user ? (
//                       <div>
//                         <img
//                           className="mx-3 rounded-full h-12"
//                           src={user?.photoURL}
//                           alt="UserProfile"
//                           title={user && user?.displayName}
//                         />
//                       </div>
//                     ) : (
//                       <Link
//                         to="/login"
//                         className="bg-orange-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium text-white"
//                       >
//                         Login
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition
//           show={isOpen}
//           enter="transition ease-out duration-100 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-75 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           {(ref) => (
//             <div className="md:hidden" id="mobile-menu">
//               <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <Link
//                   to="/"
//                   className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Home
//                 </Link>

//                 <Link
//                   to="/allToys"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   All Toys
//                 </Link>

//                 <Link
//                   to="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Add Toy
//                 </Link>

//                 {user && (
//                       <Link
//                         to="/myToys"
//                         className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                       >
//                        My Toys
//                       </Link>
//                     )}

//                 <Link
//                   to="/blogs"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Blogs
//                 </Link>

//                 <Link
//                   to="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Login
//                 </Link>
//                 <div>
//                   <Link
//                     to="#"
//                     className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Profile
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )}
//         </Transition>
//       </nav>
//     </div>
//   );
// };
// export default Navbar;
