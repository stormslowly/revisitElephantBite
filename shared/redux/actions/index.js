import * as ActionTypes from '../constants/index'
import fetch from 'isomorphic-fetch'


export function addNumber(amount =1 ) {
  return {
    type: ActionTypes.ADD_NUMBER,
    amount
  }
}

export function setNumber(number){
  return {
    type:ActionTypes.SET_NUMBER,
    number
  }
}
