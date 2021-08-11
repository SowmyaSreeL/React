import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { counterActions } from '../store/counterSlice';
// import { Component } from 'react';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterSliceKey.counter);
  const show = useSelector(state => state.counterSliceKey.showCounter);

  const incrementHandler = () => {
    //dispatch({type: 'INC'})
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    // dispatch({type: 'DEC'})
    dispatch(counterActions.decrement());
  }
  const increaseHandler= () => {
    dispatch(counterActions.increase(10))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment Counter</button>
        <button onClick={decrementHandler}>Decrement Counter</button>
        <button onClick={increaseHandler}>Increase Counter</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

//CBC
// class Counter extends Component {

//   incrementHandler = () => {
//     this.props.increment();
//   }
//   decrementHandler = () => {
//     this.props.decrement();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counterProp}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment Counter</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement Counter</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counterProp: state.counter
//   }
// }

// const dispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: 'INC'}),
//     decrement: () => dispatch({type: 'DEC'})
//   }
// }

// export default connect(mapStateToProps, dispatchToProps) (Counter);

export default Counter;