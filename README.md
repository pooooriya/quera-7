# UseReducer 
```
import React, { useEffect, useReducer, useState } from "react";
import { MessangerLayout } from "./Layout";

const countReducer = (state: any, action: any) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      state = state + action.payload;
      break;
    case "decrement":
      state = state - action.payload;
      break;
    default:
      return state;
  }
  return state;
};

const IntialState = 0;
interface MessangerProps extends React.PropsWithChildren {}
export const Messanger: React.FunctionComponent<MessangerProps> = (props) => {
  const [state, dispatch] = useReducer(countReducer, IntialState); // flux

  // const [count, setcount] = useState<number>(0);
  const handleIncrement = () =>
    dispatch({
      type: "increment",
      payload: 50,
    });
  const handleDecrement = () =>
    dispatch({
      type: "decrement",
      payload: 100,
    });
  return (
    <>
      <h1>hello {state}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>- </button>
    </>
  );
};

```