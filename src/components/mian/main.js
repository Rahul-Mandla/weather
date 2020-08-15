import React from "react";
import MainWeather from "./mainWeather";
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: 50,
        longitude: 53
      },
      data: {}
    };
  }

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        console.log(newCoords, "newcoords");
        // console.log(`latt is ${lattitude} and long is ${longitude}`)
        this.setState({ coords: newCoords });

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&appid=7fb305d07fac8cc7eb312a8785084448`;
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            this.setState({ data: json });
            console.log(this.state.data);
          });
      });
    } else {
      console.log("not supported");
    }
  };

  render() {
    return (
      <div>
        <MainWeather data={this.state.data} />
      </div>
    );
  }
}
