import React from "react";
class EditButton extends React.Component{
    constructor(props){
        super(props)
        this.handleEdit = this.handleEdit.bind(this)
    }
    handleEdit(event){
        this.props.setBasicAndEdit(false,true)
      }
    render(){
        return(
            <button type='button' onClick={this.handleEdit}>Edit</button>
        )
    }
}
export default EditButton