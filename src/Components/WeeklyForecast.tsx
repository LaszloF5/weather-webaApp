import React, {useEffect} from "react";
import "../Styles/WeeklyForecast.css";

interface DailyData {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
  precipitation_sum: number[];
}

interface WeeklyForecastProps {
  weeklyData: DailyData;
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ weeklyData }) => {

  useEffect(() => {
    document.title = "Weather info | Weekly forecast";
  }, []);

  return (
    <div className="weekly-container">
      {weeklyData.time.length > 0 ? (
        <>
          {" "}
          <h2 className="weekly-h2">Weekly forecast</h2>
          <table className="weekly-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Max Temperature</th>
                <th>Min Temperature</th>
                <th>Sunrise</th>
                <th>Sunset</th>
                <th>Max UV Index</th>
                <th>Precipitation</th>
              </tr>
            </thead>
            <tbody>
              {weeklyData.time.map((date, index) => {
                return (
                  <tr key={index}>
                    <td>{date}</td>
                    <td>{weeklyData.temperature_2m_max[index]} °C</td>
                    <td>{weeklyData.temperature_2m_min[index]} °C</td>
                    <td>{weeklyData.sunrise[index].slice(11)}</td>
                    <td>{weeklyData.sunset[index].slice(11)}</td>
                    <td>{weeklyData.uv_index_max[index]}</td>
                    <td>{weeklyData.precipitation_sum[index]} mm</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <p className="response-p">No data available!</p>
      )}
    </div>
  );
};

export default WeeklyForecast;
