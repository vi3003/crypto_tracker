import axios from "axios";
import { m } from "framer-motion";

export const getCoinData = (id) => {
    const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
        return response.data;
  
      })
      .catch((error) => {
        console.log('ERROR>>>', error);
      });
      return myData
}