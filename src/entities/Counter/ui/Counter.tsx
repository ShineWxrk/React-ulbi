import Button, { ButtonTheme } from "shared/ui/Button/Button"
import { counterActions } from "../model/slice/counterSlice"
import { useDispatch, useSelector } from "react-redux"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"


export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector((state: StateSchema) => state.counter.value)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid='value-title'>value = {counterValue}</h1>
      <Button data-testid='increment-btn' onClick={increment} theme={ButtonTheme.BACKGROUND}>
        increment
      </Button>
      /
      <Button data-testid='decrement-btn' onClick={decrement} theme={ButtonTheme.BACKGROUND}>
        decrement
      </Button>
    </div>
  )
}

export default Counter
