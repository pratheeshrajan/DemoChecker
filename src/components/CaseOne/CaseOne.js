import React from 'react';
import jsonLogic from 'json-logic-js';


class CaseOne extends React.Component {

    state = {
        input1: '',
        input2: ''
    }
    obj = ""
    componentDidMount() {
        this.obj = {
            "if": [
                { "<": [{ "var": "temperature" }, 99] }, "No covid symptoms",
                { ">=": [{ "var": "temperature" }, 99] }, "Covid symptoms"
            ]
        };
        const pretty = JSON.stringify(this.obj, undefined, 2);
        const ugly = document.getElementById('myTextArea').value;
        document.getElementById('myTextArea').value = pretty;
    }

    handleSubmit = (event) => {
        console.log(event.target);
        // let paramName = event.target.input1.value;
        // let paramValue = event.target.input2.value;

        // let outputVal = jsonLogic.apply(this.obj, {paramName: paramValue});

        // console.log(outputVal);

        //         // console.log(outputVal);
        // console.log(event);
        this.props.handleOutput("test");
    }

    // handleInputChange = event => {
    //     // let inputValue = "{"+event.targ
    //     let inputName = event.target.input1.value;
    //     let inputValue = event.target.input2.value;
    //     this.setState({
    //     })
    //     // console.log(event);
    //     // const { name, value } = event.target;
    //     // this.setState({
    //     //   [name]: value
    //     // });
    //   }

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

    render() {
        return (

            <div className="cases">

                <div className="row">
                    <div className="col">
                        <form onSubmit={(e) => this.submitForm(e)}>

                            <textarea id="myTextArea" name="username" cols="50" rows="10"></textarea>
                            <div class="form-row">
                                <div class="col-4">
                                    <input type="text" name="input1" class="form-control" defaultValue="temperature" placeholder="Enter Parameter Name" />
                                </div>
                                <div class="col-4">
                                    <input type="text" name="input2" class="form-control" defaultValue="100" placeholder="Enter Value" />
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
export default CaseOne;