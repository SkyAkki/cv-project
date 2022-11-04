import React from 'react';
import '../styles/style.css';
import ConfirmButton from './ConfirmButton';
import EditButton from './EditButton';
import GenericSection from './GenericSection';

class Section extends GenericSection{
    constructor(props){
        super(props)
        this.state = {
            basicName : '',
            basicEmail : '',
            basicPhone : '',
            isEdit : true,
            isSubmit : true,
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);
    }
    nameHandler(event){
        this.setState({
          basicName : event.target.value
        })
    }
    emailHandler(event){
        this.setState({
          basicEmail : event.target.value
        })
    }
    phoneHandler(event){
        this.setState({
          basicPhone : event.target.value
        })
    }
    render() {
        return(
        <form className="basicForm">
          <fieldset className='basic'>
            <legend>Basic Information</legend>
            <ul>
              <li>
                <label htmlFor='basicName'>Name : </label>
                <input name='basicName' id='basicName' type='text' value={this.state.basicName} onChange={this.nameHandler} placeholder='Your name'></input>
              </li>
              <li>
                <label htmlFor='email'> Email : </label>
                <input type='email' name='email' id='email' value={this.state.basicEmail} onChange={this.emailHandler} placeholder='Your E-mail Address'></input>
              </li>
              <li>
                <label htmlFor='phone'>Phone number : </label>
                <input type='tel' id='phone' name='phone' value={this.state.basicPhone} onChange={this.phoneHandler} placeholder='Your mobile Number'></input>
              </li>
            </ul>
          </fieldset>
          <ConfirmButton setSubmitAndEdit = {this.setSubmitAndEdit} editProp = {this.state.isEdit} parentSection = 'basic'></ConfirmButton>
          <EditButton setSubmitAndEdit = {this.setSubmitAndEdit}/>
        </form>
            // <div className='component'>
            //     <h1 className='headerName'>{this.props.name}</h1>
            //     <h4>{this.props.email}</h4>
            //     <h4>{this.props.phone}</h4>
            // </div>
        )
    }
}

export default Section