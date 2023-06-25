import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import TabsComponent from '../Components/Dashboard/Tabs'
import axios from 'axios';
import Search from '../Components/Dashboard/Search';
import PaginationComponent from '../Components/Dashboard/Pagination';
import Loader from '../Components/Common/Loader';
import BackToTop from '../Components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    ) {
      return coin;
    }
    });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0,10));
      setIsLoading(false);
    }
    
  };

  return (
    <>
    <Header />
    <BackToTop />
    {isLoading ? (
      <Loader />
    ) : (
      <div>
      
      <Search search={search} onChange={onChange} />
      <TabsComponent
       coins={search ? filteredCoins : paginatedCoins}
      />
      {!search && (
        <PaginationComponent page={page} handleChange={handlePageChange}/>
      )}
      </div>
    )}
    </>
  )
}

export default DashboardPage