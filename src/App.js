import React from 'react';
import Section from './components/Section'
import './styles/style.css'
import Education from './components/Education'

class App extends React.Component {
  render(){
    return (
      <div className='resume'>
        <Section></Section>
        <Education></Education>
      </div>
    );
  }
}

export default App;
