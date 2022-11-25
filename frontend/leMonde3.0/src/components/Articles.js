import { feedback } from "../constants";
import styles from "../style.js";
import ArticlesCard from "./ArticlesCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useCookies} from 'react-cookie';

function Articles() {

  const [cookies, setCookie, removeCookie] = useCookies(['walletId']);
  const [articles, setArticles] = useState(["test"]);
  useEffect(() => {
    getArticles();
  }, [])

  async function getArticles()
  {
    var response = await axios.get('http://127.0.0.1:3001/ipfs/get')
    var resp = response.data
    console.log("resp")
    console.log(resp)
    Object.keys(resp).forEach(function(key) {
      console.log("la")

      console.log(key, resp[key][0]);
      var newObj = resp[key];
      console.log("under:")
      Object.keys(newObj).forEach(function(key2) {
        console.log(key2, newObj[key2]);
      });
    });
    setArticles(resp)
    return;
  }

  function test() {
    var resp = articles;
    Object.keys(resp).forEach(function(key) {
      console.log("la")

      console.log(key, resp[key][0]);
      //var newObj = resp[key];
      //Object.keys(newObj).forEach(function(key2) {
      //  console.log(key2, newObj[key2]);
      //});
    });
    window.location.reload();
  }

  return (
    <section id="articles" className={` ${cookies.walletId && cookies.walletId.Id !== "" ? "" : "hidden"} ${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="flex items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          Articles
        </h1>
        
      </div>
      
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        { 
          articles.map(
            (card) =>
            <ArticlesCard
              walletId={card[0]}
              CID={card[1]}
              title={card[2]}
              content={card[3]}
            />
          )
        }
      </div>
      <button onClick={test} type="button" className={`mt-10 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        Refresh
      </button>
    </section>
  );
}

export default Articles;