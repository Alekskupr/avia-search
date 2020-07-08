import React from 'react';
import './card.css';

const Card = (props) => {
  const { flight } = props;
  const {
    carrier: { caption: carrierName },
    price: {
      total: { amount },
    },
    legs: [{ duration, segments }],
  } = flight;

  const transferDuration = () => {
    const durationStr = `${Math.floor(duration / 60)} ч ${duration % 60} мин`;
    return durationStr;
  };

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
    };
    return dateObj;
  };

  const departureDate = transferdepartureDate(segments[0].departureDate);
  const arrivalDate = transferdepartureDate(segments[segments.length - 1].arrivalDate);

  return (
    <div className="containerCard">
      <div className="headerCard">
        <div className="carrieLogo">Логотип перевозчика</div>
        <div className="pricePanel">
          <div className="price">
            <span>{amount}</span>
          </div>
          <span>Стоимость для одного взрослого пассажира</span>
        </div>
      </div>
      <div className="routePanel">
        <div className="innerRoutePanel">
          <div className="cityName"><span>{segments[0].departureCity.caption}</span></div>
          <div className="airportName"><span>{segments[0].departureAirport.caption}</span></div>
          <div className="airportUid"><span>{segments[0].departureAirport.uid}</span></div>
          <div className="cityName"><span>{segments[segments.length - 1].arrivalCity.caption}</span></div>
          <div className="airportName"><span>{segments[segments.length - 1].arrivalAirport.caption}</span></div>
          <div className="airportUid"><span>{segments[segments.length - 1].arrivalAirport.uid}</span></div>
        </div>
      </div>
      <div className="datePanel">
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
      </div>
      <div className="carrierName">Рейс выполняет: {carrierName}</div>
      <button type="button" className="selectButton">
        Выбрать
      </button>
    </div>
  );
};

export default Card;
