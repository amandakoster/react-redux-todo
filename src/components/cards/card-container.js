import React from 'react';
import {connect} from 'react-redux';
import {cardCreate, cardUpdate, cardDelete} from './card-actions';

import CardList from './card-list';

class CardContainer extends React.Component {

  render() {

    return(

      <CardList
      categoryId={this.props.categoryId}
      cards={this.props.cards}
      handleAdd={this.props.cardCreate}
      handleDelete={this.props.cardDelete}
      handleUpdate={this.props.cardUpdate}
      />

    )
  }
}

const mapStateToProps = (state) => ({
  cards:state.cards
});

const mapDispatchTpProps = (dispatch, getState) => ({
  cardCreate: card => dispatch( cardCreate(card) ),
  cardDelete: card => dispatch( cardDelete(card) ),
  cardUpdate: card => dispatch( cardUpdate(card) ),
});

export default connect(mapStateToProps, mapDispatchTpProps)(CardContainer);
