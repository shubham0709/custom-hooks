import { useState } from "react";
import "./App.css";
import useFetch from "./Hooks/useFetch";
import useTimeout from "./Hooks/useTimeout";

function App() {
  const ready1 = useTimeout(2000);
  const ready2 = useTimeout(5000);

  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(
    `https://api.github.com/search/users?q=${query || "masai"}`
  );
  console.log("data:", data);

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h1>useTimeout</h1>
          {ready1 ? "Ready1" : "Not-Ready1"}
          <br />
          {ready2 ? "Ready2" : "Not-Ready2"}
        </div>

        <div>
          <h1>useFetch</h1>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {loading && "Loading"}
          {data.length > 0 &&
            data.map((item) => {
              return <div key={item.id}>{item.login}</div>;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
