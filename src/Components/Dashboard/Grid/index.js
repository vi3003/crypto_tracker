import React from 'react'
import "./styles.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


function Grid({ coin , delay }) {
  return (
    <Link to={`/coin/${coin.id}`}>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className={`grid-container ${
            coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
        >
            <div className='info-flex'>
                <img src={coin.image} className="coin-logo" alt='logo' />
                <div className='name-col'>
                    <p className='coin-symbol'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
            </div>
            {coin.price_change_percentage_24h > 0 ? (
            <div className='chip-flex'>
                <div className='price-chip'>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className='icon-chip'>
                    <TrendingUpRoundedIcon />
                </div>
            </div>) : (
            <div className='chip-flex'>
                <div className='price-chip chip-red'>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className='icon-chip chip-red'>
                    <TrendingDownRoundedIcon />
                </div>
            </div>
            )}
            <div className='info-container'>
                <h3 className='coin-price' style={{
                    color:
                        coin.price_change_percentage_24h < 0
                        ? 'var(--red)' 
                        : 'var(--green)'
                    }}
                >
                    ${coin.current_price.toLocaleString()}
                </h3>
                <p className='totals'>Total Volume: ${coin.total_volume.toLocaleString()}</p>
                <p className='totals'>MarketCap: ${coin.market_cap.toLocaleString()}</p>
            </div>
            
        </motion.div>
    </Link>
    
  )
}

export default Grid;