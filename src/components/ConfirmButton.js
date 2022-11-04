import React from "react";

class ConfirmButton extends React.Component{
    constructor(props){
        super(props);
        this.handleBasic = this.handleBasic.bind(this);
    }
    handleBasic(event){
        this.props.setSubmitAndEdit(true,false);
    }
    render(){
        var formElement = document.querySelectorAll(`.${this.props.parentSection} input`);
        if(this.props.editProp === false){
            formElement.forEach(element => element.disabled = true);
        }
        else{
            formElement.forEach(element => element.disabled = false);
        }
        return (
            <button type='button' onClick={this.handleBasic}>Confirm</button>
        )
    }
}

export default ConfirmButton