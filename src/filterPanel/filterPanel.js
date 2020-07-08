import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterPanelOptionsAC } from '../../redux/action';
import './filterPanel.css';

const FilterPanel = () => {
  const [filterPanelOptions, setFilterPanelOptions] = useState({
    radioValue: '',
    checkbox: false,
    priceMin: 0,
    priceMax: 100000,
  });

  const dispatch = useDispatch();

  const radioHandler = (e) => {
    setFilterPanelOptions({
      ...filterPanelOptions,
      radioValue: e.target.value,
    });
  };

  const checkboxHandler = (e) => {
    setFilterPanelOptions({
      ...filterPanelOptions,
      checkbox: !filterPanelOptions.checkbox,
    });
  };

  const priceMinHandler = (e) => {
    if (e.target.validity.valid) {
      setFilterPanelOptions({
        ...filterPanelOptions,
        priceMin: e.target.value,
      });
    }
  };

  const priceMaxHandler = (e) => {
    if (e.target.validity.valid) {
      setFilterPanelOptions({
        ...filterPanelOptions,
        priceMax: e.target.value,
      });
    }
  };

  useEffect(() => {
    dispatch(filterPanelOptionsAC(filterPanelOptions));
  }, [filterPanelOptions]);

  const inputRadioCollection = ['priceHigh', 'priceLow', 'duration'];

  return (
    <div className="filterPanel">
        <p>
          <b>Сортировать</b>
        </p>
        <div>
          {inputRadioCollection.map((item, index) => {
            return (
              <input
                name="selectSort"
                type="radio"
                value={item}
                key={index}
                onChange={radioHandler}
                checked={item === filterPanelOptions.radioValue}
              />
            );
          })}
        </div>
        <div>
          <input type="checkbox" value={filterPanelOptions.checkbox} onChange={checkboxHandler} />
        </div>
        <div>
          <input type="tel" pattern="^[0-9]+$" value={filterPanelOptions.priceMin} onChange={priceMinHandler} />
          <input type="tel" pattern="^[0-9]+$" value={filterPanelOptions.priceMax} onChange={priceMaxHandler} />
        </div>
      </div>
  );
};

export default FilterPanel;
