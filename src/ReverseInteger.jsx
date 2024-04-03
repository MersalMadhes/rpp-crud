import React, { useState } from "react";

function ReverseInteger() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const reverse = () => {
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;

    let x = parseInt(input);
    let sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);

    let reversedX = 0;
    while (x !== 0) {
      const digit = x % 10;
      reversedX = reversedX * 10 + digit;
      x = Math.floor(x / 10);
    }

    reversedX *= sign;

    if (reversedX < INT_MIN || reversedX > INT_MAX) {
      setResult(0);
    } else {
      setResult(reversedX);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an integer"
      />
      <button onClick={reverse}>Reverse</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default ReverseInteger;
