import { useState } from "react";
import "./Styles.css";
import quotes from "./quotes.json";
import colors from "./colors";

// parte funcional

function App() {
  // seleccion al azar
  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);

  //cambio al azar
  const changeUser = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };
  //color al azar
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex];

  document.body.style = `background: ${colors[index].hex}`;

  //parte visual

  return (
    <div className="container">
      <div className="card ">
        <h1 style={{ color: colors[index].hex }}>
          <i className="fa-solid fa-quote-left"></i> {quotes[index].quote}
        </h1>
        <div className="footer">
          <h2 style={{ color: colors[index].hex }}>
            {`"`}
            {quotes[index].author}
            {`"`}
          </h2>
          <button onClick={changeUser} style={{background: `${colors[index].hex}` }}>
             <i className="fa-solid fa-circle-arrow-right"></i> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

