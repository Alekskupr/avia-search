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

  const inputRadioCollection = [
    { sort: 'priceHigh', label: '- по возрастанию цены', id: 'priceHigh', key: 1 },
    { sort: 'priceLow', label: '- по убыванию цены', id: 'priceLow', key: 2 },
    { sort: 'duration', label: '- по времени в пути', id: 'duration', key: 3 },
  ];

  return (
    <div className="filterSortPanel">

      <div className="sortPanel">

        <p className="titlePanel">Сортировать</p>
        <div>
          {inputRadioCollection.map((item) => {
            return (
              <div key={item.key} className="radioGroup">
                <input
                  name="selectSort"
                  type="radio"
                  value={item.sort}
                  onChange={radioHandler}
                  checked={item.sort === filterPanelOptions.radioValue}
                />
                <label htmlFor={item.id}>{item.label}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="filterPanel">
        
        <p className="titlePanel">Фильтровать</p>
        <div>
          <input type="checkbox" value={filterPanelOptions.checkbox} onChange={checkboxHandler} id="checkbox" />
          <label htmlFor="checkbox"> - без пересадок</label>
        </div>

        <p className="titlePanel">Цена</p>
        <div className="inputGroup">
          <span>От </span>
          <input type="tel" pattern="^[0-9]+$" value={filterPanelOptions.priceMin} onChange={priceMinHandler} />
        </div>
        <div className="inputGroup">
          <span>До </span>
          <input type="tel" pattern="^[0-9]+$" value={filterPanelOptions.priceMax} onChange={priceMaxHandler} />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
