import { useState } from 'react'

import styles from '../style.js';
import { close, menu, metamask } from '../assets';
import { navLinks } from '../constants';
import '../index.css';

import useMetaMask from '../hooks/useMetaMask';


function Navbar() {
  const { connect, disconnect, isActive, account } = useMetaMask();
  const [toggle, settoggle] = useState(false);
  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex">
        <h1 className="text-white font-poppins text-[32px]" >
          Le Monde
        </h1>
        <p>
          ""
        </p>
        <p className="text-gradient font-poppins text-[32px]">
          3.0
        </p>
      </div>


      <ul className="list-none sm:flex hidden justify-end items-center flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={ toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoggle((prev) => !prev)}  
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 my-2 mx-4 min-w[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4' }`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`flex-2 ${styles.flexStart} z-[11]`}>
        <button onClick={ isActive ? disconnect : connect } type="button" className={` py-1 px-12 bg-orange-gradient mg:2 font-poppins font-medium text-[18px] z-[10] text-primary rounded-[10px] outline outline-offset-2 outline-4 ${ isActive ? "outline-green-500" : "outline-pink-500" }`}>
          <img
            src={metamask}
            alt="MetaMask"
            className="w-[50px]"
          /> 
        </button>
      </div>
    </nav>
  )
}

export default Navbar