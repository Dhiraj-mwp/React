
// import redux from 'redux';
import { createStore } from "redux";

const initialSate = { counter : 0, showCounter: true }
const counsterReducer = (state = initialSate , action) => {
if(action.type === 'increment'){
 return {
    counter : state.counter + 1,
    showCounter: state.showCounter
 }
}

if(action.type === 'increase'){
   return {
      counter : state.counter + action.amount,
      showCounter: state.showCounter
   }
  }

 if(action.type === 'decrement'){
    return {
       counter : state.counter - 1,
       showCounter: state.showCounter
    }
}

if(action.type === 'toggle'){
   return {
      counter : state.counter,
      showCounter: !state.showCounter
   }
}
  return state;
};

const reduxStore = createStore(counsterReducer);

export default reduxStore;
