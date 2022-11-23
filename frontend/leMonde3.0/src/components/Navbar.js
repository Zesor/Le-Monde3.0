import { useState } from 'react'

import styles from '../style.js';
import { close, menu, metamask } from '../assets';
import { navLinks } from '../constants';
import '../index.css';

import useMetaMask from '../hooks/useMetaMask';

function test() {
  console.log("test")
}

function Navbar() {
  const { connect, disconnect, isActive, account } = useMetaMask();
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1 className="text-white font-poppins text-[32px]" >
        Le Monde
      </h1>
      <p>
        ""
      </p>
      <p className="text-gradient font-poppins text-[32px]">
        3.0
      </p>

      <div className={`flex-1 ${styles.flexCenter}`}>
        <button onClick={ test } type="button" className={` py-1 px-12 bg-orange-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}>
          <img
            src={metamask}
            alt="MetaMask"
            className="w-[50px]"
          /> 
        </button>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
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
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4' } text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar