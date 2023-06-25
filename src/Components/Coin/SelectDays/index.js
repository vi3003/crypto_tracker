import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./styles.css";

function SelectDays({ days, handleDaysChange, noPTag}) {
  return (
    <div className="select-days">
      {!noPTag && <p>Price Change in </p>}
      <Select
        value={days}
        onChange={handleDaysChange}
        sx={{
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
        }}
      >
        <MenuItem value={6}>7 days</MenuItem>
        <MenuItem value={29}>30 days</MenuItem>
        <MenuItem value={59}>60 days</MenuItem>
        <MenuItem value={89}>90 days</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;