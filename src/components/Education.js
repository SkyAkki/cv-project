import React from "react";
import AddButton from "./AddButton";
import ConfirmButton from './ConfirmButton';
import EditButton from './EditButton';
import GenericSection from "./GenericSection";

class Education extends GenericSection{
    constructor(props){
        super(props)
        this.state = {
            school : '',
            qual : '',
            isEdit : true,
            isSubmit : true
        }
        this.schoolHandler = this.schoolHandler.bind(this);
        this.qualHandler = this.qualHandler.bind(this);
        this.percentHandler = this.percentHandler.bind(this);
    }
    schoolHandler(event){
        this.setState({
            school : event.target.value
        })
    }
    qualHandler(event){
        this.setState({
            qual : event.target.value
        })
    }
    percentHandler(event){
        this.setState({
            percentage : event.target.value
        })
    }
    render() {
        return (
            <form>
                <fieldset className='education'>
                    <legend>Educational Experience</legend>
                    <ul>
                        <li>
                            <label htmlFor="school">School Name : </label>
                            <input type='text' id='school' name='school' placeholder="Enter College/School name" value={this.state.school} onChange={this.schoolHandler}></input>
                        </li>
                        <li>
                            <label htmlFor="qualification">Qualification : </label>
                            <input type='text' placeholder="Eg. Bachelors in Engineering" id="qualification" name="qualification" value={this.state.qual} onChange={this.qualHandler}></input>
                        </li>
                        <li>
                            <label htmlFor="percentage">Final percentage : </label>
                            <input type='number' placeholder="90.8%" id="percentage" name="percentage" value={this.state.percentage} onChange={this.percentHandler}></input>
                        </li>
                    </ul>
                </fieldset>
                <ConfirmButton setSubmitAndEdit = {this.setSubmitAndEdit} editProp = {this.state.isEdit} parentSection = 'education'></ConfirmButton>
                <EditButton setSubmitAndEdit = {this.setSubmitAndEdit}/>
                <AddButton addSection = {this.addSection} parentName='Education'></AddButton>
            </form>
        );
    }

}
export default Education