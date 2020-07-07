import React from 'react';
import './card.css';

const Card = (props) => {
  console.log(props);
  // <div>{item.flight.legs[0].segments[0].departureCity.caption}</div>;

  const { flight } = props;
  const {
    carrier: { caption: carrierName },
    price: {
      total: { amount },
    },
    legs: [
      {
        duration,
        segments,
      },
    ],
  } = flight;
  console.log(segments);
  
  const transferDuration = dur => {
    const durationStr = `${Math.floor(duration / 60)} ч ${duration % 60} мин`;
    return durationStr;
  }
  
  const transferdepartureDate = (date) => {
    const newDate = new Date(date);
    const rusMonth = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];
    const rusDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const month = rusMonth[newDate.getMonth()];
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const dateFlight = newDate.getDate();
    const day = rusDay[newDate.getDay()];
    const dateObj = {
      hours,
      minutes,
      dateFlight,
      month,
      day,
    }
    return dateObj;
  };

  const departureDate = transferdepartureDate(segments[0].departureDate);
  const arrivalDate = transferdepartureDate(segments[segments.length - 1].arrivalDate);
  
  

  return (
    <div className="containerCard">
      <div className="carrieLogo">Логотип перевозчика</div>
      <div className="price">{amount}</div>
      <div className="cityName">{segments[0].departureCity.caption}</div>
      <div className="airportName">{segments[0].departureAirport.caption}</div>
      <div className="airportUid">{segments[0].departureAirport.uid}</div>
      <div className="cityName">{segments[segments.length - 1].arrivalCity.caption}</div>
      <div className="airportName">{segments[segments.length - 1].arrivalAirport.caption}</div>
      <div className="airportUid">{segments[segments.length - 1].arrivalAirport.uid}</div>
      <div className="departureDate">
        <span>
          {departureDate.hours}:{departureDate.minutes}
        </span>{' '}
        <span>
          {departureDate.dateFlight} {departureDate.month} {departureDate.day}
        </span>
      </div>
      <div className="travelDuration">{transferDuration(duration)}</div>
      <div className="departureDate">
        <span>
          {arrivalDate.dateFlight} {arrivalDate.month} {arrivalDate.day}
        </span>{' '}
        <span>
          {arrivalDate.hours}:{arrivalDate.minutes}
        </span>
      </div>
      <div className="carrieName">Рейс выполняет: {carrierName}</div>
    </div>
  );
};

export default Card;
