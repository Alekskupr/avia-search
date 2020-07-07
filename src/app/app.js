import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './app.css';
import dataFlights from '../flights.json';
import ListFlights from '../listFlight/listFlight';
import FilterPanel from '../filterPanel/filterPanel';

const App = () => {
  const [flightsForList, setFlightsForList] = useState(dataFlights.result.flights);
  const [list, setList] = useState([]);
  

  const selectSort = useSelector((store) => {
    return store.selectSort;
  });

  useEffect(() => {
    
    if (selectSort === 'priceHigh' || '') {
      console.log('if priceHigh');
      setList(flightsForList.sort((a, b) => +a.flight.price.total.amount - +b.flight.price.total.amount));
      // console.log(newFlightForList);
    }
    if (selectSort === 'priceLow') {
      console.log('if priceLow');

      setList(flightsForList.sort((a, b) => +b.flight.price.total.amount - +a.flight.price.total.amount));
    }
    if (selectSort === 'duration') {
      console.log('if duration');
      setList(flightsForList.sort((a, b) => +a.flight.legs.duration - +b.flight.legs.duration));
    }
  }, [selectSort, flightsForList]);

  // console.log(list.flight.price.total.amount);

  return (
    <div className="mainContainer">
      <FilterPanel className="filterPanel" />
      <ListFlights className="tripPanel" list={list} />
    </div>
  );
};

export default App;
