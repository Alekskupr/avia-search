import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
    const filteredSortedList = (selectSort.checkbox
      ? flightsForList.filter((item) => item.flight.legs[0].segments.length === 1)
      : flightsForList.filter((item) => item.flight.legs[0].segments.length > 0)
    ).filter(
      (item) =>
        +item.flight.price.total.amount > selectSort.priceMin && +item.flight.price.total.amount < selectSort.priceMax,
    );
    if (selectSort.radioValue === 'priceHigh') {
      filteredSortedList.sort((a, b) => +a.flight.price.total.amount - +b.flight.price.total.amount);
    } else {
      if (selectSort.radioValue === 'priceLow') {
        filteredSortedList.sort((a, b) => +b.flight.price.total.amount - +a.flight.price.total.amount);
      } else {
        if (selectSort.radioValue === 'duration') {
          filteredSortedList.sort((a, b) => +a.flight.legs[0].duration - +b.flight.legs[0].duration);
        }
      }
    }
    setList([...filteredSortedList]);
  }, [selectSort]);

  return (
    <div className="mainContainer">
      <div className="filterContainer">
        <FilterPanel />
      </div>
      <div className = "tripContainer">
        <ListFlights list={list} />
      </div>
    </div>
  );
};

export default App;
