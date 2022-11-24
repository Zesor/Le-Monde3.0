import styles from '../style.js'
import { writer, robot } from '../assets';
import GetStarted from './GetStarted'
import '../index.css';
import useMetaMask from '../hooks/useMetaMask';

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

const Post = () => {

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const { connect, disconnect, isActive, account } = useMetaMask();

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: '#b8b8b8',
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
  <section id="post" className={` ${isActive ? "" : "hidden" }   flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-10`}>
      <div className="flex flex-row justify-between items-center w-full"> 
        <h1 className="flex font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Post !
        </h1>
      </div>   
      <br />
      <span className="text-gradient text-[22px]">Title</span> {" "}
      <BootstrapInput placeholder="Title" id="bootstrap-input" />
      <br />
      <span className="text-gradient text-[22px]">Content</span> {" "}
      <TextField
        inputProps={{ style: { fontFamily: 'Arial', fontSize: 18}}}
        style={{ width:`100%`, flex: 1, margin: '5px 20px 0 0', backgroundColor: '#b8b8b8', borderRadius: 6, }}
        id="outlined-multiline-static"
        multiline
        placeholder="Content"
        rows={9}
      />
      <br />
      <br />
      <button type="button" className={`py-4 px-16 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
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