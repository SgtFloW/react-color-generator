import randomColor from "randomcolor";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("#efefef");

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h4>Random Color Generator</h4>
      <button onClick={() => setColor(randomColor())}>Change Color</button>
      <small>Active color: {color}</small>
    </div>
  );
}
