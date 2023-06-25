import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import SelectCoins from '../Components/SelectCoin'
import SelectDays from '../Components/Coin/SelectDays';
import { coinObject } from '../functions/converObject';
import { getCoinPrices } from '../functions/getCoinprices';
import { settingChartData } from '../functions/settingChartData';
import { getCoinData } from '../functions/getCoinData';
import Loader from '../Components/Common/Loader';
import List from '../Components/Dashboard/List';
import CoinInfo from '../Components/Coin/CoinInfo';
import PriceToggle from '../Components/Coin/PriceToggle';
import LineChart from '../Components/Coin/LineChart';

function ComparePage() {
  const [crypto1, setcrypto1] = useState('bitcoin');
  const [crypto2, setcrypto2] = useState('ethereum');
  const [crypto1Data, setcrypto1Data] = useState({});
  const [crypto2Data, setcrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState('prices');
  const [days, setDays] = useState(29);
  const [chartData, setChartData] = useState();

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    if (data1) {
      const data2 = await getCoinData(crypto2)
      coinObject(setcrypto1Data, data1); 
      if(data2){
        coinObject(setcrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    }
  }
  

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setcrypto2(event.target.value);
      const data2 = await getCoinData(event.target.value);
      coinObject(setcrypto2Data, data2);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1 && prices2) {
        console.log ('BOTH PRICES FETCHED', prices1, prices2)
        setIsLoading(false);
      }
    }
    else {
      setcrypto1(event.target.value);
      const data1 = await getCoinData(event.target.value);
      coinObject(setcrypto1Data, data1);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1 && prices2) {
        console.log ('BOTH PRICES FETCHED', prices1, prices2)
        setIsLoading(false);
      }
    }
  };
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='coins-days-flex'>
            <SelectCoins
              crypto1={crypto1} 
              crypto2={crypto2} 
              handleCoinChange={handleCoinChange}
            />
            <SelectDays 
              days={days} 
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className='grey-wrapper' style={{padding: '0rem 1rem'}}>
            <List coin={crypto1Data} delay={0.1}/>
          </div>
          <div className='grey-wrapper' style={{padding: '0rem 1rem'}}>
            <List coin={crypto2Data} delay={0.1}/>
          </div>
          <div className='grey-wrapper'>
            <PriceToggle
             priceType={priceType} 
             handlePriceTypeChange={handlePriceTypeChange}
           />
            <LineChart
             chartData={chartData} 
             priceType={priceType} 
             multiAxis={true}/>
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
    )
  };


export default ComparePage;