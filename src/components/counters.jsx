import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, onDecrement, onAdd } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-1">
            <button onClick={onReset} className="btn btn-dark btn-md">
              Reset
            </button>
          </div>
          <div className="col">
            <button onClick={onAdd} className="btn btn-success btn-md">
              Add Counter
            </button>
          </div>
        </div>

        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
