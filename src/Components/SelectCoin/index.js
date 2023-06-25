import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { get100Coins } from "../../functions/get100Coins";

function SelectCoins({ crypto1, crypto2,handleCoinChange }) {

    const [allCoins, setAllCoins] = useState([]);
    

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const myCoins = await get100Coins();
        setAllCoins(myCoins);
    }

    const styles = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--white)",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#d81b60",
          },
        },
    }
  return (
    <div className="coins-flex">
        <p>Crypto 1</p>
        <Select
            label="Crypto 1"
            value={crypto1}
            onChange={
                (event) => handleCoinChange(event, false)
            }
            sx={styles}
        >
            {allCoins.filter((coin) => coin.id !== crypto2).map((coin, i) => (
                <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            ))}
        </Select>
        <p>Crypto 2</p>
        <Select
            label="Crypto 2"
            value={crypto2}
            onChange={
                (event) => handleCoinChange(event, true)
            }
            sx={styles}
        >
            {allCoins.filter((coin) => coin.id !== crypto1).map((coin, i) => (
                <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            ))}
        </Select>
    </div>
  );
}

export default SelectCoins;