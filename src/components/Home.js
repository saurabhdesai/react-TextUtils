import React, { useState } from "react";
export default function Home(props) {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleOnClick = () => {
    setText(text.toUpperCase());
  };
  const handleClear = () => {
    setText("");
  };
  const handleOnClicklowercase = () => {
    setText(text.toLowerCase());
  };
  const handleOnClickcopytext = () => {
    navigator.clipboard.writeText(text);
  };
  const handleOnClickremovespace = () => {
    let txt = text.split(/[ ]+/);
    setText(txt.join(" "));
  };
  return (
    <div>
      <div className="container my-3">
        <h1>{props.title}</h1>
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "#292844" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          placeholder="Leave a comment here"
          rows="10"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button
          disabled={text.length == 0}
          className="btn btn-primary my-2  mx-3"
          onClick={handleOnClick}
        >
          Change to Uppercase
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-primary my-2 mx-3"
          onClick={handleOnClicklowercase}
        >
          Change to LowerCase
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-primary my-2 mx-3"
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-primary my-2 mx-3"
          onClick={handleOnClickcopytext}
        >
          Copy text
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-primary my-2 mx-3"
          onClick={handleOnClickremovespace}
        >
          Remove extra space
        </button>
      </div>
      <div className="container">
        <h4>
          words:
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </h4>
        <h4>
          characters:
          {text.length}
        </h4>
        <p>
          <h4>Preview:</h4>
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </div>
  );
}
