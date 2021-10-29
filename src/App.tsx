import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./features/store";
import { increment } from "./features/counterSlice";
import { useFetchBreedQuery } from "./features/dogsApiSlice";

function App() {
  const [limitValue, setLimitValue] = useState<number>(5);
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { data = [], isLoading } = useFetchBreedQuery(limitValue);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            count is: {value}
          </button>
        </p>
        <select
          value={limitValue}
          onChange={(e) => setLimitValue(parseInt(e.target.value, 10))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        {isLoading && <p>Is Loading</p>}
        {data.map((item) => {
          return <img src={item.image.url} alt={item.name} />;
        })}
      </header>
    </div>
  );
}

export default App;
