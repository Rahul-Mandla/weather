import React from "react";

const MainWeather = (props) => {
  console.log("props", props);
  return (
    <div>
      <p>{props.data.weather[0].main}</p>
    </div>
  );
};
export default MainWeather;
