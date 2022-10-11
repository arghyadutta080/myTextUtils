import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const clickonbutton = () => {
    // console.log("clicked on button " + text)
    const newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text converted to Uppercase", "success")
  };

  const clickonbutton2 = () => {
    var newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text converted to Lowercase", "success")
  };

  const changeText = (event) => {
    // console.log("text change")
    setText(event.target.value);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success")
  };

  const remove = () => {
    var newtext = text.replace(/\s+/g, " ").trim();
    setText(newtext);
    props.showAlert("Extra spaces are removed", "success")
  };

  const clear = () => {
    setText("");
    props.showAlert("Textbox is cleared", "success")
  };


  return (
    <div>
      <>
        <div
          style={
            props.bodymode === "light"
              ? {
                color: "black",
                backgroundColor: "white",
                border: "2px solid black",
                borderRadius: "10px",
              }
              : {
                color: "white",
                backgroundColor: "#021b33",
                border: "2px solid white",
                borderRadius: "10px",
              }
          }
        >
          <div
            className="form-group mx-3 mt-3"
            style={
              props.bodymode === "light"
                ? {
                  color: "black",
                  backgroundColor: "white",
                  border: "2px solid black",
                  borderRadius: "10px",
                }
                : {
                  color: "white",
                  backgroundColor: "#021b33",
                  border: "2px solid white",
                  borderRadius: "10px",
                }
            }
          >
            <h3 className="mx-2">{props.heading}</h3>
            <textarea
              className="form-control ml-2 mr-2"
              id="exampleFormControlTextarea1"
              rows="5"
              value={text}
              onChange={changeText}
              style={
                props.bodymode === "light"
                  ? {
                    color: "black",
                    backgroundColor: "white",
                    border: "2px solid black",
                    borderRadius: "10px",
                  }
                  : {
                    color: "white",
                    backgroundColor: "gray",
                    border: "2px solid white",
                    borderRadius: "10px",
                  }
              }
            ></textarea>
            <input
              className="btn btn-primary mt-3 mx-2 mb-3"
              type="submit"
              value="Convert To UpperCase"
              onClick={clickonbutton}
            ></input>
            <input
              className="btn btn-primary mt-3 mx-1 mb-3"
              type="submit"
              value="Convert To LowerCase"
              onClick={clickonbutton2}
            ></input>
            <input
              className="btn btn-primary mt-3 mx-1 mb-3"
              type="submit"
              value="Copy Text"
              onClick={copyText}
            ></input>
            <input
              className="btn btn-primary mt-3 mx-1 mb-3"
              type="submit"
              value="Remove Extra Space"
              onClick={remove}
            ></input>
            <input
              className="btn btn-danger mt-3 mx-1 mb-3"
              type="submit"
              value="Clear Text"
              onClick={clear}
            ></input>
          </div>
          <div
            className="mt-5 mx-3"
            style={
              props.bodymode === "light"
                ? {
                  color: "black",
                  backgroundColor: "white",
                  border: "2px solid black",
                  borderRadius: "10px",
                }
                : {
                  color: "white",
                  backgroundColor: "#021b33",
                  border: "2px solid white",
                  borderRadius: "10px",
                }
            }
          >
            <h3 className="mx-2">Text Summary</h3>
            <p className="mx-2">
              {/* {text.split(" ").length} words and {text.length} characters */}
              {text[text.length - 1] === " " || text.length === 0 ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters
            </p>
          </div>
          <div
            className="mt-5 mx-3 mb-3"
            style={
              props.bodymode === "light"
                ? {
                  color: "black",
                  backgroundColor: "white",
                  border: "2px solid black",
                  borderRadius: "10px",
                }
                : {
                  color: "white",
                  backgroundColor: "#021b33",
                  border: "2px solid white",
                  borderRadius: "10px",
                }
            }
          >
            <h3 className="mx-2">Text Preview</h3>
            <p className="mx-2">{text.length > 0 ? text : "write something in the textbox to preview"}</p>
          </div>
        </div>
      </>
    </div>
  );
}
