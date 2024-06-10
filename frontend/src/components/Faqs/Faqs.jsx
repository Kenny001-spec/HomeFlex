import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Faqs.css';

const Faqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What is tokenized real estate?",
      answer: "Tokenized real estate involves converting physical real estate properties into digital tokens on a blockchain."
    },
    {
      question: "How does tokenized real estate work?",
      answer: " Properties are divided into shares, represented by digital tokens on a blockchain. Investors can buy these tokens, gaining a proportional ownership stake in the property."
    },
    {
      question: "What are the benefits of investing in tokenized real estate?",
      answer: " It enhanced transparency, and easier transferability of ownership compared to traditional real estate investments."
    },
    {
      question: "What is the minimum investment amount?",
      answer: "The minimum investment amount varies by property but is generally lower than traditional real estate investments due to fractional ownership."
    },
    {
      question: "Is my investment secure?",
      answer: "Yes, our platform uses blockchain technology, which provides a secure and immutable ledger for all transactions. "
    }
  ];

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className='faq-header'>
      <div className='sub-faq'>
        <h1>Frequently Asked Questions</h1>
        <p>Here are answers to some of our frequently asked questions</p>
      </div>
      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-item'>
            <div className='faq-question' onClick={() => toggleAnswer(index)}>
              {faq.question}
              <FontAwesomeIcon 
                icon={openQuestion === index ? faChevronUp : faChevronDown} 
                className='faq-icon'
              />
            </div>
            {openQuestion === index && (
              <div className='faq-answer'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
