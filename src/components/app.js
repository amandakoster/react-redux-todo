import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props)
    }

  componentDidMount(){
    console.log('_STATE_', this.state)
  }

    render(){
        return(


              <div>
                        <h1>Hello World</h1>
              </div>
        )
    }
}

export default App;
