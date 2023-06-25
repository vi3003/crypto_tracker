import React from 'react'
import "./styles.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';

function List( {coin} ) {
  return (
    <Link to={`/coin/${coin.id}`}>
        <tr className='list-row'>
            <Tooltip title='Logo' placement='bottom-start' >
                <td className='td-image'>
                    <img src={coin.image} className="coin-logo" alt='logo' />
                </td>
            </Tooltip>
            
            <td>
                <div className='name-col'>
                    <Tooltip title='Symbol' placement='bottom-start'>
                        <p className='coin-symbol td-coin-symbol'>{coin.symbol}</p>
                    </Tooltip>
                    <Tooltip title='Name' placement='bottom-start'>
                        <p className='coin-name td-coin-name'>{coin.name}</p>
                    </Tooltip>
                </div>
            </td>
            <Tooltip title='Price Change in 24 Hrs' placement='bottom-start'>
                {coin.price_change_percentage_24h > 0 ? (
                    <td className='chip-flex'>
                        <div className='price-chip td-price-chip'>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className='icon-chip td-icon'>
                            <TrendingUpRoundedIcon />
                        </div>
                    </td>) : (
                    <td className='chip-flex'>
                        <div className='price-chip chip-red td-price-chip'>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className='icon-chip chip-red td-icon'>
                            <TrendingDownRoundedIcon />
                        </div>
                    </td>
                )}
            </Tooltip>
            <Tooltip title='Current change' placement='bottom'>
                <td>
                    <h3 className='coin-price td-coin-price td-center' style={{
                        color:
                            coin.price_change_percentage_24h < 0
                            ? 'var(--red)' 
                            : 'var(--green)'
                        }}
                    >
                        ${coin.current_price.toLocaleString()}
                    </h3>
                </td>
            </Tooltip>   
            <Tooltip title='Total Volume' placement='bottom'>
                <td>
                    <p className='totals td-right td-vol desktop-td-mkt'
                        style={{
                            color:'var(--white)',
                            fontSize: '1rem'
                        }}
                    >
                        ${coin.total_volume.toLocaleString()}
                    </p>
                </td>
            </Tooltip>
            <Tooltip title='Market Cap' placement='bottom'>
                <td className='desktop-td-mkt'>
                    <p className='totals td-right td-mkt-cap'
                        style={{
                            color:'var(--white)',
                            fontSize: '1rem'
                        }}
                    >
                        ${coin.market_cap.toLocaleString()}
                    </p>
                </td>
            </Tooltip>
            <Tooltip title='Market Cap' placement='bottom'>
                <td className='mobile-td-mkt'>
                    <p className='totals td-right td-mkt-cap'
                        style={{
                            color:'var(--white)',
                            fontSize: '1rem'
                        }}
                    >
                        ${convertNumber(coin.market_cap)}
                    </p>
                </td>
            </Tooltip>
        
                
        </tr>
    </Link>
    
  )
}

export default List