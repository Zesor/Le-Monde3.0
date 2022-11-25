import styles from '../style.js'
import { writer, robot } from '../assets';
import GetStarted from './GetStarted'
import '../index.css';
import {useCookies} from 'react-cookie';

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Post = () => {

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [cookies, setCookie, removeCookie] = useCookies(['walletId']);


  async function post(title, wallet_id, data)
  {
    await axios.post(
        'http://127.0.0.1:3001/ipfs/add',
        {
            "wallet_id": wallet_id,
            "data": data,
            "title": title
        }
    ).then (function (resp) {
        console.log(resp.status)
        console.log(resp.data)
    }).catch(function (err) {
        console.log(err.response.status)
        console.log(err.response.data)
    })
  }

  async function test() {
    console.log("lol");
    var title = document.getElementById("bootstrap-input-title").value;
    var price = document.getElementById("bootstrap-input-price").value;
    var content = document.getElementById("outlined-multiline-static-content").value;
    console.log(title);
    console.log(price);
    console.log(content);
    await post(title, cookies.walletId.Id, content)
  }

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    
    '& .MuiInputBase-input': {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: 'white',
      border: '2px solid #ced4da',
      fontSize: 18,
      multiline: true,
      width: 'auto',
      padding: '8px 12px',
      margin: '5px 20px 0 0',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  
  return (
  <section id="post" className={` ${cookies.walletId && cookies.walletId.Id !== "" ? "" : "hidden"} flex md:flex-row flex-col sm:py-8 py-4`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-10`}>
      <div className="flex flex-row justify-between items-center w-full"> 
        <h1 className="flex font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Let's Post !
        </h1>
      </div>   
      <br />
      <div className="flex justify-between">
        <div>
          <span className="text-gradient text-[22px]">Title </span>
          &nsbp;
          <BootstrapInput placeholder="The emperor penguin" id="bootstrap-input-title" />
        </div>
        <div>
          <span className="text-gradient text-[22px]">Price </span>
          &nsbp;
          <BootstrapInput
            placeholder="20$"
            id="bootstrap-input-price"
          />
        </div>
      </div>
      <br />
      <span className="text-gradient text-[22px]">Content</span> {" "}
      <TextField
      
        inputProps={{ style: { fontFamily: 'Arial', fontSize: 18}}}
        style={{ width:`100%`, flex: 1, margin: '5px 20px 0 0', backgroundColor: 'white', borderRadius: 8, }}
        id="outlined-multiline-static-content"
        multiline
        placeholder="Penguins are aquatic, flightless birds. They lay eggs, have feathers and yet are powerful swimmers..."
        rows={9}
      />
      <br />
      <br />
      <button onClick={test} type="button" className={`py-4 px-16 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        Post
      </button>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={writer} alt="billing" className="w-auto h-[52%] relative z-[5]"/>
      <div className="absolute z-[0] w-[70%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
  )
}

export default Post