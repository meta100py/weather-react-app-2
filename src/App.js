import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was created by{" "}
          <a
            href="https://github.com/meta100py"
            target="_blank"
            rel="noopener noreferrer"
          >
            Valen
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/meta100py/weather-react-app-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://stunning-sopapillas-48c8d2.netlify.app">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
