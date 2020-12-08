import React from 'react';
import jsonLogic from 'json-logic-js';

class CaseTwo extends React.Component {

    state = {
        inputValue: ''
    }
    obj = ""
    componentDidMount() {
        this.obj = {
            "and": [
                {
                    ">": [
                        {
                            "var": "temperature"
                        },
                        99
                    ]
                },
                {
                    "==": [
                        {
                            "var": "lost_smell"
                        },
                        "true"
                    ]
                }
            ]
        };
        const pretty = JSON.stringify(this.obj, undefined, 2);
        const ugly = document.getElementById('myTextArea').value;
        document.getElementById('myTextArea').value = pretty;
    }
    handleSubmit = (e) => {

        e.preventDefault();
        let paramName1 = e.target.input1.value;
        let paramValue1 = e.target.input2.value;
        let paramName2 = e.target.input3.value;
        let paramValue2 = e.target.input4.value;

        let stringValue = "{" + `"` + paramName1 + `"` + ":" + `"` + paramValue1 + `",`
            + `"` + paramName2 + `"` + ":" + `"` + paramValue2 + `"`
            + "}";
        console.log(stringValue);
        // let data = {};
        // data.paramName = paramValue;
        // console.log(data);
        // console.log(JSON.parse(stringValue));
        let outputVal = jsonLogic.apply(this.obj, JSON.parse(stringValue));
        console.log(outputVal);
        if (outputVal) {
            this.props.handleOutput("You have severe covid symptoms!");

        } else {
            this.props.handleOutput("You have no covid symptoms!");

        }


        // this.props.handleOutput(this.state.inputValue);
    }

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // }
    render() {
        return (
            <div className="cases">
                <div className="row">
                    <div className="col">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <textarea id="myTextArea" name="username" cols="50" rows="10"></textarea>
                            <div className="form-row  mb-2">
                                <div className="col">
                                    <input type="text" name="input1" defaultValue="temperature" className="form-control" placeholder="Enter first param name" />
                                </div>
                                <div className="col">
                                    <input type="text" name="input2" defaultValue="100" className="form-control" placeholder="Enter first param value" />
                                </div>
                            </div>
                            <div className="form-row mb-2">
                                <div className="col">
                                    <input type="text" name="input3" defaultValue="lost_smell" className="form-control" placeholder="Enter second param name" />
                                </div>
                                <div className="col">
                                    <input type="text" name="input4" defaultValue="true" className="form-control" placeholder="Enter second param value" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <button type="submit" className="btn btn-primary w-100" >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/LampFlowchart.svg/1200px-LampFlowchart.svg.png" />
                    </div>
                </div>
            </div>
        );
    }

}
export default CaseTwo;