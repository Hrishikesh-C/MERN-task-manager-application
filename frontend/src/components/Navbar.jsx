
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  const handleLogoutClick = () => {
    dispatch(logout());
  }

  return (
    <>
      {/* Main Navbar */}
      <header className='flex justify-between sticky top-0 p-4 bg-white/80 backdrop-blur-md shadow-md items-center z-50 transition-all duration-300'>
        <h2 className='cursor-pointer uppercase font-bold text-gray-800 text-xl transition-transform hover:scale-105'>
          <Link to="/"> zidio task management </Link>
        </h2>
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 uppercase font-semibold'>
          {authState.isLoggedIn ? (
            <>
              <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md transition-all duration-300 shadow-lg">
                <Link to='/tasks/add' className='block w-full h-full px-5 py-2 items-center space-x-2'>
                  <i className="fa-solid fa-plus"></i> <span>Add Task</span>
                </Link>
              </li>
              <li className='py-2 px-4 cursor-pointer text-gray-700 hover:bg-gray-200 transition rounded-md shadow-sm' onClick={handleLogoutClick}>
                Logout
              </li>
            </>
          ) : (
            <li className='py-2 px-4 cursor-pointer text-primary hover:bg-gray-100 transition rounded-md shadow-sm'>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <span className='md:hidden cursor-pointer text-2xl transition-transform duration-300 hover:scale-110' onClick={toggleNavbar}>
          <i className="fa-solid fa-bars"></i>
        </span>

        {/* Mobile Sidebar Menu */}
        <div className={`fixed md:hidden right-0 top-0 bottom-0 transition-transform duration-500 ease-in-out 
                         ${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'} 
                         bg-white shadow-lg w-3/4 sm:w-1/2 h-full z-50 p-6 flex flex-col`}>
          <div className='flex justify-end'>
            <span className='text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90' onClick={toggleNavbar}>
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>

          <ul className='flex flex-col gap-6 uppercase font-semibold text-center mt-8'>
            {authState.isLoggedIn ? (
              <>
                <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium transition py-3 px-5 rounded-md shadow-md">
                  <Link to='/tasks/add' className='block w-full h-full items-center justify-center space-x-2'>
                    <i className="fa-solid fa-plus"></i> <span>Add Task</span>
                  </Link>
                </li>
                <li className='py-3 px-5 cursor-pointer hover:bg-gray-200 transition rounded-md shadow-sm' onClick={handleLogoutClick}>
                  Logout
                </li>
              </>
            ) : (
              <li className='py-3 px-5 cursor-pointer text-primary hover:bg-gray-200 transition rounded-md shadow-sm'>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar;
