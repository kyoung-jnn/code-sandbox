import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counter";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        Clicked: <span id="value">{count}</span> times
        <button id="increment">+</button>
        <button id="decrement">-</button>
        <button id="incrementIfOdd">Increment if odd</button>
        <button id="incrementAsync">Increment async</button>
      </p>
    </div>
  );
}

export default App;
