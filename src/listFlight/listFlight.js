import React from 'react';

import Card from '../card/card';

const ListFlight = (props) => {
  const { flightsForList } = props;
  // console.log(flightsForList);

  return (
    <div className="listFlight">
      {flightsForList &&
        flightsForList.map((item, index) => {
          return <Card key = {index} {...item}/>;
        })}
    </div>
  );
};

export default ListFlight;
