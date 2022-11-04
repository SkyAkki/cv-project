import React from "react";

class GenericSection extends React.Component{
    constructor(props){
        super(props)
        this.setSubmitAndEdit = this.setSubmitAndEdit.bind(this);
    }
    setSubmitAndEdit(submitValue, editValue) {
        this.setState({
          isEdit : editValue,
          isSubmit : submitValue
        })
    }
    addSection(event){
        console.log(event)
    }
}

export default GenericSection