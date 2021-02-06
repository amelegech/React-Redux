import React from "react";
import {connect} from 'react-redux';

const counter = (props) => {
  const incrementHandler = () => {
      props.dispatch({type:"SAVE"})
  };
  const decrementHandler = () => {
    props.dispatch({type:"WITHDRAW"})
  };
  return (
    <div>
      <h3>{props.UpdateCount}</h3>
      <button onClick={incrementHandler}>save</button>
      <button onClick={decrementHandler}>withdraw</button>
    </div>
  );
};
 const mapStateToProps= state =>({
     UpdateCount: state.count
 })
export default connect(mapStateToProps)(counter);
