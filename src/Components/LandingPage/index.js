import React from 'react'
import './styles.css'
import Button from '../Common/Button'
import iphone from '../../assets/iphone.png'
import gradient from '../../assets/gradient.png'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { RWebShare } from 'react-web-share'

function MainComponent() {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <motion.h1 
            className='track-crypto'
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5 }}
            >
                Track Crypto
            </motion.h1>
            <motion.h1 
            className='real-time'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            >
                Real Time.
            </motion.h1>
            <motion.p 
            className='info-text'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
            Stay on Top of the Crypto Wave with CryptoTrackia. ~ Your Ultimate Crypto Tracker!
            </motion.p>
            <motion.div 
            className='btn-flex'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to='/dashboard'>
                <Button text={'Dashbord'}
                onClick={() => {}}/>
              </Link>
              <RWebShare
                data={{
                  text: "Crypto Dashboard made using React JS.",
                  url: "https://cryptotrackia.netlify.app/",
                  title: "CryptoTrackia.",
                }}
                onClick={() => console.log('shared successfully!')}>
                  <Button text={'Share'} outlined={true}/>
                </RWebShare>
                
            </motion.div>
        </div>
        <div className='right-component'>
          <motion.img 
            src={iphone} 
            className='iphone-img' 
            alt='iphone'
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
            }}
          />
          <img 
          src={gradient} 
          className='gradient-img' 
          alt='gradient'/>
        </div>
    </div>
  )
}

export default MainComponent