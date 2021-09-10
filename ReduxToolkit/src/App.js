import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, counterSelector } from "./redux/counter";

function App() {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        Clicked: <span id="value">{count.value}</span> times
        <button id="increment" onClick={() => dispatch(increment())}>
          +
        </button>
        <button id="decrement" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button id="incrementAsync">Increment async</button>
      </p>
      <p>
        <span>todos</span>
        <button id="todos">get todos</button>
        {count.data}
      </p>
    </div>
  );
}

export default App;
