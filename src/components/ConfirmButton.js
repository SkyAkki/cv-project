import React from "react";

class ConfirmButton extends React.Component{
    constructor(props){
        super(props)
        this.handleBasic = this.handleBasic.bind(this)
    }
    handleBasic(event){
        this.props.setBasicAndEdit(true,false)
      }
    render(){
        var basicForm = document.querySelectorAll('.basic input')
        if(this.props.editProp === false){
        basicForm.forEach(element => element.disabled = true)
        }
        else{
        basicForm.forEach(element => element.disabled = false)
        }
        return (
            <button type='button' onClick={this.handleBasic}>Confirm</button>
        )
    }
}

export default ConfirmButton