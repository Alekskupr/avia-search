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

    const newArr = 
      selectSort.checkbox
        ? flightsForList.filter((item) => item.flight.legs[0].segments.length === 1)
        : flightsForList.filter((item) => item.flight.legs[0].segments.length > 0)

      
    const newnewArr = newArr.filter(
      (item) =>
        +item.flight.price.total.amount > selectSort.priceMin &&
        +item.flight.price.total.amount < selectSort.priceMax,
    );


    if (selectSort.radioValue === 'priceHigh') {
      newnewArr.sort((a, b) => +a.flight.price.total.amount - +b.flight.price.total.amount);
    } else {
      if(selectSort.radioValue === 'priceLow') {
        newnewArr.sort((a, b) => +b.flight.price.total.amount - +a.flight.price.total.amount);
      } else {
        if(selectSort.radioValue === 'duration') {
          newnewArr.sort((a, b) => +a.flight.legs[0].duration - +b.flight.legs[0].duration);
        }
      }
    }

    setList([...newnewArr]);
   
  }, [selectSort]);



  return (
    <div className="mainContainer">
      <FilterPanel className="filterPanel" />
      <ListFlights className="tripPanel" list={list} />
    </div>
  );
};

export default App;
