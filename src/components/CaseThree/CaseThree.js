import React from 'react';
import jsonLogic from 'json-logic-js';


class CaseThree extends React.Component {

    state = {
        inputValue: ''
    }
    obj = "";
    componentDidMount() {

        this.obj = {
            "if": [
                { "==": [{ "var": "critical" }, "yes"] }, "Call 911 and take help immediately!",
                { "==": [{ "var": "critical" }, "no"] }, "You are good!"
            ]
        }; const pretty = JSON.stringify(this.obj, undefined, 2);
        const ugly = document.getElementById('myTextArea').value;
        document.getElementById('myTextArea').value = pretty;
    }

    submitForm = (e) => {
        e.preventDefault();
        let paramName = e.target.input1.value;
        let paramValue = e.target.input2.value;
        console.log(paramValue);
        console.log(paramName);
        let stringValue = "{" + `"` + paramName + `"` + ":" + `"` + paramValue + `"` + "}";
        console.log(stringValue);
        let data = {};
        data.paramName = paramValue;
        console.log(data);
        console.log(JSON.parse(stringValue));
        let outputVal = jsonLogic.apply(this.obj, JSON.parse(stringValue));

        console.log(outputVal);
        this.props.handleOutput(outputVal);
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="cases">
                <div className="row">
                    <div className="col">
                        <form onSubmit={(e) => this.submitForm(e)}>

                            <textarea id="myTextArea" name="username" cols="50" rows="10"></textarea>
                            <div class="form-row">
                                <div class="col-4">
                                    <input type="text" name="input1" class="form-control" defaultValue="critical" placeholder="Critically ill?" />
                                </div>
                                <div class="col-4">
                                    <input type="text" name="input2" class="form-control" defaultValue="yes" placeholder="Enter Value" />
                                </div>
                                <div class="col-4">
                                    <button type="submit" class="btn btn-primary w-100">Submit</button>
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
export default CaseThree;