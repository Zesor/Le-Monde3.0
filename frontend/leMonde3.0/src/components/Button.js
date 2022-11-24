import React from 'react'
import {useCookies} from 'react-cookie';


const Button = ({ styles }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['walletId']);
  
  function test(){
    if (cookies.walletId && cookies.walletId.Id) {
      console.log("good")
      window.location.href='/#post';
    }
    else {
      window.location.href='/#home';
    }
  } 
  return (
    <button onClick={test} type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button