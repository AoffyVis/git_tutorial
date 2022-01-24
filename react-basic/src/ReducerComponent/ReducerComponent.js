import { useReducer, useState } from 'react'

const Title = () => <h1>This is Reducer</h1>

function ReducerComponent() {

  // reducer state
  const [count, setCount] = useState(0)
  const reducer = (state,action) => {
      switch(action.type){
          case "ADD" :
              return state+action.payload 
          case "SUB" :
              return state-action.payload 
          case "CLEAR" :
              return 0
          default:
            return 0
      }
  }
  const [result, dispatch] = useReducer(reducer,count)
  return (
    <div align="center" style={{padding:'2rem'}}>
        <Title/>
        <h1>{result}</h1>
        <button onClick={() => dispatch({type:"ADD",payload:10})}>Increase</button>
        <button onClick={() => dispatch({type:"SUB",payload:5})}>Decrease</button>
        <button onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
    </div>
  );
}

export default ReducerComponent;
