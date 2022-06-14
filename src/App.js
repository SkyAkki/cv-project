import React from 'react';
import Section from './components/Section'
import './styles/style.css'
import ConfirmButton from './components/ConfirmButton'
import EditButton from './components/EditButton'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isBasicOn : false,
      isBasicEdit : true
    }
    this.setBasicAndEdit = this.setBasicAndEdit.bind(this)
  }
  setBasicAndEdit(basicValue,editValue){
    this.setState({
      isBasicOn : basicValue,
      isBasicEdit : editValue
    })
  }
  render(){
    return (
      <div>
        <Section></Section>
        <ConfirmButton setBasicAndEdit = {this.setBasicAndEdit} editProp = {this.state.isBasicEdit}></ConfirmButton>
        <EditButton setBasicAndEdit = {this.setBasicAndEdit}/>
      </div>
    );
  }
}

export default App;
