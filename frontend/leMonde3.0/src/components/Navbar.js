import { useState } from 'react'
import styles from '../style.js';
import { close, menu, metamask } from '../assets';
import { navLinks } from '../constants';
import '../index.css';
import { ethers } from 'ethers';
import {useCookies} from 'react-cookie';
import axios from 'axios';

function Navbar() {
  const [toggle, settoggle] = useState(false);
  
  const [ walletAdress, setwWalletAdress ] = useState("");

  const [cookies, setCookie, removeCookie] = useCookies(['walletId']);

  async function login(wallet_id)
  {
    await axios.post(
        'http://127.0.0.1:9020/db/login',
        {
            "wallet_id": wallet_id
        }
    ).then (function (resp) {
        console.log(resp.status)
        console.log(resp.data)
    }).catch(function (err) {
        console.log(err.response.status)
        console.log(err.response.data)
    })
  }

  async function requestAccount() {

    if (window.ethereum) {
      console.log("detected")
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setwWalletAdress(accounts[0]);
        console.log(accounts[0]);
        setCookie('walletId', {Id: accounts[0]});
        await login(accounts[0]);
      } catch(error) {
        console.log(error)
      }
    }
    console.log("cookies : ")
    console.log(cookies)
  }

  async function connectWallet() {

    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

    }
  }
  var blurred = false;
  window.onblur = function() { blurred = true; };
  window.onfocus = function() {
    blurred &&
    removeCookie('walletId');
    if (cookies.walletId)
      console.log(cookies.walletId.Id); 
  };

  function test() {
    console.log(cookies.walletId);
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex">
        <h1 className="text-white font-poppins text-[32px]" >
          Le Monde
        </h1>
        &nbsp;&nbsp;
        <p className="text-gradient font-poppins text-[32px]">
          3.0
        </p>
      </div>


      <ul className="list-none sm:flex hidden justify-end items-center flex">
        {navLinks.map((nav, index) => {
          if (nav.id === 'post' && walletAdress === "") {
            return;
          }
          return (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } text-white`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
            )
          }
        )}
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
            {navLinks.map((nav, index) =>  {
              if (nav.id === 'post' && walletAdress === "") {
                return;
              }
              return (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4' }`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
      <div className={`flex-2 ${styles.flexStart} z-[11]`}>
        <button onClick={ connectWallet } type="button" className={` py-1 px-12 bg-orange-gradient mg:2 font-poppins font-medium text-[18px] z-[10] text-primary rounded-[10px] outline outline-offset-2 outline-4  ${walletAdress !== "" ? "outline-green-500" : "outline-pink-500"} `}>
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