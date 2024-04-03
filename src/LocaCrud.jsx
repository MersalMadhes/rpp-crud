import { useState } from "react";

const LocalCrud = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  function submit() {}

  return (
    <>
      <h1>My LocalCrud</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={submit}>Save</button>
    </>
  );
};
