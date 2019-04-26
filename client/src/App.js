import React, { Component } from "react";
import "./App.css";
import logo from "./logo.jpg";
class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res =>
        this.setState({ response: [res.title, res.desc, res.start, res.end] })
      )
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch(`/api/get`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <p className="text">
            Dabar per
            <a
              href="https://www.lrt.lt/mediateka/tiesiogiai/lrt-televizija"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="Logo" src={logo} />
            </a>
            rodome:
          </p>
          <div className="row">
            <div className="col-12 title">
              {this.state.response[2]} - {this.state.response[3]}{" "}
              <span>{this.state.response[0]}</span>
            </div>
            <div className="col-12">{this.state.response[1]}</div>
          </div>
          <p className="link">
            <a
              href="https://www.lrt.lt/mediateka/tiesiogiai/lrt-televizija"
              target="_blank"
              rel="noopener noreferrer"
            >
              TIESIOGIAI
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default App;
