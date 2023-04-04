import classes from './Counter.module.css';
import {useSelector, useDispatch, connect} from 'react-redux'
import { Component } from 'react';

const Counter = () => {
  const dispatchAction =useDispatch();
  const counter = useSelector(state => state.counter);
 
  const showToggle = useSelector(state => state.showCounter);
 
  const incrementCounterHandler = () => {
    dispatchAction({type:'increment'})
  };
  const decrementCounterHandler = () => {
    dispatchAction({type:'decrement'})
  };
  const increseCounterHandler = () =>{
    dispatchAction({type: 'increase', amount :5})
  }
  
  const toggleCounterHandler = () => {
    dispatchAction({type: 'toggle'})
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle && <div className={classes.value}>{counter}</div>}
   <div>
    <button onClick={incrementCounterHandler}>Increment</button>
    <button onClick={increseCounterHandler}>Iecrement by 5</button>
    <button onClick={decrementCounterHandler}>Decrement</button>
   </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;



// class base component using redux

// class Counter extends Component{
//   incrementCounterHandler(){
//     this.props.increment();
//   };
//   decrementCounterHandler(){
//     this.props.decrement()
//   }
//   toggleCounterHandler(){

//   }

//   render(){
//     return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//    <div>
//     <button onClick={this.incrementCounterHandler.bind(this)}>Increment</button>
//     <button onClick={this.decrementCounterHandler.bind(this)}>Decrement</button>
//    </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// }
// }


// const mapStateToProps = state => {
//   return {
//     counter : state.counter
//   }
// }

// const mapDispatchToProp = dispatch =>{
//   return {
//     increment: () => dispatch({type:'increment'}),
//     decrement: () => dispatch({type:'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProp)(Counter);
