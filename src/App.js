import { useEffect, useState } from "react";

function App() {
  const [advice, setadvice] = useState("");
  const [count, setcount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setadvice(data.slip.advice);
    setcount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}> Get Advice </button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong> {props.count} </strong> pieces of advice
    </p>
  );
}

export default App;
