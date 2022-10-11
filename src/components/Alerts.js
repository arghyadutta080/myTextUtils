import React from "react";

function Alerts(props) {
  const capatalize = (words) => {
    let word = words.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    props.alertMsg && (
      <div
        className={`alert alert-${props.alertMsg.typ} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capatalize(props.alertMsg.typ)}</strong> :{" "}
        {props.alertMsg.message}
      </div>
    )
  );
}

export default Alerts;
