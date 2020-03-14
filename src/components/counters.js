import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterId => {
    let temp = [...this.state.counters];
    let index = temp.findIndex(t => t.id === counterId);
    temp.splice(index, 1);
    this.setState({ counters: temp });
  };
  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = counterId => {
    let temp = [...this.state.counters];
    let index = temp.findIndex(t => t.id === counterId);
    temp[index].value++;
    this.setState({ counters: temp });
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(c => (
          <Counter
            key={c.id}
            counter={c}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
