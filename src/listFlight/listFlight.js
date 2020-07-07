import React from 'react';

import Card from '../card/card';

const ListFlight = (props) => {
  const { list } = props;
  console.log(list);

  return (
    <div className="listFlight">
      {list &&
        list.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
    </div>
  );
};

export default ListFlight;
