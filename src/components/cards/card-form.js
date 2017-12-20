import React from 'react';


class CardForm extends React.Component {
  constructor(props){
  super(props);

  let defaultState= {
    title: '',
    categoryId: this.props.categoryId
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.state = this.props.card || defaultState;

}

handleChange(e){
  this.setState( {[e.target.name]: e.target.value} );
}

handleSubmit(e){
  e.preventDefault
  this.props.hander(Object.assign({}, this.state))
}


render() {
  console.log("_CF_STATE", this.state)
  return(

    <form className="cardForm" onSubmit={this.handleSubmit}>

    <label>
    <span>Task Name:</span>
      <input
      type="text"
      name="title"
      value={this.state.title}
      onChange={this.handleChange}
      />
    </label>

    <label>
    <span>Assigned To:</span>
      <input
      type="text"
      name="asigned"
      value={this.state.assigned}
      onChange={this.handleChange} />
    </label>

    <label>
    <span>Note:</span>
      <textarea
      type="text"
      name="note"
      onChange={this.handleChange}>
      {this.state.note}
      </textarea>
    </label>


    <label>
      <span>Priority</span>
        <select
        name="priority"
        onChange={this.handleChange}>

          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>

        </select>

      </label>

      <div className="buttons">
        <button type="submit">Save</button>
      </div>

    </form>


  )
}

}

export default CardForm;
