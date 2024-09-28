import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";


const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <svg data-accordion-icon className={`arrow ${isOpen ? "active" : ""} w-3 h-3 rotate-180 shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQComponent({data}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentHeight = useRef();

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="m-18 text-center">
      <div className="my-16 container max-w-screen-md mx-auto">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      
    </div>
  );
}
