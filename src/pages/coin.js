import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoinInfo from '../Components/Coin/CoinInfo';
import LineChart from '../Components/Coin/LineChart';
import PriceToggle from '../Components/Coin/PriceToggle';
import SelectDays from '../Components/Coin/SelectDays';
import Header from '../Components/Common/Header';
import Loader from '../Components/Common/Loader';
import List from '../Components/Dashboard/List';
import { coinObject } from '../functions/converObject';
import { getCoinPrices } from '../functions/getCoinprices';
import { getCoinData } from '../functions/getCoinData';
import { settingChartData } from '../functions/settingChartData';

function CoinPage() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(6);
  const [priceType, setPriceType] = useState('prices');
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    setIsLoading(true);
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data); //for coin object being passed in the list
      const prices = await getCoinPrices(id, days, priceType);
      if(prices){
        settingChartData(setChartData, prices, data);
        setIsLoading(false);
      }
    }
  };
  
  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
      if(prices) {
        settingChartData(setChartData,prices, coinData);
        setIsLoading(false);
      }
  };

  const handlePriceTypeChange = async (event) => {
    setIsLoading(true);
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id, days, event.target.value);
      if(prices) {
        settingChartData(setChartData,prices, coinData);
        setIsLoading(false);
  };
}

  return (
    <div>
      <Header />
      {isLoading ? <Loader /> : 
      <>
      <div className='grey-wrapper' style={{padding: '0rem 1rem'}}>
        <List coin={coinData} delay={0.1}/>
      </div>
      <div className='grey-wrapper'>
        <SelectDays days={days} handleDaysChange={handleDaysChange}/>
        <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
        <LineChart chartData={chartData} priceType={priceType}/>
      </div>
      <CoinInfo heading={coinData.name} desc={coinData.desc} />
      </>
      }
    </div>
  )
}

export default CoinPage;