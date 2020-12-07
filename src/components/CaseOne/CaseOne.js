import React from 'react';

class CaseOne extends React.Component {

    state={
        inputValue:''
    }
    componentDidMount(){
           const obj={"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}
            const pretty = JSON.stringify(obj, undefined, 2);
            const ugly = document.getElementById('myTextArea').value;
            document.getElementById('myTextArea').value = pretty;
    }

    handleSubmit = ()=>{
        this.props.handleOutput(this.state.inputValue);
    }

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
                            <textarea id="myTextArea" name="username" cols="50" rows="10"></textarea>
                            <div class="form-row">
                                <div class="col-8">
                                    <input type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleInputChange}   class="form-control" placeholder="Enter Input"/>
                                </div>
                                <div class="col-4">
                                <button type="submit" onClick={this.handleSubmit} class="btn btn-primary w-100">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/LampFlowchart.svg/1200px-LampFlowchart.svg.png"/>
                        </div>
                    </div>
               </div>
                );
            }

        }
        export default CaseOne;