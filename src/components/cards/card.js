import React from 'react';
import CardForm from './card-form'
import renderIf from '../lib/_.js'

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {editing: false}
  }

  render() {
    let {card, categoryId, handleDelete} = this.props

    return(

      <div key={card.id} className="card">

      <div>{card.title}</div>

      <div className="actions">
        <a href="#" onClick={() => handleDelete(card)}></a>
      </div>

      {renderIf(
        this.state.editing,
          <CardForm
            handler={this.handleUpdate}
            card={card}
            categoryId={categoryId}
      )}

      </div>
    )
  }
}

export default Card;
