import React from 'react';
import './App.css';
import jsonLogic from 'json-logic-js';
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Header from './components/Header/Header';
import Button from 'react-bootstrap/Button';
import Footer from './components/Footer/Footer';
import CaseOne from './components/CaseOne/CaseOne';
import CaseTwo from './components/CaseTwo/CaseTwo';
import CaseThree from './components/CaseThree/CaseThree';

class App extends React.Component {
  constructor() {
    var logic = {
      "if": [
        { "<": [{ "var": "temperature" }, 99] }, "No covid symptoms",
        { ">=": [{ "var": "temperature" }, 99] }, "Covid symptoms"
      ]
    };

    var data = { "temperature": 55 }

    super();
    this.state = {
      output: '',
      logic: JSON.stringify(logic),
      data: JSON.stringify(data),
      caseActive: 'caseOne',
      show: false,
      output: ''
    };
  }

  handleCase = (e) => {
    this.setState({
      caseActive: e
    })
  }

  handleClose = () => {
    this.setState({
      show: false,
      output: ''
    })
  }

  handleShow = (e) => {
    this.setState({
      show: true,
      output: e
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(jsonLogic.apply(
      { "var": 1 },
      ["apple", "banana", "carrot"]
    ));
    let logic = e.target.logic.value;
    let data = e.target.data.value;
    console.log(data)
    let outputVal = jsonLogic.apply(JSON.parse(logic), JSON.parse(data));

    console.log(outputVal);

    if (outputVal) {
      this.setState({ output: outputVal.toString() })
    }
    // this.setState((prevState) => ({ output: [...prevState.output, output] }));
  };
  render() {
    return (
      <div className="app">
        <Header />
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
                      <a className={`nav-link ${this.state.caseActive === 'caseOne' ? 'active' : ''}`} onClick={() => this.handleCase('caseOne')}>
                        Case 1
                          </a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${this.state.caseActive === 'caseTwo' ? 'active' : ''}`} onClick={() => this.handleCase('caseTwo')}>
                        Case 2
                          </a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${this.state.caseActive === 'caseThree' ? 'active' : ''}`} onClick={() => this.handleCase('caseThree')}>
                        Case 3
                          </a>
                    </li>
                  </ul>
                </div>
              </div>
              {this.state.caseActive === 'caseOne' && <CaseOne handleOutput={(e) => this.handleShow(e)} />}
              {this.state.caseActive === 'caseTwo' && <CaseTwo handleOutput={(e) => this.handleShow(e)} />}
              {this.state.caseActive === 'caseThree' && <CaseThree handleOutput={(e) => this.handleShow(e)} />}
            </div>
          </React.Fragment>
        </main>
        <Footer />





        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Output</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.output}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
          </Button>
            {/* <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default App;