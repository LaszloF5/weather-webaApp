import React from "react";

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
  return (
    <div>
      {weeklyData.time.length > 0 ? (
        <>
          {" "}
          <h1>Weekly forecast</h1>
          <table>
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
        ""
      )}
    </div>
  );
};

export default WeeklyForecast;
