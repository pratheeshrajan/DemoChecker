import React from 'react';
import './App.css';
import jsonLogic from 'json-logic-js';

class App extends React.Component {
  constructor() {
    var logic = {"if" : [
      {"<": [{"var":"temperature"}, 99] }, "No covid symptoms",
      {">=": [{"var":"temperature"}, 99] }, "Covid symptoms"
    ]};

    var data = {"temperature":55}

    super();
    this.state = {
      output: '',
      logic: JSON.stringify(logic),
      data: JSON.stringify(data)
    };
  }
  submitForm = (e) => {
    e.preventDefault();
    console.log(jsonLogic.apply(
      {"var" : 1 },
      [ "apple", "banana", "carrot" ]
    ));
    let logic = e.target.logic.value;
    let data = e.target.data.value;
    let outputVal = jsonLogic.apply(JSON.parse(logic), JSON.parse(data));

    console.log(outputVal);

    if(outputVal) {
    this.setState({output: outputVal.toString()})
    }
    // this.setState((prevState) => ({ output: [...prevState.output, output] }));
  };
  render() {
    return (
      <div className="app">
        <form onSubmit={(e) => this.submitForm(e)}>
          <label>Logic:</label><br/>
          <textarea rows="7" cols="130" name="logic" defaultValue={this.state.logic}></textarea>
          <br/>
          <label >Data:</label><br/>
          <textarea rows="7" cols="130" name="data" defaultValue={this.state.data}></textarea>
          &nbsp;&nbsp;
          <button type="submit">Submit</button>
        </form>
        <label>Output:</label>
    <div id="output">{this.state.output}</div>
      </div>
    );
  }
}
export default App;