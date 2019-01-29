import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      array: []
    };
    //this.displayData = this.displayData.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/Tasks")
      .then(response => {
        // create an array of contacts only with relevant data
        const tasks = response.data.map(c => {
          return {
            id: c.Id,
            title: c.Title,
            status: c.Status
          };
        });
        this.setState({ data: tasks });

        // create a new "State" object without mutating
        // the original State object.

        // store the new state object in the component's state

        //this.convertData(this.state.data);
      })
      .catch(error => console.log(error));
  }

  convertData = data => {
    let converted = Object.entries(data);
    this.setState({ array: converted });
  };

  displayData = data => {
    data.map((post, index) => {
      console.log(post.id);
    });
  };

  render() {
    console.log(this.state.data);
    //this.displayData(this.state.data);
    return (
      <div>
        <p>Hello World</p>
        <div>
          {this.state.data.map((post, index) => {
            return (
              <div key={index}>
                <h1>{post.id}</h1>
                <p>{post.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
