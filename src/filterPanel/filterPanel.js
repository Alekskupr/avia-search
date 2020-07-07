import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectSortAC} from '../../redux/action';

const FilterPanel = () => {

  const [radioValue, setRadioValue] = useState('priceHigh');

  const dispatch = useDispatch();

  const radioHandler = (e) => {
    setRadioValue(e.target.value);
    // dispatch(selectSortAC(e.target.value));
  }

  useEffect(() => {
    dispatch(selectSortAC(radioValue));
  }, [radioValue]);

  return (
    <form>
      <p>
        <b>Сортировать</b>
      </p>
      <input name="selectSort" type="radio" value="priceHigh" onChange={radioHandler}/>
      По возрастанию цены
      <input name="selectSort" type="radio" value="priceLow" onChange={radioHandler} />
      По убыванию цены
      <input name="selectSort" type="radio" value="duration" onChange={radioHandler} />
      по времени в пути
    </form>
    // <input type="checkbox"/>
  );
};


export default FilterPanel;