import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, counterSelector } from "./store/counter";
import { getTodos, todosSelector } from "./store/todos";

function App() {
  const count = useSelector(counterSelector);
  const todos = useSelector(todosSelector);

  const dispatch = useDispatch();

  return (
    <div>
      <section>
        <h1>RTK Basic</h1>
        <span> Clicked: {count.value} times</span>
        <button id="increment" onClick={() => dispatch(increment())}>
          +
        </button>
        <button id="decrement" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button id="incrementAsync">Increment async</button>
      </section>

      <section>
        <h1>RTK createAsyncThunk</h1>
        <button id="todos" onClick={() => dispatch(getTodos())}>
          get todos
        </button>
        {todos.loading ? <div>loading</div> : null}
        {todos.data ? (
          <article>
            <div>userId: {todos.data.userId}</div>
            <div>title: {todos.data.title}</div>
          </article>
        ) : null}
      </section>
    </div>
  );
}

export default App;
