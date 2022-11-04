import React from "react";

class AddButton extends React.Component{
    render(){
        return(
            <button type='button' onClick={this.props.addSection}>{`Add ${this.props.parentName}`}</button>
        )
    }
}
export default AddButton