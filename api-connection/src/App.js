import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newId: 6,
      newTitle: "POSTING",
      newStatus: "PENDING",
      putTitle: "CODING"
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

  handlePOST = () => {
    const Task = {
      Id: 6,
      Title: "POSTING",
      Status: "PENDING"
    };

    //http://localhost:3000/Tasks/3
    axios
      .post("http://localhost:3000/Tasks", {
        Id: this.state.newId,
        Title: this.state.newTitle,
        Status: this.state.newStatus
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleDELETE = () => {
    axios
      .delete("http://localhost:3000/Tasks/6")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handlePUT = () => {
    axios
      .put("http://localhost:3000/Tasks/6", {
        Title: this.state.putTitle
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <center>
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
          <button onClick={() => this.handlePOST()}>ADD DATA</button>
          <button onClick={() => this.handleDELETE()}>DELETE DATA</button>
          <button onClick={() => this.handlePUT()}>CHANGE DATA</button>
        </div>
      </center>
    );
  }
}

export default App;
