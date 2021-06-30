import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(people);

  function goBack() {
    if (index === 0) {
      setIndex(3);
    } else {
      setIndex(index - 1);
    }
  }

  function goForward() {
    if (index === 3) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function randomReview() {
    let randomInt = Math.floor(Math.random() * data.length);
    if (randomInt !== index) {
      setIndex(randomInt);
    } else {
      randomReview();
    }
  }

  return (
    <article className="review">
      <div className="img-container">
        <img
          className="person-img"
          src={data[index].image}
          alt={data[index].name}
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{data[index].name}</h4>
      <p className="job">{data[index].job}</p>
      <p className="info">{data[index].text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={goBack}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={goForward}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
