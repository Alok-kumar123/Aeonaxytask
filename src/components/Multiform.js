// Question.js

import React, { useState } from 'react';
import '../App.css'
import icon1 from './icons8-woman-student-48.png'
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subheader: {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  optionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '20px',
    marginBottom: '20px',
  },
  option: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
  },
  optionText: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  optionLabel: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  optionSubLabel: {
    fontSize: '14px',
    color: '#666',
  },
  continueButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

function Question({ question, onNext, onPrevious, isFirstQuestion }) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option state
  }

  return (
    <>
    {question.options?<div className="container">
      <div className="header">
        <h1>{question.question}</h1>
        <p>{question.mini}</p>
      </div>
      <div className="options">
        {question.options.map((option, index) => (
          <>
          {question.type!=="math"?<div className="option" key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="user-type"
              value={option.value}
              onChange={handleOptionChange}
              checked={selectedOption === option.value}
            />
           <label htmlFor={`option-${index}`}>
              <img src={option.url} style={{height:30 , width: 30}}/>{option.label}
            </label>
          </div>:
          <>
          <div style={styles.optionsContainer}>
          <div style={styles.option}>
            <div style={styles.optionText}><InlineMath  math='[5 \times {\frac {1}{2}}] = ?'/> </div>
            <div style={styles.optionLabel}>Arithmetic</div>
            <div style={styles.optionSubLabel}>Introductory</div>
          </div>
          <div style={styles.option}>
            <div style={styles.optionText}><InlineMath math='3x + 5 = 4'/></div>
            <div style={styles.optionLabel}>Basic Algebra</div>
            <div style={styles.optionSubLabel}>Foundational</div>
          </div>
          <div style={styles.option}>
            <div style={styles.optionText}><InlineMath math='x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}'/></div>
            <div style={styles.optionLabel}>Intermediate Algebra</div>
            <div style={styles.optionSubLabel}>Intermediate</div>
          </div>
          <div style={styles.option}>
            <div style={styles.optionText}><InlineMath math='\int_{0}^{L} x^2 dx = ? '/></div>
            <div style={styles.optionLabel}>Calculus</div>
            <div style={styles.optionSubLabel}>Advanced</div>
          </div>
        </div>
         
        </>
        }
          </>
        ))}
      </div>
      <div className="navigation-buttons">
         
      <button
  onClick={onNext}
  disabled={!selectedOption}
  style={selectedOption ? styles.continueButton : {...styles.continueButton, backgroundColor: '#ccc'}}
>
  Continue
</button>

      </div>
    </div>:
    <div
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        className="left-half"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
          alt="Your Image"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
      <div
        className="right-half"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div className="header" style={{ marginBottom: '2rem' }}>
          <h1>{question.question}</h1>
        </div>
        <div className="content" style={{ lineHeight: 1.5 }}>
          <p>
             {question.mini}
          </p>
          <p style={{textAlign:'center'}}>
           -{question.author}
          </p>
        </div>
        <div
          className="button"
          style={{
            marginTop: '1rem',
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: '5px',
            color: '#fff',
            cursor: 'pointer',
             
          }}
        >
          <button onClick={onNext}>Continue</button>
        </div>
      </div>
    </div>}
    </>
  );
}

export default Question;
