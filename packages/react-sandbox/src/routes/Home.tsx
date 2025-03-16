import { Link } from "react-router";
import { URL_PATH } from "../constants/urlPath";

function Home() {
  return (
    <>
      <h1>🛝 React SandBox</h1>
      <ul>
        <li>
          <Link to={URL_PATH.debounce}>debounce</Link>
        </li>
        <li>
          <Link to={URL_PATH.throttle}>throttle</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
