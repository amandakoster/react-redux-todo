import uuid from 'uuid/v4';

export const cardCreate = (card) => {
  card.id=uuid();
  card.createDate = new Date();

  return {
    type:"CARD ADD",
    payload: card
  }
};

export const cardDelete = (card) => {
  return{
    type:"CARD DELETE"
    payload: card
  }
}

export const cardUpdate = (card) => {
  return{
    type:"CARD UPDATE"
    payload: card
  }
}
