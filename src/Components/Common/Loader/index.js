import { CircularProgress } from '@mui/material'
import React from 'react'
import './styles.css'

function Loader() {
  return (
    <div className='loader-container'>
        <CircularProgress color='secondary'/>
    </div>
  )
}

export default Loader