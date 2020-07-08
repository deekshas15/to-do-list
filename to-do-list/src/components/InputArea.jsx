import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.textFunc} type="text" value={props.text} />
      <button onClick={props.add}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
