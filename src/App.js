import React from 'react';
import Section from './components/Section'
import './styles/style.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      basicName : '',
      basicEmail : '',
      basicPhone : '',
      isBasicOn : false,
      isBasicEdit : true
    }
    this.nameHandler = this.nameHandler.bind(this)
    this.emailHandler = this.emailHandler.bind(this)
    this.phoneHandler = this.phoneHandler.bind(this)
    this.handleBasic = this.handleBasic.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
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

  handleEdit(event){
    this.setState({
      isBasicEdit : true
    })
  }

  handleBasic(event){
    this.setState({
      isBasicOn : true,
      isBasicEdit : false
    })
  }
  // handleSubmit(event){
  //   this.setState({
  //     isSubmitOn : true
  //   })
  //   event.preventDefault();
  // }
  render(){
    var basicForm = document.querySelectorAll('.basic input')
    if(this.state.isBasicEdit === false){
      basicForm.forEach(element => element.disabled = true)
    }
    else{
      basicForm.forEach(element => element.disabled = false)
    }
    return (
      <div>
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
            <button type='button' onClick={this.handleBasic}>Confirm</button>
            <button type='button' onClick={this.handleEdit}>Edit</button>
          </fieldset>
          {/* <button type='submit'>Generate CV</button> */}
        </form>
        <div className='CV'>
        {this.state.isBasicOn && <Section name={this.state.basicName} email={this.state.basicEmail} phone={this.state.basicPhone}></Section>}
        </div>
      </div>
    );
  }
}

export default App;
