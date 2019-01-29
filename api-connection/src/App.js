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
      })
      .catch(error => console.log(error));
  }

  handleClick = () => {
    const Task = {
      Id: 6,
      Title: "POSTING",
      Status: "PENDING"
    };

    axios.post(`http://localhost:3000/Tasks`, { Task }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
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
        <button onClick={() => this.handleClick()}>CLICK ME</button>
      </div>
    );
  }
}

export default App;
