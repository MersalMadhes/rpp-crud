import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReverseInteger from "./ReverseInteger";
import StaircaseClimb from "./StaricCaseClimp";

function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState();
  const [msg, setMsg] = useState("");
  const MAX = 2147483647;
  const MIN = -2147483648;

  const val = () => {
    let number = value;

    let revnumber = 0;

    if (number < 0) {
      setMsg("could you enter pasitive value");
      setCount();
    } else {
      if (number <= MAX) {
        while (number != 0) {
          revnumber = revnumber * 10 + (number % 10);
          number = Math.floor(number / 10);
        }
        console.log(revnumber);
        setCount(revnumber);
        setMsg("");
      } else {
        setMsg("number limite is exit ");
        setCount();
      }
    }
  };

  return (
    <>
      <h1>My App</h1>

      <input
        type="number"
        placeholder="Enter you integer value"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>

      <button type="button" onClick={val}>
        onClick
      </button>
      <br />
      <h1>
        {count} {msg}
      </h1>
      <ReverseInteger />
      <StaircaseClimb n={10} />
    </>
  );
}

export default App;
