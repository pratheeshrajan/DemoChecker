import React from 'react';
import './App.css';
import jsonLogic from 'json-logic-js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CaseOne from './components/CaseOne/CaseOne';
import CaseTwo from './components/CaseTwo/CaseTwo';
import CaseThree from './components/CaseThree/CaseThree';

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
      data: JSON.stringify(data),
      caseActive:'caseOne'
    };
  }

  handleCase = (e)=>{
    this.setState({
      caseActive:e
    })

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
      <Header/>
          {/* <form onSubmit={(e) => this.submitForm(e)}>
            <label>Logic:</label><br/>
            <textarea rows="7" cols="130" name="logic" defaultValue={this.state.logic}></textarea>
            <br/>
            <label >Data:</label><br/>
            <textarea rows="7" cols="130" name="data" defaultValue={this.state.data}></textarea>
            &nbsp;&nbsp;
            <button type="submit">Submit</button>
          </form>
          <label>Output:</label>
      <div id="output">{this.state.output}</div> */}
      <main>
        <React.Fragment>
        <div className="container">        
          <div className="media-container-row">
              <div className="col-12 col-md-8">
                  <ul className="nav nav-tabs border-0 border-radius-0" role="tablist">
                      <li className="nav-item">
                      <a className={`nav-link ${this.state.caseActive === 'caseOne'?'active':''}`} onClick={() => this.handleCase('caseOne')}>
                          Case 1
                          </a>
                      </li>
                      <li className="nav-item">
                      <a className={`nav-link ${this.state.caseActive === 'caseTwo'?'active':''}`} onClick={() => this.handleCase('caseTwo')}>
                          Case 2
                          </a>
                      </li>
                      <li className="nav-item">
                      <a className={`nav-link ${this.state.caseActive === 'caseThree'?'active':''}`} onClick={() => this.handleCase('caseThree')}>
                          Case 3
                          </a>
                      </li>
                  </ul>                
              </div>
          </div>
          {this.state.caseActive === 'caseOne' && <CaseOne/> }
          {this.state.caseActive === 'caseTwo' && <CaseTwo/> }
          {this.state.caseActive === 'caseThree' && <CaseThree/>}
      </div>
        </React.Fragment>
      </main>
      <Footer/>
    </div>
    );
  }
}
export default App;