import React from 'react'
import ReactDOM from 'react'
import '../styles/style.css'

class Section extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className='component'>
                <h1 className='headerName'>{this.props.name}</h1>
                <h4>{this.props.email}</h4>
                <h4>{this.props.phone}</h4>
            </div>
        )
    }
}

export default Section