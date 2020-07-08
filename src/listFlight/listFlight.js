import React from 'react';
import Card from '../card/card';

const ListFlight = ({list}) => {
  return (
    <div className="listFlight">
      {list.length ?
        list.map((item, index) => {
          return <Card key={index} {...item} />;
        }) : ''}
    </div>
  );
};

export default ListFlight;
