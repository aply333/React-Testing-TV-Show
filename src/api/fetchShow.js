import React, { useEffect } from "react";
import axios from "axios";


// fetchShow.js
export const fetchShow = () => {
    return axios.get
      .then(res => return res) // or res.data, however you want to set that up
  }
  
   // App.js
  useEffect(() => {
    fetchShow
      .then(res => {
        // set state with the data
      }
  }, []);