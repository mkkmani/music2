import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdMenuOpen, MdOutlineMusicVideo } from 'react-icons/md';
import { GiGuitarBassHead } from "react-icons/gi";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const onClickMenu = () => {
    setOpen(!open);
  };

  const onClickLogin = () => {
    setLogin(!login);
  };

  return (
    <nav>
      <div className="fixed top-0 left-0 w-full text-gray-800">
        <div className='flex items-center justify-between p-2 bg-white min-w-sm'>
          <div className="flex items-center">
            <img src='/images/logo.png' alt='logo' className='w-16 h-16' />
            <p className='text-lg lg:text-3xl font-bold pl-2'>Sree Saraswathi Sangeetha Vidhyalam</p>
            
          </div>
          <div className='lg:hidden'>
            <button type='button' onClick={onClickMenu} className='border border-gray-600'>
              <MdMenuOpen className='text-2xl' />
            </button>
          </div>
          {open && (
            <div className='lg:hidden fixed top-24 pt-5 left-0 right-0 flex flex-col items-center bg-white w-full text-gary-700'>
              <Link to='/' className='pl-4 flex items-center text-gary-700' onClick={onClickMenu}>
                <MdHome className='pb-1' style={{ width: '28px', height: '28px' }} />
                <p>Home</p>
              </Link>
              <Link to='/instruments' className='pl-4 flex items-center text-gary-700' onClick={onClickMenu}>
                <GiGuitarBassHead className='pb-1' style={{ width: '28px', height: '28px' }} />
                <p>Instruments</p>
              </Link>
              <Link to='/videos' className='pl-4 flex items-center text-gary-700' onClick={onClickMenu}>
                <MdOutlineMusicVideo className='pb-1' style={{ width: '28px', height: '28px' }} />
                <p>Videos</p>
              </Link>
              <button onClick={onClickLogin} className='flex items-center bg-white text-gary-700'>
                {login ? <IoMdLogOut className='pb-1' style={{ width: '28px', height: '28px' }} /> : <IoMdLogIn className='pb-1' style={{ width: '28px', height: '28px' }} />}
                {login ? <p>Logout</p> : <p>Login</p>}
              </button>
            </div>
          )}

          <div className='hidden lg:flex flex-column items-center bg-white text-gary-700'>
            <Link to='/' className='flex items-center'>
              <MdHome className='pb-1' style={{ width: '28px', height: '28px' }} />
              <p className='pl-1'>Home</p>
            </Link>
            <Link to='/instruments' className='flex items-center pl-4'>
              <GiGuitarBassHead className='pb-1' style={{ width: '28px', height: '28px' }} />
              <p className='pl-1'>Instruments</p>
            </Link>
            <Link to='/videos' className='flex items-center pl-4'>
              <MdOutlineMusicVideo className='pb-1' style={{ width: '28px', height: '28px' }} />
              <p className='pl-1'>Videos</p>
            </Link>
            <button onClick={onClickLogin} className='flex items-center text-black bg-white'>
              {login ? <IoMdLogOut className='pb-1' style={{ width: '28px', height: '28px' }} /> : <IoMdLogIn className='pb-1' style={{ width: '28px', height: '28px' }} />}
              {login ? <p>Logout</p> : <p>Login</p>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
