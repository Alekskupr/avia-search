import React, { useState, useEffect } from 'react';
import './app.css';
import dataFlights from '../flights.json';
import ListFlights from '../listFlight/listFlight';

const App = () => {
  
  const [flightsForList, setFlightsForList] = useState(dataFlights.result.flights);
  
  return (
    <div className="mainContainer">
      {/* <div>{flightsForList}</div> */}
      <div className="filterPanel">Здесь будет панель фильтров</div>
      <ListFlights className="tripPanel" flightsForList={flightsForList} />
      
    </div>
  );
}

export default App;