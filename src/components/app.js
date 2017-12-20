import React from 'react'
import CardForm from './cards/card-form';

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(


              <div>
                      <h1>Hello World</h1>
                      <CardForm />
               </div>
        )
    }
}

export default App;
