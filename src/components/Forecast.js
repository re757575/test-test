import React, { PropTypes } from 'react';
import cityList, { getCityNameById } from '../constants/cityIdList.js';
import ReloadDataLink from './ReloadDataLink';

const forecastState = (weatherData, isFectingForecast, selectedCity, onGetForecastData) => {

  let divStyle = {
    minHeight: '1194px',
    pointerEvents: !selectedCity ? 'none' : ''
  };

  if (isFectingForecast && !weatherData.forecast) {
    return (
      <div style={divStyle}>
        <h3>{getCityNameById(selectedCity)} 天氣預報</h3>
        <span>{'取得天氣預報資料中...'}</span>
      </div>
    );
  } else if (!isFectingForecast && !weatherData.forecast) {
    return (
      <div style={divStyle}>
        <h3>{getCityNameById(selectedCity)} 天氣預報</h3>
        <span>{'無資料'}</span>
      </div>
    );
  }

  const list = weatherData.forecast.list.map((v, k) => {
    return (<div key={k}>
      <ul>
        <li>天氣: {v.weather[0].description}</li>
        <li>
          溫度: {Math.floor(v.main.temp)} ({v.main.temp_min}~{v.main.temp_max})℃
        </li>
        <li>濕度: {v.main.humidity} %</li>
        <li>陣風: {v.wind.speed} m/s</li>
        <li>{v.dt_txt}</li>
      </ul>
    </div>);
  });

  return (
    <div style={divStyle}>
      <h3>{getCityNameById(selectedCity)} 天氣預報</h3>
      <ReloadDataLink
        reloadType="forecast"
        selectedCity={selectedCity}
        onReload={onGetForecastData} />
      {list}
    </div>
  );
};

const AppWeather = ({
    weatherData,
    selectedCity,
    isFectingForecast,
    onGetForecastData,
  }) => {

    return (
      <div>
        {forecastState(weatherData,
          isFectingForecast, selectedCity, onGetForecastData)}
        <hr/>
      </div>
    )
};

AppWeather.propTypes = {
  weatherData: PropTypes.object,
  selectedCity: PropTypes.string,
  isFectingForecast: PropTypes.bool.isRequired,
  onGetForecastData: PropTypes.func.isRequired
}

export default AppWeather;
