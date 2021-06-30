import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{props.data.title}</h4>
        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {open ? <p>{props.data.info}</p> : null}
    </article>
  );
};

export default Question;
