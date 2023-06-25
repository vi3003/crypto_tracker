import React from 'react';
import "./styles.css";
import Pagination from '@mui/material/Pagination';


export default function PaginationComponent({page, handleChange}) {
    return (
        <div className='pagination-component'>
            <Pagination
                count={10} 
                page={page} 
                onChange={(event, value) => handleChange(event, value)}
                sx={{
                    color: "var(--white)",
                    "& .Mui-selected ": {
                      backgroundColor: "var(--pink) !important",
                      color: "var(--black) !important",
                      fontWeight: '700',
                      borderColor: "var(--pink) !important",
                    },
                    "& .MuiPaginationItem-ellipsis": {
                      border: "0px solid var(--grey) !important",
                    },
                    "& .MuiPaginationItem-text": {
                      color: "var(--white)",
                      border: "1px solid var(--grey)",
                    },
                  }}
            />
    </div>
    
  );
}
