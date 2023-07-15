'use client'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { CounterActions } from "./slice/cartSlice";

const CounterView=()=>{
  const dispatch = useDispatch();

    const counterValue = useSelector(
      (state:RootState)=>state.CounterSlice.value);

    const increment = () => {
      dispatch(CounterActions.increment());
    };

    const decrement = () => {
      dispatch(CounterActions.decrement());
    };

    return (
        <div className='py-6 flex gap-6 justify-center'>
        <button className='py-4 px-3 rounded-md bg-green-500' onClick={increment}>Increment</button>
      <div>Counter Value {counterValue}</div>
        <button className='py-4 px-3 rounded-md bg-red-400' onClick={decrement}>Decrement</button>
      </div>
    
    )
}
export default CounterView;