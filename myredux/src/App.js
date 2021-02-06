import logo from './logo.svg';
import './App.css';
import Counter from './component/counter';
import { createStore } from 'redux';

import {Provider} from 'react-redux';
const initialState = {
  count:2
}

const reducer = (state=initialState, action)=>{
  switch(action.type){
    case "SAVE" :
      return {
        ...state,
        count: state.count + 1
      }
      case "WITHDRAW" :
      return {
        ... state,
        count: state.count  -1
      }
      default :
      return state;
  }
}

;
const myStore= createStore(reducer)

function App() {
  return (
    <Provider store= {myStore}>
    <div className="App">
    <h1>Redux practice </h1>
    <p>The connect() function connects a React component to a Redux store. <br/>It provides its connected component with the pieces of the data it needs from the store, <br/> and the functions it can use to dispatch actions to the store.</p>
    <Counter />
    
  </div>
    </Provider>
   
  );
}

export default App;
