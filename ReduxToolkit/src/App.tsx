import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, counterSelector } from "./redux/counter";
import { getTodos, todosSelector } from "./redux/todos";

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
      </section>

      <section>
        <h1>RTK createAsyncThunk</h1>
        <button id="todos" onClick={() => dispatch(getTodos())}>
          get todos
        </button>
        {todos.isLoading ? (
          <div>loading...</div>
        ) : todos.data ? (
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
