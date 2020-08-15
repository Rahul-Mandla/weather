import React from "react";
import { FormGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import Weather from "./weather";
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
      loading: true
    };
    console.log(this.state.query);
  }

  search = async () => {
    const apiKey = "7fb305d07fac8cc7eb312a8785084448";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    this.setState({ data: data });
  };

  // search = () => {
  //   const apiKey = "7fb305d07fac8cc7eb312a8785084448";
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=${apiKey}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       this.setState({
  //         items: {
  //           counrty: json.sys.country,
  //           city: json.name,
  //           weather: json.weather.description
  //         }
  //       });
  //     });
  // };

  render() {
    return (
      <div>
        <div className="search m-5">
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                onChange={(event) =>
                  this.setState({ query: event.target.value })
                }
              />
              <Button onClick={() => this.search()} className="ml-5">
                Search
              </Button>
            </InputGroup>
          </FormGroup>
        </div>
        <Weather data={this.state.data} />
      </div>
    );
  }
}
