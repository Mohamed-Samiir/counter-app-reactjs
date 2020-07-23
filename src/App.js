import React, { Component, Fragment } from "react";
import "./App.css";
import "./components/navbar";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
      { id: 5, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  createId = () => {
    const { counters } = this.state;
    let maxId = 0;
    for (let i = 0; i < counters.length; i++) {
      if (counters[i].id > maxId) maxId = counters[i].id;
    }
    return maxId + 1;
  };

  handleAdd = () => {
    const newCounter = { id: this.createId(), value: 0 };
    const counters = [...this.state.counters, newCounter];
    this.setState({ counters });
  };

  render() {
    return (
      <Fragment>
        <Navbar
          totalCounters={
            this.state.counters.filter((c) => c.value !== 0).length
          }
        />
        <div className="container">
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
            counters={this.state.counters}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
