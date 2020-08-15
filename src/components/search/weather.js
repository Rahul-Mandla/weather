import React from "react";

const Weather = (props) => {
  console.log(props, "props");
  return (
    <div>
      {/* {props.data.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
          </div>
        );
      })} */}
    </div>
  );
};

export default Weather;
