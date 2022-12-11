import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan';
class App extends Component {
  state = {
    item: [],
    text: ""
  }
  handleChanged = e => {
    this.setState({ text: e.target.value })
  }
  handleAdd = e => {
    if (this.state.text !== "") {
      const items = [...this.state.item, this.state.text];
      this.setState({ item: items, text: "" })
    }
  }
  handleDelete = id => {
    console.log("Its Working", id);
    const oldItem = [...this.state.item];
    console.log(oldItem)
    const newItem = oldItem.filter((ele, i) => i !== id)
    this.setState({ item: newItem });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 py-5 mx-auto shadow">
            <h2 className="text-center text-white">Today's Plan</h2>
            <div className="row">
              <div className="col-sm-9">
                <input type="text"
                  value={this.state.text}
                  onChange={this.handleChanged}
                  className="form-control"
                  placeholder="Write plan here" />
              </div>
              <div className="col-sm-2">
                <button
                  onClick={this.handleAdd}
                  className="btn btn-warning px-3">
                  Add
                </button>
              </div>
            </div>
            <div className="row">
              <ul>
                {this.state.item.map((ele, i) =>
                  <Plan value={ele} id={i} deleteEle={this.handleDelete} />)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
