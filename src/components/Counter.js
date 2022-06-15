import {useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement,incrementbyAmount} from "../redux/counter/counterSlice";


function Counter() {
  const [amount,setAmount] = useState(3);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div className='App'>
    <h1>{countValue}</h1>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <br /><br />
    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
    <button onClick={() => dispatch(incrementbyAmount(amount))}>Increment by Amount</button>
    </div>
  )
}

export default Counter;