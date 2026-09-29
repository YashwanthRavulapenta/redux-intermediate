import { useDispatch} from 'react-redux'
import { decrementAction, incrementAction } from '../Redux/Actions/counterAction'
import { resetAction } from '../Redux/Actions/counterAction'

const Counter = () => {

    const dispatch = useDispatch()
    function handelIncrement(){
        dispatch(incrementAction())
    }

    function handelDecrement(){
        dispatch(decrementAction())
    }

    function handelResetButton(){
        dispatch(resetAction())
    }

  return (
    <div>
        <button onClick={handelIncrement}>Increment</button>
        <button onClick={handelDecrement}>Decrement</button>
        <button onClick={handelResetButton}>Reset</button>
    </div>
  )
}

export default Counter